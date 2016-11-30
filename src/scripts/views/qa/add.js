import { hashHistory } from 'react-router';
import QaForm from './_form';


export default class extends QaForm {
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
