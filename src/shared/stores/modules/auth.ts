export default nx.$defineStore('auth', {
  state: {
    session: null
  },
  watch: {
    session: (newValue) => {
      nx.$local.set('session', newValue);
    }
  }
});
