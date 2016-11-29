import { hashHistory } from 'react-router';
import OptionForm from './_form';


export default class extends OptionForm {
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
