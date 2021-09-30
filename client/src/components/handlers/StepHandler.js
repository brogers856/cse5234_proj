import { React, useEffect, useState } from 'react'
import { Steps } from 'antd';
const { Step } = Steps;

const StepHandler = () => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    setCurrent(parseInt(window.localStorage.getItem('step')));
  }, [window.localStorage.getItem('step')]);

  return (
    <Steps size="small" current={current}>
      <Step title="Shipping" />
      <Step title="Payment" />
      <Step title="Confirmation" />
    </Steps>
  )
}

export default StepHandler