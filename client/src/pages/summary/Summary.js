import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import { ProcessBar } from "../../components";

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

        <div>
            <ProcessBar page="3" />
            <h2>Summary</h2>
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
            <h3>Items | Total: ${window.localStorage.getItem("total")}</h3>
            <Table
                columns={columns}
                dataSource={props.cart}
            />
            <div style={{ display: "flex" }}>
                <Button type="primary"><Link to="/confirmation">Confirm Purchase</Link></Button>
                <Button style={{ marginLeft: "2em" }} type="primary" danger onClick={() => handleClick()}><Link to="/">Cancel Purchase</Link></Button>
            </div>
        </div>

    )
};

export default Summary;