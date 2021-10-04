import React from "react";
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ProcessBar } from '../../components';

const Confirm = () => {
  return (
    <>
      <ProcessBar page="4" />
      <Result
        status="success"
        title="Purchase successful!"
        subTitle="Order number: 2017182818828182881."
        extra={[
          <Button className="ant-btn-primary" key="buy"><Link to="/">Buy Again</Link></Button>,
        ]}
      />
    </>
  );
};

export default Confirm;
