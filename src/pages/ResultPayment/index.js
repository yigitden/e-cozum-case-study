import { CheckCircleOutlined } from "@ant-design/icons";
import { Result } from "antd";
import {  Row, Col,Card } from "antd";
import Navbar from "../../components/Header";
import { Layout } from 'antd';
const ResultPayment = () => {
  const { Header, Content } = Layout;
  return (
    <>
    <Layout  >
    <Navbar/>
    <Content className="result">

    <Row justify="center">
          <Col span={6}>
          <Card className="resultCard">
    <Result
       
      status="success"
      icon={<CheckCircleOutlined />}
      title="Başarıyla Tamamlandı!"
    /> </Card>
 </Col>
        </Row>
    </Content>
    </Layout>
    
    </>
   
  );
};

export default ResultPayment;
