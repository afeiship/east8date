import React from 'react';
import ReactDom from 'react-dom';
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';
import {
  browserHistory
} from 'react-router';


export default class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  handleChange(field, ev) {
    switch (field) {
      case 'username':
        this.setState({
          username: ev.target.value
        })
        break;
      case 'password':
        this.setState({
          password: ev.target.value
        });
        break;
      default:
    }
  }
  render() {
    return ( <
      div className = "login-view" >
      <
      Form className = "bd"
      mode = "inline"
      onSubmit = {
        this.handleSubmit.bind(this)
      } >
      <
      header className = "hd" >
      <
      span > Login < /span> <
      /header> <
      Form.Item >
      <
      Input size = "large"
      onChange = {
        this.handleChange.bind(this, 'username')
      }
      addonBefore = { < Icon type = "user" / >
      }
      placeholder = "Username" / >
      <
      /Form.Item> <
      Form.Item >
      <
      Input size = "large"
      onChange = {
        this.handleChange.bind(this, 'password')
      }
      addonBefore = { < Icon type = "lock" / >
      }
      type = "password"
      placeholder = "Password" / >
      <
      /Form.Item> <
      Form.Item >
      <
      Button type = "primary"
      htmlType = "submit" > 登录 < /Button> <
      /Form.Item> <
      /Form> <
      /div>
    )
  }
}
