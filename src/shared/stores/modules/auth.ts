export default nx.$defineStore('auth', {
  state: {
    session: nx.$local.get('session')
  },
  watch: {
    session: (newValue) => {
      nx.$local.set('session', newValue);
    }
  }
});
