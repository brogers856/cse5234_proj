import React from "react";
import './Summary.css'
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Table, Button } from "antd";
import { ProcessBar } from "../../components";
=======
import { Table, Button, Card, Row, Col } from "antd";
>>>>>>> 1358187913078734abf33a2bfdb141441ecba09c

const Summary = (props) => {
    let shippingInfo = JSON.parse(window.localStorage.getItem('shippingInfo'))
    let paymentInfo = JSON.parse(window.localStorage.getItem('paymentInfo'))

    const handleClick = () => {
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
<<<<<<< HEAD

=======
        <>
>>>>>>> 1358187913078734abf33a2bfdb141441ecba09c
        <div>
            <ProcessBar page="3" />
            <h2>Summary</h2>
<<<<<<< HEAD
            <div style={{display:"flex"}}>
                {shippingInfo !== null &&
                    <div style={{width:"40%"}}>
                        <h3>Shipping</h3>
                        <p><b>Address:</b> {shippingInfo.addressLine1},{shippingInfo.addressLine1}</p>
                        <p><b>Shipping Method:</b> {shippingInfo.method}</p>
                        <p><b>Email:</b> {shippingInfo.email}</p>
                    </div>
                }
                {paymentInfo !== null &&
                    <div style={{width:"40%"}}>
                        <h3>Payment</h3>
                        <p><b>Card Number:</b> {paymentInfo.number}</p>
                        <p><b>Expiration Date:</b> {paymentInfo.expiration}</p>
                        <p><b>Security Code:</b> {paymentInfo.security}</p>
                    </div>
                }
            </div>
=======
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
>>>>>>> 1358187913078734abf33a2bfdb141441ecba09c
            <h3>Items | Total: ${window.localStorage.getItem("total")}</h3>
            <Table
                columns={columns}
                dataSource={props.cart}
            />
<<<<<<< HEAD
            <div style={{ display: "flex" }}>
                <Button type="primary"><Link to="/confirmation">Confirm Purchase</Link></Button>
                <Button style={{ marginLeft: "2em" }} type="primary" danger onClick={() => handleClick()}><Link to="/">Cancel Purchase</Link></Button>
=======
            <div className="button_container">
                <Button type="primary"><Link to="/confirmation">Confirm Purchase</Link></Button>
                <Button className="cancel_button" type="primary" danger onClick={() => handleClick()}><Link to="/">Cancel Purchase</Link></Button>
>>>>>>> 1358187913078734abf33a2bfdb141441ecba09c
            </div>
        </div>
        </>
    )
};

export default Summary;