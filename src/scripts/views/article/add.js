import { hashHistory } from 'react-router';
import ArticleForm from './_form';


export default class extends ArticleForm {
  constructor(props){
    super(props);
    this._formType='add';
    this.fetchAllTags();
    this.fetchRandomUser();
  }
  handleSubmit(){
    this.create(function(){
        hashHistory.goBack();
    });
  }
}
