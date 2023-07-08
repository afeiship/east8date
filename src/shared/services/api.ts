import httpSchema from '@jswork/http-schema';
import '@jswork/next-axios';
import { interceptors } from '@/shared/interceptors';

const options = {
  adapter: 'Axios',
  interceptors,
  transformResponse: (res) => nx.get(res, 'data.data')
};

export default httpSchema(
  {
    request: ['/api', 'urlencoded'],
    items: [
      {
        items: {
          // fulltext
          flush: ['post', '/pcb/pmall/initFullTextSearch'],

          // auth
          login: ['post', '/ads/adminUser/login'],
          logout: ['post', '/ads/adminUser/logout'],

          // users
          users_index: ['post', '/ads/adminUser/page'],
          users_show: ['post', '/ads/adminUser/editInit?id={id}'],
          users_destroy: ['post', '/ads/adminUser/delete?id={id}'],

          // roles
          roles_index: ['post', '/ads/role/page'],
          roles_show: ['post', '/ads/role/editInit?id={id}'],
          roles_list: ['post', '/ads/user/role/list'],

          // /ads/resource/privilege/list
          privileges_list: ['post', '/ads/resource/privilege/list'],

          // params
          params_index: ['post', '/ads/param/page'],
          params_show: ['post', '/ads/param/editInit?id={id}'],

          // posts
          posts_index: ['post', '/ads/post/page'],
          posts_show: ['post', '/ads/post/editInit?id={id}'],

          // tags
          tags_index: ['post', '/ads/tag/page'],
          tags_show: ['post', '/ads/tag/editInit?id={id}'],

          // products
          products_index: ['post', '/ads/product/page'],
          products_show: ['post', '/ads/product/editInit?id={id}&old=true'],

          // front_cates
          frontend_cates_index: ['post', '/ads/frontCate/page'],
          frontend_cates_show: ['post', '/ads/frontCate/editInit?id={id}'],

          // backend_cates
          backend_cates_index: ['post', '/ads/bsCate/page'],
          backend_cates_tree: ['post', '/ads/bsCate/tree'],
          backend_cates_show: ['post', '/ads/bsCate/editInit?id={id}'],

          // 文章的分类 post_cates
          post_cates_index: ['post', '/ads/postCate/page'],
          post_cates_tree: ['post', '/ads/postCate/tree'],
          post_cates_show: ['post', '/ads/postCate/editInit?id={id}'],

          prop_names_index: ['post', '/ads/propName/page'],
          prop_names_list: ['post', '/ads/propName/list'],
          prop_names_bs_list: ['post', '/ads/bsCate/propName/list?id={id}'],
          prop_names_show: ['post', '/ads/propName/editInit']
        }
      },
      {
        request: ['/api', 'json'],
        items: {
          // users
          users_create: ['post', '/ads/adminUser/add'],
          users_update: ['post', '/ads/adminUser/edit'],

          // roles
          roles_create: ['post', '/ads/role/add'],
          roles_update: ['post', '/ads/role/edit'],

          // /ads/resource/privilege/list
          privileges_create: ['post', '/ads/resource/privilege/add'],

          // params
          params_create: ['post', '/ads/param/add'],
          params_update: ['post', '/ads/param/edit'],

          // posts
          posts_create: ['post', '/ads/post/add'],
          posts_update: ['post', '/ads/post/edit'],

          // tags
          tags_create: ['post', '/ads/tag/add'],
          tags_update: ['post', '/ads/tag/edit'],

          // products
          products_create: ['post', '/ads/product/add'],
          products_update: ['post', '/ads/product/edit'],
          products_destroy: ['post', '/ads/product/delete?id={id}'],

          // front_cates
          frontend_cates_tree: ['post', '/ads/frontCate/tree'],
          frontend_cates_create: ['post', '/ads/frontCate/add'],
          frontend_cates_update: ['post', '/ads/frontCate/edit'],

          // backend_cates
          backend_cates_create: ['post', '/ads/bsCate/add'],
          backend_cates_update: ['post', '/ads/bsCate/edit'],

          // 文章的分类 post_cates
          post_cates_create: ['post', '/ads/postCate/add'],
          post_cates_update: ['post', '/ads/postCate/edit'],

          prop_names_create: ['post', '/ads/propName/add'],
          prop_names_update: ['post', '/ads/propName/edit'],
          prop_names_destroy: ['post', '/ads/propName/delete']
        }
      }
    ]
  },
  options
);
