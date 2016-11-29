import { hashHistory } from 'react-router';
import QaForm from './_form';


export default class extends QaForm {
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
