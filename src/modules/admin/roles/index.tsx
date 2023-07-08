import { BaseList } from '@/shared/base/base-list';

export default class extends BaseList {
  resources = 'roles';
  action = 'list';
  rowKey = 'value';

  get fields() {
    return nx.antColumn([
      { key: 'value', title: 'ID' },
      { key: 'label', title: '名称' }
    ]);
  }

  dataDidLoad(inValue) {
    return {
      rows: inValue,
      total: inValue.length
    };
  }
}
