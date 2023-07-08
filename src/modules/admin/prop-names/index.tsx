import { BaseList } from '@/shared/base/base-list';

export default class extends BaseList {
  resources = 'prop_names';
  action = 'index';

  get fields() {
    return nx.antColumn([
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'valueType', title: 'ValueType' },
      { key: 'multiple', title: 'Multiple', callback: String }
    ]);
  }
}
