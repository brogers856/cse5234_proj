import React from 'react';
import { Form, Input, Button, InputNumber, message} from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';

const Payment = (props) => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function calculateTotal(data){
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data[i].price * data[i].quantity
        }
        return total
    }
    return (

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
            <p>Your total is: ${calculateTotal(props.cart)}</p>
        </div>
        <Form.Item label="Credit Card">
            <Input.Group compact>
                <Form.Item
                    name={['creditcard', 'number']}
                    noStyle
                    rules={[{ required: true, message: 'Card number is required' },
                    () => ({
                        validator(_, value) {
                          if (value.length !== 15 && value.length !== 16) {
                            return Promise.reject(new Error('The credit card number must be 15 or 16 digits long'));
                          }
                          if (!Number.isInteger(parseInt(value))) {
                            return Promise.reject(new Error('The credit card number must be a number'));
                          }
                          return Promise.resolve();
                        },
                      })
                ]}
                >
                    <Input prefix={<CreditCardOutlined />} style={{ width: '80%' }} placeholder="Credit card number" />
                </Form.Item>
                <Form.Item
                    name={['creditcard', 'expiration']}
                    noStyle
                    rules={[{ required: true, message: 'Expiration date is required' },
                    {
                        pattern: new RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
                        message: "Expiration date must be in MM/YY format"
                    }
                    ]}
                >
                    <Input style={{ width: '10%' }} placeholder="MM/YY" />
                </Form.Item>
                <Form.Item
                    name={['creditcard', 'security']}
                    noStyle
                    rules={[
                    { required: true, message: 'Security number is required' },
                    () => ({
                        validator(_, value) {
                          if (value.length !== 3) {
                            return Promise.reject(new Error('The security code must be 3 digits long'));
                          }
                          if (!Number.isInteger(parseInt(value))) {
                            return Promise.reject(new Error('The security code must be a number'));
                          }
                          return Promise.resolve();
                        },
                      })
                    ]}
                >
                    <Input style={{ width: '10%' }} placeholder="CVC" />
                </Form.Item>
            </Input.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    );
};

export default Payment;