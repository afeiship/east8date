import { BaseList } from '@/shared/base/base-list';
import { toImg } from '@/shared/constants';
import { Avatar } from 'antd';

export default class extends BaseList {
  resources = 'users';
  action = 'index';
  searchable = true;

  get fields() {
    return nx.antColumn([
      { title: 'ID', key: 'id' },
      { title: '昵称', key: 'nickname' },
      { title: '头像', key: 'avatar', callback: this.renderAvatar },
      { title: '可用', key: 'enabled', callback: String }
    ]);
  }

  renderAvatar(_, record) {
    const url = toImg(record.avatar, 'small');
    return <Avatar src={url} size="large" />;
  }
}
