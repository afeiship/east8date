import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import ProductList from '@/shared/components/product-list';
import { FORM_LAYOUT, GLOBAL_FORM_PRESETS } from '@/shared/constants';
import ProductData from '@/shared/services/product-data';

// https://rekit.github.io/antd-form-builder/examples-v4/#multiple-form-builders

class Form extends BaseForm {
  resources = 'products';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {},
      fields: [
        { key: 'backendCateId', label: '分类于', widget: 'ac:tree-select', disabled: this.isEdit },
        { key: 'name', label: '名称', required: true },
        { key: 'desc', label: '描述', widget: 'textarea' },
        { key: 'imageArray' }
      ]
    }
  };

  getFormProps() {
    return {
      onFieldsChange: this.handleFieldsChange,
      presets: GLOBAL_FORM_PRESETS
    };
  }

  handleFieldsChange = async (e) => {
    const field = nx.get(e, '[0].name[0]');
    if (field === 'backendCateId') {
      const id = this.formRef.getFieldValue(field);
      const { meta } = this.state;
      const res = await nx.$api.prop_names_bs_list({ id });
      const spuPropList = res.filter((item) => item.propType === 'SPU');
      const skuPropList = res.filter((item) => item.propType === 'SKU');
      const generalPropList = res.filter((item) => item.propType === 'GENERAL');
      const processed = ProductData.from({ spuPropList, skuPropList, generalPropList });
      this.initTypesList(processed);
      this.setState({ meta });
    }
  };

  loader = () => {
    const apis = [
      nx.$api.backend_cates_tree(),
      this.isEdit ? nx.$api.products_show(this.params) : Promise.resolve({})
    ];
    const { meta } = this.state;
    return new Promise((resolve) => {
      Promise.all(apis).then(([res1, res2]) => {
        const { backendCateId, name, desc, tags, skuPropList, spuPropList, generalPropList } = res2;
        nx.set(meta, 'fields[0].widgetProps.items', res1);
        if (!this.isEdit) return resolve(null);

        nx.$api.prop_names_bs_list({ id: backendCateId }).then((res3) => {
          [skuPropList, spuPropList, generalPropList].forEach((list) => {
            list.forEach((item) => {
              const newItem = res3.find((item2) => item2.__prop__.id === item.propId);
              nx.mix(item, newItem);
            });
          });

          const processed = ProductData.from(res2);
          this.initTypesList(processed);
          this.setState({ meta });
          resolve({ ...res2, ...processed });
        });
      });
    });
  };

  initTypesList = (inProcessed) => {
    const { meta } = this.state;
    const count = meta.fields.length - 4;
    meta.fields.splice(
      1,
      count,
      ...([
        {
          key: 'spuPropList',
          label: 'SPU',
          widget: ProductList,
          widgetProps: { items: inProcessed.spuPropList }
        },
        {
          key: 'skuPropList',
          label: 'SKU',
          widget: ProductList,
          widgetProps: { items: inProcessed.skuPropList }
        },
        {
          key: 'generalPropList',
          label: 'General',
          widget: ProductList,
          widgetProps: { items: inProcessed.generalPropList }
        }
      ] as any)
    );
  };

  dataWillSave(inValue: any): any {
    return ProductData.to(nx.deepClone(inValue));
  }
}

export default withRouter(Form as any);
