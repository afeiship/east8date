import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT } from '@/shared/constants';

class Form extends BaseForm {
  resources = 'prop_names';
  rawJSON = true;
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {
        avatar: []
      },
      fields: [{ key: 'rawJSON' }]
    }
  };
}

export default withRouter(Form as any);
