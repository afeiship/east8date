import { hashHistory } from 'react-router';
import ArticleForm from './_form';


export default class extends ArticleForm {
  constructor(props){
    super(props);
    this._formType='edit';
    this.fetchData();
  }
  handleSubmit(){
    this.update(function(){
        hashHistory.goBack();
    });
  }
}
