import React from "react";
import { Form, Input, Button, Select } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;


const Shipping = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
            <Form.Item label="Address">
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'street']}
                        noStyle
                        rules={[{ required: true, message: 'Street is required' }]}
                    >
                        <Input style={{ width: '50%' }} placeholder="Input street" />
                    </Form.Item>
                    <Form.Item
                        name={['address', 'state']}
                        noStyle
                        rules={[{ required: true, message: 'State is required' }]}
                    >
                        <Input style={{ width: '50%' }} placeholder="Input state" />
                    </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item label="Shipping Method" name="method" rules={[{ required: true, message: 'Shipping method is required' }]}>
                <Select placeholder="Select method">
                    <Option value="regular">Regular</Option>
                    <Option value="expedited">Expedited</Option>
                </Select>
            </Form.Item>

            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true, message: 'Email is required' }]}>
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    <Link to ="/payment">Submit</Link>
                </Button>
            </Form.Item>
        </Form>
    );
}
export default Shipping;