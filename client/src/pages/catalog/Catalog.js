import React from "react";
import { Table, InputNumber, Space, Button } from "antd";

const Catalog = (props) => {

  function onChange(value, record) {
    data = data.map((item) => {
      if (item.key === record.key) {
        item.quantity = value;
      }
      return item
    })
  }

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

  const columns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Quantity', dataIndex: '', key: 'quantity',
      render: (record) => <InputNumber min={1} max={100} defaultValue={record.quantity} onChange={(value) => onChange(value, record)} />,
    },
    {
      title: 'Purchase',
      dataIndex: '',
      key: 'x',
      render: (record) => <Button type="primary" onClick={() => props.addHandler(record)}>Add to Cart</Button>,
    },
  ];

  return (
    <>
      <Space direction="vertical" size="large"></Space>
      <Table
        columns={columns}
        dataSource={data}
      />
    </>
  )
};

export default Catalog;