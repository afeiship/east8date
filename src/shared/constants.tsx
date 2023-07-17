import React from 'react';
import { SecurityScanOutlined, TeamOutlined, CalculatorOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const UPLOAD_ACTION = 'https://admin.moban.work/weibo_api/interface/pic_upload.php';
const IMG_BASE_URL = 'http://103.96.148.144:9081/api/static';
export const FORM_LAYOUT = [3, 21];
export const ID_NAME_PAIRS = { id: 'value', name: 'label' };
export const KV_NAME_PAIRS = { value: 'id', label: 'name' };

export const GLOBAL_MENUS: MenuItem[] = [
  { key: 'roles', label: 'Roles', icon: <SecurityScanOutlined /> },
  { key: 'users', label: 'Users', icon: <TeamOutlined /> },
  { key: 'params', label: 'Params', icon: <CalculatorOutlined /> }
];

export const GLOBAL_FORM_PRESETS = {
  fields: {
    rawJSON: {
      label: '结果',
      widget: 'ac:codeflask'
    },
    privilegeIdList: {
      label: '权限列表',
      widget: 'ac:transfer'
    },
    roleIdList: {
      label: '角色名',
      widget: 'ac:select',
      multiple: true,
      widgetProps: {
        multiple: true
      }
    },
    imageArray: {
      label: '图片列表',
      widget: 'ac:upload-picture-card',
      widgetProps: { action: UPLOAD_ACTION, multiple: true }
    },
    avatar: {
      label: '头像',
      widget: 'ac:upload-picture',
      widgetProps: {
        transformResponse: (v) => v[0],
        transformURL: (pid) => `http://103.96.148.144:9081/api/static/${pid}`,
        customRequest: async (option) => {
          const [err, res] = await nx.to(
            nx.$api.sys_upload({
              file: option.file,
              actionName: 'sys-admin-users-add'
            })
          );
          console.log('pid: ', res);
          option.onSuccess(res, option.file);
          option.onError(err, option.file);
        }
      }
    },
    username: {
      label: '用户名',
      required: true,
      tooltip: '确认后无法修改'
    },
    nickname: {
      label: '昵称'
    },
    password: {
      label: '密码'
    }
  },
  widgets: {
    'ac:tree-select': {
      widgetProps: {
        treeDefaultExpandAll: true
      }
    },
    'ac:upload-picture': {
      widgetProps: {
        action: UPLOAD_ACTION,
        transformResponse: (v) => {
          return v.map((item) => item.pid)[0];
        }
      }
    },
    'ac:upload-picture-card': {
      widgetProps: {
        multiple: false,
        maxCount: 1
      }
    }
  }
};

export const toImg = (inPid) => {
  return `${IMG_BASE_URL}/${inPid}`;
};

export const KB_ACTIONS = [
  {
    id: 'users',
    icon: '📕',
    section: '用户管理',
    name: '01/用户管理',
    subtitle: '关键词: users',
    shortcut: ['u'],
    keywords: 'users',
    perform: () => {
      nx.navigate('/admin/users');
    }
  },
  {
    id: 'params',
    icon: '🤖',
    section: '参数管理',
    name: '02/参数管理',
    subtitle: '关键词: params',
    shortcut: ['p'],
    keywords: 'params',
    perform: () => {
      nx.navigate('/admin/params');
    }
  }
];
