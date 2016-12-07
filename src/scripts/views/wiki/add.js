import { hashHistory } from 'react-router';
import OptionForm from './_form';


export default class extends OptionForm {
  constructor(props){
    super(props);
    this._formType='add';
  }
  componentDidMount(){
    this.initCKEditor('');
  }
  handleSubmit(){
    this.create(function(){
        hashHistory.goBack();
    });
  }
}
