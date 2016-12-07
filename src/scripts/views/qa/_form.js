import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button,Select,Row,Col } from 'antd';
const Option = Select.Option;

export default class extends React.Component {

  constructor(props){
    super(props);
    this._formType='';
    this.fetchAllCates();
    this.fetchAllWikis();
  }

  state={
    qa_rand_user:{},
    qa_question:'',
    qa_description:'',
    qa_answer:'',
    qa_cate_id:[],
    qa_tags:[],
    qa_wikis:[],
    all_cates:[],
    all_wikis:[],
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
        self.state.qa_cate_id=[inResp.data.qa_cate_id];
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

  fetchAllWikis(){
    var self=this;
    return http.GET('/wiki/',{
      data:{
        all:2000
      },
      success:function(inResp) {
        self.state.all_wikis= inResp.data.items;
        self.setState(self.state);
      }
    })
  }

  fetchAllCates(){
    var self=this;
    return http.GET('/cate/',{
      data:{
        all:2000
      },
      success:function(inResp) {
        self.state.all_cates= inResp.data.items;
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
      qa_cate_id:inData.qa_cate_id[0],
      qa_tags:inData.qa_tags.toString(),
      qa_wikis:inData.qa_wikis.toString()
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
            <Row>
              <Col span={12}>
                <Select size="large"
                  placeholder="请选择一个分类"
                   value={this.state.qa_cate_id} style={{ width: 200 }} onChange={this.handleChange.bind(this,'qa_cate_id')}>
                  {this.state.all_cates.map(function(item){
                    return <Option key={item.cate_id} value={item.cate_id}>{item.cate_name}</Option>;
                  })}
                  </Select>
              </Col>
              <Col span={12}>
                {this.state.qa_rand_user.user_nicename}
              </Col>
            </Row>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={12}>
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
            </Col>

            <Col span={12}>
              <Select
                multiple
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={this.handleChange.bind(this,'qa_wikis')}
                value={this.state.qa_wikis}
              >
              {this.state.all_wikis.map(function(item){
                return <Option key={item.wiki_id} value={item.wiki_id}>{item.wiki_name}</Option>;
              })}
              </Select>
            </Col>
          </Row>
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
          <Button type="primary" htmlType="submit">确认</Button>
          <Button onClick={this.back}>返回</Button>
        </Form.Item>
      </Form>
    )
  }
}
