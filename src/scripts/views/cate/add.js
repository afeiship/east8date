import { hashHistory } from 'react-router';
import CateForm from './_form';


export default class extends CateForm {
  constructor(props){
    super(props);
    this._formType='add';
  }
  handleSubmit(){
    this.create(function(){
        hashHistory.goBack();
    });
  }
}
