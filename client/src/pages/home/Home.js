import { React, useState } from "react";
import { Table, InputNumber, Space, Button, Alert } from "antd";

const Home = (props) => {
  const [data, setData] = useState(
    [
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
    ]
  )
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState()
  const [quantity, setQuantity] = useState()

  const handleClose = () => {
    setVisible(false);
  };

  function onChange(value, record) {
    let newData = data
    setData(newData.map((item) => {
      if (item.key === record.key) {
        item.quantity = value;
      }
      return item
    }))
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
      title: 'Purchase',
      dataIndex: '',
      key: 'x',
      render: (record) => <Button type="primary" onClick={() => {
        props.addHandler(record)
        setVisible(true)
        setItem(record.product)
        setQuantity(record.quantity)
        setTimeout(handleClose, 2000)
      }}>Add to Cart</Button>,
    },
  ];

  return (
    <>
      <Space direction="vertical" size="large"></Space>
      <Table
        columns={columns}
        dataSource={data}
      />
      {visible ? (
        <Alert message={`${item} (Quantity ${quantity}) added to cart`} type="success" showIcon />
      ) : null}
    </>
  )
};

export default Home;