import UserInfo from "./UserInfo";
import { Layout } from "antd";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="navbar">
      <div className="logo" />

      <UserInfo />
    </Header>
  );
};

export default Header;
