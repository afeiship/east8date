import { hashHistory } from 'react-router';
import http from 'services/http';
import moment from 'moment';
import { Form, Icon, Input, Button,Select,DatePicker } from 'antd';
const Option = Select.Option;
const dateFomrat='YYYY-MM-DD HH:mm:ss';

export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
  }

  state={
    article_rand_user:{},
    article_title:'',
    article_description:'',
    article_content:'',
    publish_at:moment(),
    article_tags:[],
    all_tags:[]
  }

  handleSubmit(){
    console.log('Should be implement!');
  }

  initCKEditor(inData){
    this._ckeditor=CKEDITOR.replace('ck-content');
    this._ckeditor.setData(inData);
  }

  handleChange(field,ev){
    if(typeof(ev)=='string' || Array.isArray(ev)){
      this.state[field]=ev;
    }else{
      this.state[field]=ev.target.value;
    }
    this.setState(this.state);
  }

  handlePickerChange(value){
    this.state.publish_at=value;
    this.setState(this.state);
  }

  fetchData(){
    var self=this;
    return http.GET('/article/',{
      data:{
        id:this.props.params['article_id']
      },
      success:function(inResp) {
        nx.mix(self.state,inResp.data);
        self.state.publish_at=moment(inResp.data.publish_at,dateFomrat);
        self.initCKEditor(self.state.article_content);
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
        self.state.article_rand_user=inResp.data;
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
    return http.PUT('/article',{
      data:this.toModel(this.state),
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    })
  }

  create(inCallback){
    var self=this;
    return http.POST('/article',{
      data:nx.mix(this.toModel(this.state),{
        action:'create'
      }),
      success:function(inResp) {
        inCallback.call(self.inResp);
      }
    });
  }

  toModel(inData){
    console.log(inData);
    return {
      article_id:inData.article_id,
      article_user_id:inData.article_rand_user.user_id,
      article_title:inData.article_title,
      article_description:inData.article_description,
      article_content:this._ckeditor.getData(),
      article_tags:inData.article_tags.toString(),
      publish_at:inData.publish_at.format(dateFomrat)
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
          <Input size="large" disabled value={this.state.article_rand_user.user_nicename}
            addonBefore={<Icon type="info-circle-o" />}
            placeholder="随机一位用户" />
        </Form.Item>
        <Form.Item>
          <Input size="large" value={this.state.article_title}
            onChange={this.handleChange.bind(this,'article_title')}
            addonBefore={<Icon type="info-circle-o" />}
            placeholder="文章标题" />
        </Form.Item>
        <Form.Item>
          <Input size="large" type="textarea"
            autosize={{ minRows: 3, maxRows: 20 }}
            value={this.state.article_description}
            onChange={this.handleChange.bind(this,'article_description')}
            addonBefore={<Icon type="info-circle-o" />} placeholder="文章描述..." />
        </Form.Item>
        <Form.Item>
          <Input size="large" type="textarea"
            id='ck-content'
            autosize={{ minRows: 8, maxRows: 40 }}
            value={this.state.article_content}
            addonBefore={<Icon type="info-circle-o" />} placeholder="文章主体内容" />
        </Form.Item>
        <Form.Item>
          <Select
            multiple
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={this.handleChange.bind(this,'article_tags')}
            value={this.state.article_tags}
          >
          {this.state.all_tags.map(function(item){
            return <Option key={item.tag_id} value={item.tag_id}>{item.tag_name}</Option>;
          })}
          </Select>
        </Form.Item>
        <Form.Item>
          <DatePicker
            showTime
            format={dateFomrat}
            placeholder="发布时间"
            value={this.state.publish_at}
            onChange={this.handlePickerChange.bind(this)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
