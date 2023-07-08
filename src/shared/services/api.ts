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
        }
      }
    ]
  },
  options
);
