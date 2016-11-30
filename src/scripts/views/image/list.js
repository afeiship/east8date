import { Link } from 'react-router';
import { Table, Icon,Modal,Tag,message } from 'antd';
import http from 'services/http';
import { hashHistory } from 'react-router';
import CONSTANT from 'services/constants';
import CopyToClipboard from 'react-copy-to-clipboard';

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
    defaultPageSize: 5,
    defaultCurrent: +this.props.params['page'],
    onChange: (current) => {
      this.fetchData(current);
      hashHistory.push(`/image/page/${current}`);
    }
  }

  columns = [{
    title: '标题',
    dataIndex: 'image_title',
    width:'20%',
    key: 'image_title',
  }, {
    title: '路径',
    width:'30%',
    dataIndex: 'image_path',
    key: 'image_path',
  }, {
    title: '缩略图',
    width:'30%',
    dataIndex: 'image_id',
    key: 'image_id',
    render: (text, record,index) => (
      <img width="100" height="75" src={`${CONSTANT.IMG_URL}/${record.image_path}`} />
    )
  },{
    title:'操作',
    key:'action',
    width:'20%',
    render: (text, record,index) => (
      <span onClick={this.setCurrent({currentRecord:record,currentIndex:index})}>
        <CopyToClipboard
          onCopy={this.onCopyImg.bind(this)}
          text={`<img src="${CONSTANT.IMG_URL}${record.image_path.slice(1)}" title="${record.image_title}" />`}>
          <a href="javascript:;">复制</a>
        </CopyToClipboard>
        <span className="ant-divider" />
        <a href="javascript:;" onClick={this.showModal.bind(this)}>删除</a>
      </span>
    )
  }]

  fetchData(inIndex) {
    return http.GET('/image',{
      data:{
        page:inIndex || 1,
        rows:this.state.pageSize || 5,
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

  onCopyImg(){
    message.success('图片路径复制好啦！');
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
    return http.DELETE('/image',{
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
      <div className="image-view-list">
        <Link className="hd" to="image/add">
          <Tag color="#108ee9">添加新图片</Tag>
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