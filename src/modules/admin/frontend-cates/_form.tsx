import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT, ID_NAME_PAIRS } from '@/shared/constants';

class Form extends BaseForm {
  resources = 'frontend_cates';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {},
      fields: [
        { key: 'parentId', label: '父类', widget: 'ac:tree-select', placeholder: '请选择分类' },
        {
          key: 'bsCateIdList',
          label: '后台分类',
          widget: 'ac:tree-select',
          widgetProps: { multiple: true, treeDefaultExpandAll: true },
          placeholder: '请选择分类'
        },
        { key: 'name', label: '名称' },
        { key: 'isolated', label: '子节点', widget: 'ac:switch' },
        { key: 'sequence', label: '排序', widget: 'ac:input-number' }
      ]
    }
  };

  loader = () => {
    const apis = [
      nx.$api.frontend_cates_show(this.params),
      nx.$api.frontend_cates_tree(),
      nx.$api.backend_cates_tree()
    ];

    return Promise.all(apis).then(([res1, res2, res3]) => {
      const { meta } = this.state;
      nx.set(meta, 'fields[0].widgetProps.items', nx.keyMap(res2, ID_NAME_PAIRS));
      nx.set(meta, 'fields[1].widgetProps.items', nx.keyMap(res3, ID_NAME_PAIRS));
      this.setState({ meta });
      return nx.compactObject({
        ...res1
      });
    });
  };
}

export default withRouter(Form as any);
