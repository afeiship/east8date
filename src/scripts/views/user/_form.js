import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button } from 'antd';


export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    user_name:'',
    user_nicename:'',
    user_password:''
  }

  handleSubmit(){
    console.log('Should be implement!');
  }

  handleChange(field,ev){
    this.state[field]=ev.target.value;
    this.setState(this.state);
  }

  fetchData(){
    var self=this;
    return http.GET('/user/',{
      data:{
        id:this.props.params['user_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/user',{
      data:this.state,
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/user',{
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
          <Input size="large" disabled={this._formType=='edit'} value={this.state.user_name} onChange={this.handleChange.bind(this,'user_name')} addonBefore={<Icon type="user" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.user_nicename} onChange={this.handleChange.bind(this,'user_nicename')} addonBefore={<Icon type="user" />} placeholder="显示名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.user_password} type="password" onChange={this.handleChange.bind(this,'user_password')} addonBefore={<Icon type="lock" />} placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
