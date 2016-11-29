import { hashHistory } from 'react-router';
import ImageForm from './_form';
import CONSTANT from 'services/constants';


export default class extends ImageForm {
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
