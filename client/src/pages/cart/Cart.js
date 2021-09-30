import { React, useState } from "react";
import { useHistory } from "react-router";
import { Table, Button, InputNumber, Alert } from "antd";

const Cart = (props) => {
    const [visible, setVisible] = useState(false)
    let history = useHistory();

    function clickHandler() {
        window.localStorage.setItem('step', "0")
        if (JSON.parse(window.localStorage.getItem('cart')).length === 0) {
            setVisible(true)
        } else {
            history.push("/shipping");
        }
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
                <Alert message="You cannot checkout with an empty cart!" type="error" closable afterClose={handleClose} />
            ) : null}
        </>
    )
};

export default Cart;