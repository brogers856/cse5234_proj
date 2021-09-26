import React, { useState } from "react";
import { Form, Input, Button, Space, Row, Radio } from "antd";

const Shipping = () => {
  const onFinish = (values) => {
    const newInfo = {};

    for (var key in Object.keys(values)) {
      let k = Object.keys(values)[key];
      newInfo[k] = values[k];
    }

    setshippingInfo(newInfo);
    window.localStorage.setItem("shippingInfo", JSON.stringify(newInfo));
    console.log("Payment Info (State): ", shippingInfo);
    console.log(
      "Payment Info (Local Storage): ",
      window.localStorage.getItem("shippingInfo", JSON.stringify(newInfo))
    );

    // Reroutes to following page given that the input is valid.
    window.location.href = "/payment";
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [shippingInfo, setshippingInfo] = useState({});

  const [form] = Form.useForm();

  return (
    <Row type="flex" align="middle" justify="center">
      <Form
        form={form}
        name="basic"
        initialValues={window.localStorage.getItem("shippingInfo")}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Address">
          <Input.Group>
            <Form.Item
              name="addressLine1"
              noStyle
              rules={[{ required: true, message: "Street is required" }]}
            >
              <Input placeholder="Address Line 1" />
            </Form.Item>
            <Form.Item
              name="addressLine2"
              noStyle
              rules={[{ required: false }]}
            >
              <Input placeholder="Address Line 2" />
            </Form.Item>
          </Input.Group>
          <Space size="large" />
          <Input.Group compact>
            <Form.Item
              name="state"
              noStyle
              rules={[{ required: true, message: "State is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="State" />
            </Form.Item>
            <Form.Item
              name="zip"
              noStyle
              rules={[{ required: true, message: "Zip Code is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="Postal Code" />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="Shipping Method"
          name="method"
          rules={[{ required: true, message: "Shipping method is required" }]}
        >
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="standard">Standard</Radio.Button>
            <Radio.Button value="expedited">Expedited</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: "email", required: true, message: "Email is required" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Continue to Payment Details
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Shipping;