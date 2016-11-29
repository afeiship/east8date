import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,Select } from 'antd';
const Option = Select.Option;


export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    option_type:'html',
    option_name:'',
    option_value:''
  }

  handleSubmit(){
    console.log('Should be implement!');
  }

  handleChange(field,ev){
    if(typeof(ev)=='string'){
      this.state[field]=ev;
    }else{
      this.state[field]=ev.target.value;
    }
    this.setState(this.state);
  }

  fetchData(){
    var self=this;
    return http.GET('/option/',{
      data:{
        id:this.props.params['option_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/option',{
      data:this.state,
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/option',{
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
          <Select size="large" value={this.state.option_type} onChange={this.handleChange.bind(this,'option_type')}>
            <Option value="html">HTML</Option>
            <Option value="php">PHP</Option>
            <Option value="text">TEXT</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.option_name} onChange={this.handleChange.bind(this,'option_name')} addonBefore={<Icon type="info-circle-o" />} placeholder="显示名" />
        </Form.Item>
        <Form.Item>
          <Input size="large" type="textarea" autosize={{ minRows: 10, maxRows: 40 }} value={this.state.option_value} onChange={this.handleChange.bind(this,'option_value')} addonBefore={<Icon type="info-circle-o" />} placeholder="值" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
