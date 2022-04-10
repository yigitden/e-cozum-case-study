import { Card, Row, Col, Typography } from "antd";
import Basket from "./Basket";
import Contract from "./Contract";
import CreditCardInfo from "./CreditCardInfo";

const PaymentArea = () => {
  const { Text } = Typography;
  return (
    <div className="paymentArea">
       
      <Row className="paymentAreaColumn">
        <Col span={12}>
          <Card className="paymentCard">
            <Text strong>Kart Bilgileri</Text>
            <CreditCardInfo />
            <Text strong >Sözleşme</Text>
            <Contract />
          </Card>
        </Col>
       
        <Col span={6}>
          <Card className="paymentCard">
          <Text strong>Sepetteki Paketler</Text>
           <Basket/>
          </Card>
        </Col>
      </Row>
       
    </div>
  );
};

export default PaymentArea;
