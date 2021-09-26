import React from "react";
import {Result, Button} from 'antd';
import {Link} from 'react-router-dom';

const Confirm = () => {
  return (
    <Result
      status="success"
      title="Purchase successful!"
      subTitle="Order number: 2017182818828182881."
      extra={[
        <Button key="buy"><Link to="/">Buy Again</Link></Button>,
      ]}
    />
  );
};

export default Confirm;
