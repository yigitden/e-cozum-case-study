import { Form, Input, Button, Card, Typography, Row, Col } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../store"; 

import { useNavigate } from "react-router";
import { addUser } from "../../features/UserSlice";
import { Layout } from "antd";


//if islogged false?
const Login = () => {
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const { Content } = Layout;


  const onFinish = (values) => {
    dispatch(addUser(values));
    navigate('/packagelist')
  };

  return (
    <Layout className="layout">
      <Content>
        <Row justify="center">
          <Col span={6}>
            <Card className="loginCard">
              <Form name="nest-messages" onFinish={onFinish}>
                <Text strong>Adınız Soyadınız</Text>
                <Form.Item
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Lütfen ad soyad bilgisi giriniz!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Text strong>Email Adresiniz</Text>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Lütfen e-mail adresinizi giriniz!",
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined />} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit"  block>
                    Devam Et
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
