import { Link } from 'react-router';
import { Table, Icon } from 'antd';
import http from 'services/http';
const columns = [{
  title: 'ID',
  dataIndex: 'option_id',
  width:'1%',
  key: 'option_id'
}, {
  title: '类型',
  dataIndex: 'option_type',
  width:'2%',
  key: 'option_type',
}, {
  title: '短名',
  dataIndex: 'option_slug',
  width:'2%',
  key: 'option_slug',
},{
  title: '名称',
  dataIndex: 'option_name',
  width:'2%',
  key: 'option_name',
},{
  title:'值',
  dataIndex:'option_value',
  width:'3%',
  key:'option_value'
},{
  title: '创建时间',
  dataIndex: 'created_at',
  width:'2%',
  key: 'created_at',
},{
  title:'操作',
  dataIndex:'action',
  width:'2%',
  key:'action',
  render: ()=> <a href="#">编辑</a> | <a href="#">删除</a>
}];

export default class extends React.Component {
  constructor(props){
    super(props);
  }

  state={
    items:[]
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    var self=this;
    return http.GET('/option',{
      data:{
        page:1,
        rows:10
      },
      success:function(inResp) {
        self.setState({
          items:inResp.data
        });
      }
    })
  }

  render() {
    return (<Table columns={columns} dataSource={this.state.items} />)
  }
}
