import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT } from '@/shared/constants';

class Form extends BaseForm {
  resources = 'users';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {
        avatar: []
      },
      fields: [
        { key: 'username', disabled: this.isEdit },
        { key: 'nickname', required: true },
        { key: 'password', required: !this.isEdit, widget: 'password' },
        { key: 'avatar' },
        { key: 'roleIdList' }
      ]
    }
  };

  loader = () => {
    const { meta } = this.state;
    return Promise.all([
      this.isEdit ? nx.$api.users_show(this.params) : null,
      nx.$api.roles_list()
    ]).then((res) => {
      const [data, roles] = res;
      nx.set(meta, 'fields[4].widgetProps.items', roles);
      return data;
    });
  };
}

export default withRouter(Form as any);
