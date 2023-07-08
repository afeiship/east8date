const IGNORE_AUTH = ['/api/ads/adminUser/login'];

export default (options) => {
  const { url } = options;
  const { pathname } = new URL(url);
  if (IGNORE_AUTH.includes(pathname)) return options;

  const token = nx.$local.get('token');
  token && nx.set(options, 'headers.Authorization', `Bearer ${token}`);
  nx.set(options, 'headers.Accept-Language', `zh-CN`);

  return options;
};
