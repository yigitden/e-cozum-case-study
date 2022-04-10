import Navbar from "../../components/Header";
import { Layout } from "antd";
import PaymentArea from "../../components/PaymentArea";
 
const Payment = () => {
  const { Content } = Layout;
  return (
    <Layout>
    <Navbar />
    <Content>
      <PaymentArea />
    </Content>
  </Layout>
  )
}

export default Payment