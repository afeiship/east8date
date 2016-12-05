import { hashHistory } from 'react-router';
import CateForm from './_form';


export default class extends CateForm {
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
