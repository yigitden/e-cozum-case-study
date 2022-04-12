import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useAppSelector } from "../../../store";


const UserInfo = () => {
  const { Title } = Typography;


  const UserInfo = useAppSelector((state) => state.user.data).data;
  console.log(UserInfo)


  return (
    <div className="user">
      <Avatar icon={<UserOutlined />} />
      <Title style={{ marginLeft: 15 }} level={5}>
        {UserInfo && `${UserInfo.fullName}`}
      </Title>
    </div>
  );
};

export default UserInfo;
