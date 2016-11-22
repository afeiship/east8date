import React from 'react';
import ReactDom from 'react-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends React.Component {
  render() {
    return (
      <Menu className="left-menu" mode="inline">
        <Menu.Item key="1">用户管理</Menu.Item>
        <Menu.Item key="2">商品管理</Menu.Item>
        <Menu.Item key="3">系统设置</Menu.Item>
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
