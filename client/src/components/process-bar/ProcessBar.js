import { Steps } from 'antd';
import { CarOutlined, CreditCardOutlined, FileDoneOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
const { Step } = Steps;

const ProcessBar = (props) => {
    return (
        <Steps current={props.page} style={{marginBottom: "1rem"}}>
            <Step title="Shipping Information" icon={<CarOutlined />} />
            <Step title="Payment Information" icon={<CreditCardOutlined />} />
            <Step title="Order Summary" icon={<FileDoneOutlined />}/>
            <Step title="Done" icon={<SafetyCertificateOutlined />}/>
        </Steps>
    )
}

export default ProcessBar
