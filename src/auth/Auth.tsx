import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  // console.log('Success:', values);
  alert(values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  // console.log('Failed:', errorInfo);
  alert(errorInfo);
};

const Auth: React.FC = () => (
  <div className="form-login">
    <h3 style={{ color: 'black' }}>Đăng nhập</h3>
    <Form
      className="form-login-item"
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{ width: 500 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        wrapperCol={{ span: 24 }}
        style={{ display: 'flex', justifyContent: 'center' }}
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Nhớ mật khẩu?</Checkbox>
      </Form.Item>

      <Form.Item
        label={null}
        wrapperCol={{ span: 24 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default Auth;
