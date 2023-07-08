import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT } from '@/shared/constants';

class Form extends BaseForm {
  resources = 'params';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {},
      fields: [
        { key: 'code', label: '代码', required: true },
        { key: 'name', label: '名称', required: true },
        { key: 'value', label: '值', widget: 'textarea', required: true },
        { key: 'defaultItem', label: '默认值', widget: 'textarea', required: true },
        { key: 'remark', label: '备注' }
      ]
    }
  };
}

export default withRouter(Form as any);
