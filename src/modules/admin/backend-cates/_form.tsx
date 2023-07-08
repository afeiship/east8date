import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT } from '@/shared/constants';
import BsCateList from '@/shared/components/bscate-list';

class Form extends BaseForm {
  resources = 'backend_cates';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {
        sequence: 1,
        isolated: false
      },
      fields: [
        { key: 'parentId', label: '父类', widget: 'ac:tree-select', placeholder: '请选择分类' },
        { key: 'name', label: '名称' },
        { key: 'isolated', label: '子节点', widget: 'ac:switch' },
        { key: 'sequence', label: '排序', widget: 'ac:input-number' },
        { key: 'spuPropList', label: 'SPU', disabled: true, placeholder: '产品编码' },
        { key: 'skuPropList', label: 'SKU', disabled: true, placeholder: '商品编码' },
        { key: 'generalPropList', label: 'General', widget: BsCateList }
      ]
    }
  };

  loader = () => {
    const apis = [
      nx.$api.backend_cates_tree(),
      nx.$api.prop_names_list(),
      this.isEdit ? nx.$api.backend_cates_show(this.params) : () => Promise.resolve({})
    ];

    return Promise.all(apis).then(([res1, res2, res3]) => {
      const { meta } = this.state;
      const { name, isolated, sequence, parentId } = res3;
      const selectedItems = res2.slice(2);
      const generalPropList = res3?.generalPropList || [];
      const generaItems = generalPropList?.map((item) => {
        return {
          value: item.propId,
          checked: item.required
        };
      });
      nx.set(meta, 'fields[0].widgetProps.items', res1);
      // General:
      nx.set(meta, 'fields[6].widgetProps.items', generaItems);
      nx.set(meta, 'fields[6].widgetProps.selectItems', selectedItems);
      this.setState({ meta });

      return nx.compactObject({
        parentId,
        name,
        isolated,
        sequence,
        generalPropList: generaItems
      });
    });
  };

  dataWillSave(inValue) {
    const generalPropList = inValue.generalPropList.map((item) => {
      return {
        propId: item.value,
        propType: 'GENERAL',
        required: item.checked
      };
    });
    nx.mix(inValue, {
      generalPropList,
      spuPropList: [{ propId: 1, propType: 'SPU', required: true }],
      skuPropList: [{ propId: 2, propType: 'SKU', required: true }]
    });
    return inValue;
  }
}

export default withRouter(Form as any);
