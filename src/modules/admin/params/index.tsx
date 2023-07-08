import { BaseList } from '@/shared/base/base-list';

export default class extends BaseList {
  resources = 'params';
  action = 'index';

  get fields() {
    return [nx.antColumn('ID', 'id'), nx.antColumn('属性', 'code'), nx.antColumn('值', 'value')];
  }
}
