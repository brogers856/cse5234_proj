import React, { useState } from "react";
import './Summary.css'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { Table, Button, Card, Row, Col, Alert, Spin, Typography } from "antd";
import { ProcessBar } from "../../components";
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 64, color: "#FF8B48" }} spin />;


const Summary = (props) => {
    let shippingInfo = JSON.parse(window.localStorage.getItem('shippingInfo'))
    let paymentInfo = JSON.parse(window.localStorage.getItem('paymentInfo'))
    let total = JSON.parse(window.localStorage.getItem('total'))

    let history = useHistory()
    const [visible, setVisible] = useState(false)
    const [isLoading, setLoading] = useState(false);

    async function checkQuantity(url = 'http://localhost:9080/order-processing/order') {
        var data = {
            cart: props.cart,
            total: total,
            shippingInfo: shippingInfo,
            paymentInfo: paymentInfo
        }

        console.log(JSON.stringify(data))

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'cors'
            },
            body: JSON.stringify(data)
        });

        return response;
    }

    const handleConfirmClick = () => {
        setLoading(true);
        checkQuantity()
            .then(response => {

                if (response.status === 200) {
                    console.log('Success:', response)
                    window.localStorage.setItem('cart', [])
                    window.localStorage.setItem('total', null)
                    history.push('/confirmation')
                } else {
                    console.log('Error: ', response)
                    setVisible(true);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleClose = () => {
        setVisible(false);
    };

    const handleCancelClick = () => {
        window.localStorage.setItem('shippingInfo', null)
        window.localStorage.setItem('paymentInfo', null)
    }

    const columns = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        {
            title: 'Quantity', dataIndex: 'quantity', key: 'quantity',
        }
    ];

    return (
        <>
          {isLoading ? (
          <>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Spin indicator={antIcon} style={{ marginTop: "7rem" }} />
            <Title level={3}>Processing your order...</Title>
          </div>
          </>
        ) : (
            <>
            <div>
                <ProcessBar page="3" />
                <h2>Summary</h2>
                <Row justify="space-around">
                    <Col span={8}>
                    {shippingInfo !== null &&
                        <Card title="Shipping">
                        <p><b>Address:</b> {shippingInfo.addressLine1},{shippingInfo.addressLine2}</p>
                        <p><b>Shipping Method:</b> {shippingInfo.method}</p>
                        <p><b>Email:</b> {shippingInfo.email}</p>
                        </Card>}
                    </Col>
                    <Col span={8}>
                    {paymentInfo !== null &&
                        <Card title="Payment">
                            <p><b>Card Number:</b> {paymentInfo.number}</p>
                            <p><b>Expiration Date:</b> {paymentInfo.expiration.substr(0, 10)}</p>
                            <p><b>Security Code:</b> {paymentInfo.security}</p>
                        </Card>}
                    </Col>
                </Row>
                <h3>Items | Total: ${window.localStorage.getItem("total")}</h3>
                <Table
                    columns={columns}
                    dataSource={props.cart} />
                <div className="button_container">
                    <Button type="primary" onClick={() => handleConfirmClick()}>Confirm Purchase</Button>
                    <Button className="cancel_button" type="primary" danger onClick={() => handleCancelClick()}><Link to="/">Cancel Purchase</Link></Button>
                </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
                {visible ? (
                    <Alert message="Sorry, it looks like we don't have the stock necessary to complete your order." type="error" closable afterClose={handleClose} />
                ) : null}
            </div></>
        )}
        </>
    )
};

export default Summary;