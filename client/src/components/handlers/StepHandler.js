import { React, useEffect, useState } from 'react'
import { Steps, Row, Col } from 'antd';
import './StepHandler.css'
const { Step } = Steps;

const StepHandler = () => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    setCurrent(parseInt(window.localStorage.getItem('step')));
  }, [window.localStorage.getItem('step')]);

  return (
    <Row className="step-container" type="flex" align="middle" justify="center">
      <Col span={8}>
        <Steps size="small" current={current}>
          <Step title="Shipping" />
          <Step title="Payment" />
          <Step title="Confirmation" />
        </Steps>
      </Col>
    </Row>
  )
}

export default StepHandler