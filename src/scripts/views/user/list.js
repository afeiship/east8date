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
  key:'action',
  render: (text, record) => (
    <span>
      <Link to={`/user/edit/${record.user_id}`}>编辑</Link>
      <span className="ant-divider" />
      <Link to="#">删除</Link>
    </span>
  ),
  onCellClick:function(record,event){
    console.log(record,event);
  }
}];


export default class extends React.Component {
  constructor(props){
    super(props);
    this.fetchData(
      +this.props.params['page']
    );
  }

  state={
    total:0,
    items:[],
    defaultPageSize:10,
    defaultCurrent:+this.props.params['page'],
    onChange: (current) => {
      this.fetchData(current);
      hashHistory.push(`/user/page/${current}`);
    }
  }
  fetchData(inIndex) {
    var self=this;
    return http.GET('/user',{
      data:{
        page:inIndex || 1,
        rows:self.state.pageSize || 10,
        ts:Date.now()
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  render() {
    return (<Table columns={columns} dataSource={this.state.items} pagination={this.state} />)
  }
}
