import React, { useState } from "react";
import { Form, Input, Button, Space, Row, Radio, Select } from "antd";
const { Option } = Select;

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

  const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  // Why do I have to do this?
  const stateList = [];
  states.forEach(function(e) {
    stateList.push({label: e, value: e})
  })

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
              <Select
                style={{ width: "50%"}}
                placeholder="State/Province"
                options={stateList}
              />
            </Form.Item>
            <Form.Item
              name="zip"
              noStyle
              rules={[{ required: true, message: "Input a valid Postal Code",
              pattern: new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/s) }]}
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
