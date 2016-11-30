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
      hashHistory.push(`/article/page/${current}`);
    }
  }

  columns = [{
    title: '文章标题',
    dataIndex: 'article_title',
    width:'10%',
    key: 'article_title',
  }, {
    title: '描述',
    width:'20%',
    dataIndex: 'article_description',
    key: 'article_description',
  },{
    title:'操作',
    key:'action',
    width:'15%',
    render: (text, record,index) => (
      <span onClick={this.setCurrent({currentRecord:record,currentIndex:index})}>
        <Link to={`/article/edit/${record.article_id}`}>编辑</Link>
        <span className="ant-divider" />
        <a href="javascript:;" onClick={this.showModal.bind(this)}>删除</a>
      </span>
    )
  }]

  fetchData(inIndex) {
    return http.GET('/article',{
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
    return http.DELETE('/article',{
      data:{
        id:this.state.currentRecord.article_id
      }
    });
  }

  modalCancel(){
    this.hideModal();
  }

  render() {
    return (
      <div className="article-view-list">
        <Link className="hd" to="article/add">
          <Tag color="#108ee9">添加新文章</Tag>
        </Link>
        <Table className="bd" columns={this.columns} dataSource={this.state.items} pagination={this.state} />
          <Modal title="删除此选项？" visible={this.state.modalVisible}
            onOk={this.modalOk.bind(this)} onCancel={this.modalCancel.bind(this)}
          >
            <p>确定删除？</p>
          </Modal>
      </div>
    )
  }

}
