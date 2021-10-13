import { React, useState, useEffect } from "react";
import { Table, InputNumber, Space, Button, Alert } from "antd";

const Catalog = (props) => {
  const [data, setData] = useState()
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState()
  const [quantity, setQuantity] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:9080/inventory-management/inventory', {
        method: 'GET',
        mode: 'cors'
      })
      .then(response => response.json())
      formatData(response.items)
    }
    fetchData();
  }, []);

  const formatData = (items) => {
    items.forEach(obj => renameKey(obj, 'name', 'product'));
    items.forEach(obj => renameKey(obj, 'desc', 'description'));
    items.forEach(obj => obj.price = obj.price/100);
    items.forEach(obj => obj.quantity = 1);
    setData(items)
  }

  const renameKey = (obj, oldKey, newKey) => {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

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

export default Catalog;