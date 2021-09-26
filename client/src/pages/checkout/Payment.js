import React, { useState } from "react";
import { Form, Input, Button, Row } from "antd";

const Payment = () => {
  const onFinish = (values) => {
    const newInfo = {};

    for (var key in Object.keys(values)) {
      let k = Object.keys(values)[key];
      newInfo[k] = values[k];
    }

    setPaymentInfo(newInfo);
    window.localStorage.setItem("paymentInfo", JSON.stringify(newInfo));
    console.log("Payment Info (State): ", paymentInfo);
    console.log(
      "Payment Info (Local Storage): ",
      window.localStorage.getItem("paymentInfo", JSON.stringify(newInfo))
    );

    // Reroutes to following page given that the input is valid.
    window.location.href = "/summary";
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [paymentInfo, setPaymentInfo] = useState({});

  const [form] = Form.useForm();

  return (
    <Row type="flex" align="middle" justify="center">
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Payment Info">
            <Form.Item
              name="cardNumber"
              noStyle
              rules={[{ required: true, message: "Card number is required." }]}
            >
              <Input placeholder="Card Number" />
            </Form.Item>
            <Form.Item
              name="expiration"
              noStyle
              rules={[{ required: false, message: "Expiration is required." }]}
            >
              <Input placeholder="Expiration date (MM/YY)" />
            </Form.Item>
            <Form.Item
              name="securityCode"
              noStyle
              rules={[{ required: true, message: "CVC/CVV is required." }]}
            >
              <Input style={{ width: "50%" }} placeholder="CVC/CVV" />
            </Form.Item>
            <Form.Item
              name="zip"
              noStyle
              rules={[{ required: true, message: "Postal Code is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="Postal Code" />
            </Form.Item>
        </Form.Item>

        <Form.Item style={{width:"125%"}} wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Continue to Checkout
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Payment;
