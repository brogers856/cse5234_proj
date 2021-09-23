import React from "react";
import { Table, InputNumber, Space, Button } from "antd";

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
    render: (record) => <InputNumber min={0} max={100} defaultValue={0} onChange={(value) => onChange(value, record)} />,
  },
  {
    title: 'Purchase',
    dataIndex: '',
    key: 'x',
    render: (record) => <Button type="primary" onClick={()=> console.log(record)}>Add to Cart</Button>,
  },
];

let data = [
  {
    key: 1,
    product: 'Laptop',
    price: 500,
    quantity: 0,
    description: 'Like new'
  },
  {
    key: 2,
    product: 'Headphones',
    price: 50,
    quantity: 0,
    description: 'Lightly used'
  },
  {
    key: 3,
    product: 'Keyboard',
    price: 25,
    quantity: 0,
    description: 'Brand new'
  },
  {
    key: 4,
    product: 'Monitor',
    price: 75,
    quantity: 0,
    description: 'Lightly used'
  },
  {
    key: 5,
    product: 'Desktop',
    price: 800,
    quantity: 0,
    description: 'Heavy use, scratches/dents'
  },
];


const Home = () => (
  <>
    <Space direction="vertical" size="large"></Space>
    <Table
      columns={columns}
      dataSource={data}
    />
  </>
);

export default Home;
