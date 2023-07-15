export default nx.$defineStore('auth', {
  state: {
    collapsed: nx.$local.get('collapsed')
  },
  watch: {
    collapsed(newValue) {
      nx.$local.set('collapsed', newValue);
    }
  }
});
