import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (user) => {
    console.log("USER ::>>> ", user);

    const res = await axios.post(
      "http://127.0.0.1:8000/api/auth/login",
      user
    );

    dispatch({ type: "LOGIN", payload: res.data });
    console.log("response :::>>>", res.data);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
      <div className="w-full max-w-md">
        {/* <Logo
          className="block w-full max-w-xs mx-auto text-white fill-current"
          height={50}
        /> */}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button- w-full bg-blue-500"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
