import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Table, Button, InputNumber, Alert } from "antd";

const Cart = (props) => {
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = useState('')
    let history = useHistory();

    const updateQuantity = (key, quantity) => {
        const updateCart = (item, key, quantity) => {
            if (item.key === key) {
                item.availableQuantity = quantity;
            }
        }
        props.cart.forEach(item => updateCart(item, key, quantity));
    }

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:9080/inventory-management/inventory', {
            method: 'GET',
            mode: 'cors'
          })
          .then(response => response.json())
          var items = response.items
          items.forEach(inv => updateQuantity(inv.key, inv.availableQuantity));
        }
        fetchData()
      }, [props.cart, updateQuantity]);

    function clickHandler() {
        if (JSON.parse(window.localStorage.getItem('cart')).length === 0) {
            setMessage('You cannot checkout with an empty cart!')
            setVisible(true)
        } else if (validateStock()) {
            setVisible(true)
        } else {
            history.push("/shipping");
        }
    }

    const validateStock = () => {
        let outOfStock = false
        let items = []
        for (let i = 0; i < props.cart.length; i++) {
            let obj = props.cart[i];
            if(obj.quantity > obj.availableQuantity){
                outOfStock = true
                items.push(obj.product)
            } 
        }
        setMessage(`We're sorry, but we currently don't have the requested amount of the following items: ${items.join(', ')}`)
        return outOfStock
    }

    const handleClose = () => {
        setVisible(false);
    };

    const columns = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        {
            title: 'Quantity', dataIndex: '', key: 'quantity',
            render: (record) => <InputNumber min={1} max={100} defaultValue={record.quantity} onChange={(value) => props.changeHandler(value, record)} />,
        },
        {
            title: 'Stock', dataIndex: 'availableQuantity', key: 'quantity'
        },
        {
            title: 'Remove',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button type="primary" danger onClick={() => props.removeHandler(record)}>Remove from Cart</Button>,
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={props.cart}
                footer={() => <div><Button style={{ marginLeft: "auto" }} type="primary" onClick={() => clickHandler()}>Checkout</Button> <Button style={{ marginLeft: "auto", marginTop: "2em", marginBottom: "2em", marginRight: "2em" }} type="primary" danger onClick={() => props.removeAllHandler()}>Remove all items</Button></div>}
            />
            {visible ? (
                <Alert message={message} type="error" closable afterClose={handleClose} />
            ) : null}
        </>
    )
};

export default Cart;