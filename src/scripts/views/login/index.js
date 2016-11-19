import React from 'react';
import ReactDom from 'react-dom';
import { Form, Icon, Input, Button } from 'antd';


export default class LoginApp extends React.Component {
  render() {
    return (
      <div className="login-view">
        <Form className="bd">
          <header className="hd">Login</header>
          <Form.Item>
            <Input size="large" addonBefore={<Icon type="user" />} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input size="large" addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Log in</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
