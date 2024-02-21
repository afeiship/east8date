export default nx.$defineStore({
  name: 'auth',
  state: {
    session: nx.$local.get('session')
  },
  watch: {
    session: (newValue) => {
      nx.$local.set('session', newValue);
    }
  }
});
