import { BaseForm } from '@/shared/base/base-form';
import { withRouter } from '@/shared/base/with-router';
import { FORM_LAYOUT, ID_NAME_PAIRS } from '@/shared/constants';

/**
 * {
 *     "id": 1,
 *     "cateId": 1,
 *     "slug": "hello-halo",
 *     "title": "开始了",
 *     "summary": "Hello Halo如果你看到了这一篇文章，那么证明你已经",
 *     "wordCount": 231,
 *     "status": "PUBLISHED",
 *     "publishTime": "2023-04-25 20:47:06",
 *     "editTime": "2023-04-25 20:47:09"
 * }
 */
class Form extends BaseForm {
  resources = 'posts';
  state = {
    meta: {
      formItemLayout: FORM_LAYOUT,
      initialValues: {},
      fields: [
        { key: 'cateId', label: '分类', widget: 'ac:tree-select', placeholder: '请选择分类' },
        { key: 'title', label: '标题' },
        { key: 'slug', label: 'Slug' },
        { key: 'summary', label: '摘要', widget: 'textarea' },
        { key: 'originalContent', label: '内容', widget: 'textarea' }
      ]
    }
  };

  loader = () => {
    const apis = [nx.$api.posts_show(this.params), nx.$api.post_cates_tree()];

    return Promise.all(apis).then(([res1, res2]) => {
      const { meta } = this.state;
      nx.set(meta, 'fields[0].widgetProps.items', nx.keyMap(res2, ID_NAME_PAIRS));
      this.setState({ meta });
      return nx.compactObject({
        ...res1
      });
    });
  };
}

export default withRouter(Form as any);
