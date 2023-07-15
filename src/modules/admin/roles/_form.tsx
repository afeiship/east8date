import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT } from '@/shared/constants';

class Form extends BaseForm {
  resources = 'roles';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {},
      fields: [
        { key: 'code', label: '代码', required: true },
        { key: 'name', label: '名称' },
        { key: 'privilegeIdList' }
      ]
    }
  };

  loader = () => {
    const { meta } = this.state;
    const apis = [nx.$api.roles_show(this.params), nx.$api.privileges_list()];
    return Promise.all(apis).then((res) => {
      const [data, privileges] = res;
      nx.set(meta, 'fields[2].widgetProps.items', privileges);
      this.setState({ meta });
      return data;
    });
  };
}

export default withRouter(Form as any);
