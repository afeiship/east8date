import { BaseList } from '@/shared/base/base-list';

export default class extends BaseList {
  resources = 'products';
  action = 'index';
  searchable = true;

  get fields() {
    return nx.antColumn([
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' }
    ]);
  }
}
