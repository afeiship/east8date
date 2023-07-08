import { ID_NAME_PAIRS } from '@/shared/constants';

const KV_APIS = [
  '/ads/user/role/list',
  '/ads/resource/privilege/list',
  '/ads/bsCate/tree',
  '/ads/propName/list'
];

export default (options) => {
  const { config, data } = options;
  const { url } = config;
  const isKvApis = KV_APIS.some((item) => url.includes(item));

  if (isKvApis) {
    data.data = nx.keyMap(data.data, ID_NAME_PAIRS);
  }

  if (url.includes('/ads/bsCate/propName/list')) {
    data.data.forEach((item) => {
      // prop 是辅助数据，后面数据处理完，直接可以删除掉，不用提交到后台。
      const propValue = item.prop;
      delete item.prop;
      item.__prop__ = propValue;
    });
  }

  return options;
};
