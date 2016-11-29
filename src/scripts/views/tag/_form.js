import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,InputNumber } from 'antd';


export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    tag_slug:'',
    tag_name:'',
    tag_num:''
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
    return http.GET('/tag/',{
      data:{
        id:this.props.params['tag_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/tag',{
      data:this.state,
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/tag',{
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
          <Input size="large" value={this.state.tag_slug} onChange={this.handleChange.bind(this,'tag_slug')} addonBefore={<Icon type="info-circle-o" />} placeholder="短名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.tag_name} onChange={this.handleChange.bind(this,'tag_name')} addonBefore={<Icon type="info-circle-o" />} placeholder="显示名" />
        </Form.Item>
        <Form.Item>
          <InputNumber min={0} max={20000} step={1} value={this.state.tag_num} onChange={this.handleChange.bind(this,'tag_num')} addonBefore={<Icon type="info-circle-o" />} placeholder="引用次数" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
