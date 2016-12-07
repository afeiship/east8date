import { Link } from 'react-router';
import { Table, Icon,Modal,Tag } from 'antd';
import http from 'services/http';
import { hashHistory } from 'react-router';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.fetchData(
      +this.props.params['page']
    );
  }

  state = {
    modalVisible: false,
    currentRecord: null,
    currentIndex: null,
    total: 0,
    items: [],
    defaultPageSize: 10,
    defaultCurrent: +this.props.params['page'],
    onChange: (current) => {
      this.fetchData(current);
      hashHistory.push(`/wiki/page/${current}`);
    }
  }

  columns = [{
    title: '词条名',
    width:'20%',
    dataIndex: 'wiki_name',
    key: 'wiki_name',
  }, {
    title: '词条内容',
    width:'40%',
    dataIndex: 'wiki_content',
    key: 'wiki_content',
  },{
    title:'操作',
    key:'action',
    width:'15%',
    render: (text, record,index) => (
      <span onClick={this.setCurrent({currentRecord:record,currentIndex:index})}>
        <Link to={`/wiki/edit/${record.wiki_id}`}>编辑</Link>
        <span className="ant-divider" />
        <a href="javascript:;" onClick={this.showModal.bind(this)}>删除</a>
      </span>
    )
  }]

  fetchData(inIndex) {
    return http.GET('/wiki',{
      data:{
        page:inIndex || 1,
        rows:this.state.pageSize || 10,
        ts:Date.now()
      },
      success:function(inResp) {
        nx.mix(this.state,inResp.data);
        this.setState(this.state);
      }.bind(this)
    })
  }

  setCurrent = (inData) => {
    return () => {
      this.setState(inData);
    };
  }

  showModal(){
    this.setState({
      modalVisible:true
    })
  }

  hideModal(){
    this.setState({
      modalVisible:false
    })
  }

  modalOk(){
    this.deleteItem();
    this.hideModal();
  }

  deleteItem(){
    this.state.items.splice(this.state.currentIndex,1);
    this.setState(this.state);
    return http.DELETE('/wiki',{
      data:{
        id:this.state.currentRecord.user_id
      }
    });
  }

  modalCancel(){
    this.hideModal();
  }

  render() {
    return (
      <div className="wiki-view-list">
        <Link className="hd" to="wiki/add">
          <Tag color="#108ee9">添加新词条</Tag>
        </Link>
        <Table className="bd" columns={this.columns} dataSource={this.state.items} pagination={this.state} />
          <Modal title="删除此词条？" visible={this.state.modalVisible}
            onOk={this.modalOk.bind(this)} onCancel={this.modalCancel.bind(this)}
          >
            <p>确定删除？</p>
          </Modal>
      </div>
    )
  }

}
