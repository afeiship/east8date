export default (options) => {
  const { data, status } = options;
  // todo: redirect_uri feature
  if (status === 401) {
    nx.$local.del('token');
    nx.navigate('/');
  }
  return options;
};