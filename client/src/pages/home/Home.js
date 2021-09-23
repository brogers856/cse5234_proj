import React from "react";
import { Table, InputNumber, Space } from "antd";

function onChange(value) {
  console.log('changed', value);
}

const columns = [
  { title: 'Product', dataIndex: 'product', key: 'product' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity',
      render: () => <InputNumber min={0} max={100} defaultValue={0} onChange={onChange} />, },
  {
    title: 'Purchase',
    dataIndex: '',
    key: 'x',
    render: () => <a>Add to Cart</a>,
  },
];

const data = [
  {
    key: 1,
    product: 'Laptop',
    price: 500,
    condition: 'Like new'
  },
  {
    key: 2,
    product: 'Headphones',
    price: 50,
    condition: 'Lightly used'
  },
  {
    key: 3,
    product: 'Keyboard',
    price: 25,
    condition: 'Brand new'
  },
  {
    key: 4,
    product: 'Monitor',
    price: 75,
    condition: 'Lightly used'
  },
  {
    key: 5,
    product: 'Desktop',
    price: 800,
    condition: 'Heavy use, scratches/dents'
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
