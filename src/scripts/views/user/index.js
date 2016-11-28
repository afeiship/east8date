import { Link } from 'react-router';
import { Table, Icon } from 'antd';
import http from 'services/http';
import { hashHistory } from 'react-router';
const columns = [{
  title: 'ID',
  dataIndex: 'user_id',
  key: 'user_id'
}, {
  title: '用户名',
  dataIndex: 'user_name',
  key: 'user_name',
}, {
  title: '显示名',
  dataIndex: 'user_nicename',
  key: 'user_nicename',
},{
  title: '创建时间',
  dataIndex: 'created_at',
  key: 'created_at',
},{
  title:'操作',
  dataIndex:'action',
  key:'action',
  render: ()=><a href="#">编辑</a> | <a href="#">删除</a>
}];


export default class extends React.Component {
  render() {
    return (<div className="user-view">{this.props.children}</div>)
  }
}
