import React from "react";
import { Form, Input, Button, Row, DatePicker } from "antd";
import { ProcessBar } from "../../components";
import { CreditCardOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import "./Payment.css"

const Payment = (props) => {
  let history = useHistory();

  const onFinish = (values) => {
    window.localStorage.setItem("paymentInfo", JSON.stringify(values));
    history.push("/summary");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function calculateTotal(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].price * data[i].quantity;
    }
    window.localStorage.setItem("total", total);
    return total;
  }
  return (
    <>
      <ProcessBar page="2" />
      <Row type="flex" align="middle" justify="center" style={{marginTop:"2rem"}}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div>
            <Row type="flex" align="middle" justify="center">
              <h1>Your total is: ${calculateTotal(props.cart)}</h1>
            </Row>
          </div>
          <Form.Item label="Credit Card">
            <Input.Group>
              <Form.Item
                name={"number"}
                noStyle
                rules={[
                  { required: true, message: "Card number is required" },
                  () => ({
                    validator(_, value) {
                      if (value.length !== 15 && value.length !== 16) {
                        return Promise.reject(
                          new Error(
                            "The credit card number must be 15 or 16 digits long"
                          )
                        );
                      }
                      if (!Number.isInteger(parseInt(value))) {
                        return Promise.reject(
                          new Error("The credit card number must be a number")
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<CreditCardOutlined />}
                  style={{ width: "100%" }}
                  placeholder="Credit card number"
                />
              </Form.Item>
            </Input.Group>
            <Input.Group>
              <Form.Item
                name={"expiration"}
                noStyle
                rules={[
                  { required: true, message: "Expiration date is required" },
                ]}
              >
                <DatePicker picker="month" style={{width:"50%"}} placeholder="MM/YY" format="MM[/]YY"/>
              </Form.Item>
              <Form.Item
                name={"security"}
                noStyle
                rules={[
                  { required: true, message: "Security number is required" },
                  () => ({
                    validator(_, value) {
                      if (value.length !== 3) {
                        return Promise.reject(
                          new Error("The security code must be 3 digits long")
                        );
                      }
                      if (!Number.isInteger(parseInt(value))) {
                        return Promise.reject(
                          new Error("The security code must be a number")
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input style={{ width: "50%" }} placeholder="CVC" />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
};

export default Payment;
