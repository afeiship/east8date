import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,InputNumber } from 'antd';


export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    cate_slug:'',
    cate_name:'',
    cate_title:'',
    cate_keywords:'',
    cate_description:'',
  }

  handleSubmit(){
    console.log('Should be implement!');
  }

  handleChange(field,ev){
    console.log(field,ev);
    if(typeof(ev)!='object'){
      this.state[field]=ev;
    }else{
      this.state[field]=ev.target.value;
    }
    this.setState(this.state);
  }

  fetchData(){
    var self=this;
    return http.GET('/cate/',{
      data:{
        id:this.props.params['cate_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/cate',{
      data:this.state,
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/cate',{
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
          <Input size="large" value={this.state.cate_slug} onChange={this.handleChange.bind(this,'cate_slug')} addonBefore={<Icon type="info-circle-o" />} placeholder="短名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.cate_name} onChange={this.handleChange.bind(this,'cate_name')} addonBefore={<Icon type="info-circle-o" />} placeholder="显示名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.cate_title} onChange={this.handleChange.bind(this,'cate_title')} addonBefore={<Icon type="info-circle-o" />} placeholder="SEO标题" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.cate_keywords} onChange={this.handleChange.bind(this,'cate_keywords')} addonBefore={<Icon type="info-circle-o" />} placeholder="SEO关键字" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.cate_description} onChange={this.handleChange.bind(this,'cate_description')} addonBefore={<Icon type="info-circle-o" />} placeholder="SEO描述信息" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
