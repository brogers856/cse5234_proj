import React from "react";
import { Link } from "react-router-dom"
import { Table, Button, InputNumber } from "antd";

const Cart = (props) => {

    function clickHandler() {
        window.localStorage.setItem('step', "0")
    }

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
                footer={() => <div><Button style={{ marginLeft: "auto" }} type="primary" onClick={() => clickHandler()}><Link to="/shipping">Checkout</Link></Button> <Button style={{ marginLeft: "auto", marginTop: "2em", marginBottom: "2em", marginRight: "2em" }} type="primary" danger onClick={() => props.removeAllHandler()}>Remove all items</Button></div>}
            />
        </>
    )
};

export default Cart;