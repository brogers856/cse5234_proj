import React from "react";
import './Summary.css'
import { Link } from "react-router-dom";
import { Table, Button, Card, Row, Col } from "antd";
import { ProcessBar } from "../../components";

const Summary = (props) => {
    let shippingInfo = JSON.parse(window.localStorage.getItem('shippingInfo'))
    let paymentInfo = JSON.parse(window.localStorage.getItem('paymentInfo'))

    const handleConfirmClick = () => {
        window.localStorage.setItem('cart', [])
        window.localStorage.setItem('total', null)
        window.localStorage.setItem('shippingInfo', null)
        window.localStorage.setItem('paymentInfo', null)
    }

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
                            </Card>
                        }
                    </Col>
                    <Col span={8}>
                        {paymentInfo !== null &&
                            <Card title="Payment">
                                <p><b>Card Number:</b> {paymentInfo.number}</p>
                                <p><b>Expiration Date:</b> {paymentInfo.expiration}</p>
                                <p><b>Security Code:</b> {paymentInfo.security}</p>
                            </Card>
                        }
                    </Col>
                </Row>
                <h3>Items | Total: ${window.localStorage.getItem("total")}</h3>
                <Table
                    columns={columns}
                    dataSource={props.cart}
                />
                <div className="button_container">
                    <Button type="primary" onClick={() => handleConfirmClick()}><Link to="/confirmation">Confirm Purchase</Link></Button>
                    <Button className="cancel_button" type="primary" danger onClick={() => handleCancelClick()}><Link to="/">Cancel Purchase</Link></Button>
                </div>
            </div>
        </>
    )
};

export default Summary;