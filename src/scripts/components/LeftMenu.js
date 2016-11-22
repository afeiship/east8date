import React from 'react';
import ReactDom from 'react-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends React.Component {
  render() {
    return (
      <Menu
        className="left-menu"
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
          <Menu.Item key="1">列表</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>产品管理</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>文章管理</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
