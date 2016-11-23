import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends React.Component {
  render() {
    return (
      <Menu className="left-menu" mode="inline">
        <Menu.Item key="1">
          <Link to='/user' activeClassName="ant-menu-item-selected">用户管理</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/article' activeClassName="ant-menu-item-selected">文章管理</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/system' activeClassName="ant-menu-item-selected">系统设置</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
