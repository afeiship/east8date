import { BaseList } from '@/shared/base/base-list';

export default class extends BaseList {
  resources = 'posts';
  action = 'index';
  searchable = true;

  get fields() {
    return nx.antColumn([
      { title: 'ID', key: 'id' },
      { title: '标题', key: 'title' },
      { title: '发布状态', key: 'status' },
      { title: '发布时间', key: 'publishTime' }
    ]);
  }
}
