import React from "react";
import { Link } from "react-router-dom"
import { Table, Space, Button } from "antd";

function onChange(value) {
    console.log('changed', value);
}

const columns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
        title: 'Remove',
        dataIndex: '',
        key: 'x',
        render: () => <Button type="primary" danger>Remove from Cart</Button>,
    },
];

const data = [
    {
        key: 1,
        product: 'Laptop',
        price: 500,
        description: 'Like new'
    },
    {
        key: 2,
        product: 'Headphones',
        price: 50,
        description: 'Lightly used'
    },
    {
        key: 3,
        product: 'Headphones',
        price: 50,
        description: 'Lightly used'
    },
    {
        key: 4,
        product: 'Keyboard',
        price: 25,
        description: 'Brand new'
    },
    {
        key: 5,
        product: 'Monitor',
        price: 75,
        description: 'Lightly used'
    },
    {
        key: 6,
        product: 'Desktop',
        price: 800,
        description: 'Heavy use, scratches/dents'
    },
];

const Cart = () => (
    <>
        <Space direction="vertical" size="large"></Space>
        <Table
            columns={columns}
            dataSource={data}
        />
        <Button style={{ marginLeft: "auto" }} type="primary"><Link to="/shipping">Checkout</Link></Button>
    </>
);

export default Cart;