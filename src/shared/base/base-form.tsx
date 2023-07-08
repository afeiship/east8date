import ReactAntAbstractForm from '@jswork/react-ant-abstract-form';
import { CardSize } from 'antd/es/card/Card';
import { GLOBAL_FORM_PRESETS } from '@/shared/constants';

export class BaseForm extends ReactAntAbstractForm {
  apiService = nx.$api;
  size: CardSize = 'default';

  initialState() {
    return {
      meta: {}
    };
  }

  getFormProps() {
    return {
      presets: GLOBAL_FORM_PRESETS
    };
  }

  render() {
    return this.view();
  }
}
