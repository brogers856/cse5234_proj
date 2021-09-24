import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Table, Space, Button, InputNumber } from "antd";

const Cart = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(window.localStorage.getItem('cart') || "[]"));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    function onChange(value, record) {
        let newCart = cart.map((item) => {
            if (item.key === record.key) {
                item.quantity = value;
            }
            return item
        })
        setCart(newCart)
        window.localStorage.setItem('cart', JSON.stringify(newCart))
    }

    function remove(removeItem) {
        setCart(cart.filter(function (item) {
            return item.key !== removeItem.key
        }))
    }

    function removeAll() {
        setCart([]);
    }

    const columns = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        {
            title: 'Quantity', dataIndex: '', key: 'quantity',
            render: (record) => <InputNumber min={1} max={100} defaultValue={record.quantity} onChange={(value) => onChange(value, record)} />,
        },
        {
            title: 'Remove',
            dataIndex: '',
            key: 'x',
            render: (record) => <Button type="primary" danger onClick={() => remove(record)}>Remove from Cart</Button>,
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={cart}
                footer={() => <div><Button style={{ marginLeft: "auto" }} type="primary"><Link to="/shipping">Checkout</Link></Button> <Button style={{ marginLeft: "auto", marginTop: "2em", marginBottom: "2em", marginRight: "2em" }} type="primary" danger onClick={() => removeAll()}>Remove all items</Button></div>}
            />
        </>
    )
};

export default Cart;