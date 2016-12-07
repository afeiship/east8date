import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,InputNumber } from 'antd';


export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    wiki_id:'',
    wiki_name:'',
    wiki_img:'',
    wiki_content:''
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

  initCKEditor(inData){
    this._ckeditor=CKEDITOR.replace('ck-content');
    this._ckeditor.setData(inData);
  }


  fetchData(){
    var self=this;
    return http.GET('/wiki/',{
      data:{
        id:this.props.params['wiki_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.initCKEditor(self.state.wiki_content);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/wiki',{
      data:this.toModel(this.state),
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/wiki',{
      data:nx.mix(this.toModel(this.state),{
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

  toModel(inData){
    return {
      wiki_id:inData.wiki_id,
      wiki_name:inData.wiki_name,
      wiki_img:inData.wiki_img,
      wiki_content:this._ckeditor.getData()
    }
  }


  render() {
    return (
      <Form className="bd" mode="inline" onSubmit={this.handleSubmit.bind(this)}>
        <header className="hd">
          <span>Edit</span>
        </header>
        <Form.Item>
          <Input size="large" value={this.state.wiki_name} onChange={this.handleChange.bind(this,'wiki_name')} addonBefore={<Icon type="info-circle-o" />} placeholder="显示名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.wiki_img} onChange={this.handleChange.bind(this,'wiki_img')} addonBefore={<Icon type="info-circle-o" />} placeholder="图片路径" />
        </Form.Item>
        <Form.Item>
          <Input size="large" type="textarea"
            id='ck-content'
            autosize={{ minRows: 16, maxRows: 40 }}
            addonBefore={<Icon type="info-circle-o" />} placeholder="主体内容" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
