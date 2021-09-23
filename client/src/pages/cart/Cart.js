import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { Table, Space, Button, InputNumber } from "antd";

function onChange(value, record) {
    data = data.map((item) => {
        if(item.key === record.key) {
          item.quantity = value;
        }
        return item
      })
}

const columns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
        title: 'Quantity', dataIndex: '', key: 'quantity',
        render: (record) => <InputNumber min={0} max={100} defaultValue={1} onChange={(value) => onChange(value, record)} />,
      },
    {
        title: 'Remove',
        dataIndex: '',
        key: 'x',
        render: () => <Button type="primary" danger>Remove from Cart</Button>,
    },
];

let data = [
    {
        key: 1,
        product: 'Laptop',
        price: 500,
        quantity: 1,
        description: 'Like new'
    },
    {
        key: 2,
        product: 'Headphones',
        price: 50,
        quantity: 1,
        description: 'Lightly used'
    },
    {
        key: 3,
        product: 'Keyboard',
        price: 25,
        quantity: 1,
        description: 'Brand new'
    },
    {
        key: 4,
        product: 'Monitor',
        price: 75,
        quantity: 1,
        description: 'Lightly used'
    },
    {
        key: 5,
        product: 'Desktop',
        price: 800,
        quantity: 1,
        description: 'Heavy use, scratches/dents'
    },
];

const Cart = () => (
    <>
        <Space direction="vertical" size="large"></Space>
        <Table
            columns={columns}
            dataSource={data}
            footer={() => <Button style={{ marginLeft: "auto" }} type="primary"><Link to="/shipping">Checkout</Link></Button>}
        />
    </>
);

export default Cart;