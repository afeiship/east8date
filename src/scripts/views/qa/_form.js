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
    qa_rand_user:{},
    qa_question:'',
    qa_description:'',
    qa_answer:'',
    qa_tags:[],
    all_tags:[]
  }

  handleSubmit(){
    console.log('Should be implement!');
  }

  handleChange(field,ev){
    if(typeof(ev)=='string' || Array.isArray(ev)){
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

  fetchRandomUser(){
    var self=this;
    return http.GET('/user/',{
      data:{
        random:1
      },
      success:function(inResp) {
        self.state.qa_rand_user=inResp.data;
        console.log(self.state);
        self.setState(self.state);
      }
    })
  }

  fetchAllTags(){
    var self=this;
    return http.GET('/tag/',{
      data:{
        all:2000
      },
      success:function(inResp) {
        self.state.all_tags= inResp.data.items;
        self.setState(self.state);
      }
    })
  }

  update(inCallback) {
    var self=this;
    return http.PUT('/qa',{
      data:this.toModel(this.state),
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/qa',{
      data:nx.mix(this.toModel(this.state),{
        action:'create'
      }),
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    });
  }

  toModel(inData){
    return {
      qa_id:inData.qa_id,
      qa_user_id:inData.qa_rand_user.user_id,
      qa_question:inData.qa_question,
      qa_description:inData.qa_description,
      qa_answer:inData.qa_answer,
      qa_tags:inData.qa_tags.toString()
    }
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
          <Input size="large" disabled value={this.state.qa_rand_user.user_nicename}
            addonBefore={<Icon type="info-circle-o" />}
            placeholder="随机一位用户" />
        </Form.Item>
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
          <Select
            multiple
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={this.handleChange.bind(this,'qa_tags')}
            value={this.state.qa_tags}
          >
          {this.state.all_tags.map(function(item){
            return <Option key={item.tag_id} value={item.tag_id}>{item.tag_name}</Option>;
          })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}