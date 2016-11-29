import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,Select } from 'antd';


export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    qa_question:'',
    qa_description:'',
    qa_answer:''
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
    return http.GET('/qa/',{
      data:{
        id:this.props.params['qa_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/qa',{
      data:this.state,
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/qa',{
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
          <Input size="large" value={this.state.qa_question}
            onChange={this.handleChange.bind(this,'qa_question')}
            addonBefore={<Icon type="info-circle-o" />}
            placeholder="请输入您的问题？" />
        </Form.Item>
        <Form.Item>
          <Input size="large" type="textarea"
            autosize={{ minRows: 3, maxRows: 20 }}
            value={this.state.qa_description}
            onChange={this.handleChange.bind(this,'qa_description')}
            addonBefore={<Icon type="info-circle-o" />} placeholder="关于问题的简短的描述..." />
        </Form.Item>
        <Form.Item>
          <Input size="large" type="textarea"
            autosize={{ minRows: 8, maxRows: 20 }}
            value={this.state.qa_answer}
            onChange={this.handleChange.bind(this,'qa_answer')}
            addonBefore={<Icon type="info-circle-o" />} placeholder="问题的回答" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
