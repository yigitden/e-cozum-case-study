import Navbar from "../../components/Header";
import Package from "../../components/Package";
import { Layout } from "antd";

const PackageList = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <Navbar />
      <Content>
        <Package />
      </Content>
    </Layout>
  );
};

export default PackageList;
