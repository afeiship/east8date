import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,Upload,message } from 'antd';
import CONSTANT from 'services/constants';
const Dragger = Upload.Dragger;

export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }
  draggerOptions={
    name: 'imagefile',
    multiple: false,
    showUploadList: false,
    status:'done',
    action: `${CONSTANT.SERVER_API}/image`,
    data:{
      action:'upload'
    },
    onChange:function(info) {
      console.log(info);
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        this.updateUploadInfo(info);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }.bind(this)
  }

  state={
    image_title:'',
    image_path:''
  }

  updateUploadInfo(inResp){
    var response = inResp.file.response.data;
    this.state.image_path=`${response.relative_path}/${response.file_name}`;
    this.setState(this.state);
  }

  handleSubmit(){
    console.log('Should be implement!');
  }

  handleChange(field,ev){
    if(typeof(ev)!='object'){
      this.state[field]=ev;
    }else{
      this.state[field]=ev.target.value;
    }
    this.setState(this.state);
  }

  fetchData(){
    var self=this;
    return http.GET('/image/',{
      data:{
        id:this.props.params['image_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/image',{
      data:this.state,
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/image',{
      data:nx.mix(this.state,{
        action:'create'
      }),
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    });
  }

  back(){
    hashHistory.goBack();
  }

  render() {
    return (
      <Form className="bd" mode="inline" onSubmit={this.handleSubmit.bind(this)}>
        <header className="hd">
          <span>Edit</span>
        </header>

        <Form.Item>
          <Input size="large" value={this.state.image_title} onChange={this.handleChange.bind(this,'image_title')} addonBefore={<Icon type="info-circle-o" />} placeholder="图片名称" />
        </Form.Item>
        <Form.Item>
          <div style={{ marginTop: 10, height: 200 }}>
            <Dragger {...this.draggerOptions}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">拖入上传</p>
              <p className="ant-upload-hint">只支持单文件上传...</p>
            </Dragger>
          </div>
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.image_path} disabled addonBefore={<Icon type="info-circle-o" />} placeholder="图片路径" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
