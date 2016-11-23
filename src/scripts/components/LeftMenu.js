import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;

export default class extends React.Component {
  render() {
    return (
      <aside className="left-menu">
        <Link to='/user' activeClassName="active">
          <Icon type="user" />
          用户管理
        </Link>
        <Link to='/article' activeClassName="active">
          <Icon type="book" />
          文章管理
        </Link>
        <Link to='/system' activeClassName="active">
          <Icon type="setting" />
          系统设置
        </Link>
      </aside>
    )
  }
}
