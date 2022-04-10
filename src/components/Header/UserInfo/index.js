import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../store";
import { Typography } from "antd";
const UserInfo = () => {
  const { Title } = Typography;

  const userInformation = useAppSelector((state) => state.user.data);
  console.log(userInformation);
  return (
    <div className="user">
      <Avatar icon={<UserOutlined />} />
      <Title style={{ marginLeft: 15 }} level={5}>
        {userInformation.fullName}
      </Title>
    </div>
  );
};

export default UserInfo;
