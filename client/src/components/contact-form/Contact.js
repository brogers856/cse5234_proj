import React, { useState } from 'react';
import { Drawer, Rate, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  const { Option } = Select;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Contact Us
      </Button>
      <Drawer
        title="Create a new account"
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
                name="orderNumber"
                label="Order Number"
                rules={[{ required: false }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="#"
                  placeholder="(optional)"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="rating"
                label="Rating"
                rules={[{ required: false, message: 'Please select a rating' }]}
              >
                <Rate />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </Drawer>
    </>
  );
};

export default Contact;