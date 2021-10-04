import React, { useState } from 'react';
import { message, Drawer, Rate, Form, Button, Col, Row, Input, Space } from 'antd';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  const { TextArea } = Input;

  const key = 'updatable';

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = () => {
    message.loading({ content: 'Sending...', key });
    setTimeout(() => {
      message.success({ content: 'Feedback sent!', key, duration: 2 });
    }, 1000);
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Contact Us
      </Button>
      <Drawer
        title="Contact Us"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { type: "email", required: true, message: "Email is required" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="orderNumber"
                label="Order Number"
                rules={[{ required: false }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="#"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="rating"
                label="Rating"
                rules={[{ required: false, message: 'Please select a rating' }]}
              >
                <Rate />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="comments"
                label="Comments"
                rules={[{ required: false }]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>

        </Form>

        <Row gutter={16} style={{ marginTop: "5rem" }}>
          <Col span={24}>
            <Button type="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Col>
        </Row>

      </Drawer>

    </>
  );
};

export default Contact;