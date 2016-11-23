import { hashHistory } from 'react-router';
import { Form, Icon, Input, Button } from 'antd';

export default class extends React.Component {
  state={
    username:'',
    password:''
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    hashHistory.push('/');
  }

  handleChange(field,ev){
    this.state[field]=ev.target.value;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="login-view">
        <Form className="bd" mode="inline" onSubmit={this.handleSubmit.bind(this)}>
          <header className="hd">
            <span>Login</span>
          </header>
          <Form.Item>
            <Input size="large" onChange={this.handleChange.bind(this,'username')} addonBefore={<Icon type="user" />} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input size="large" onChange={this.handleChange.bind(this,'password')} addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
