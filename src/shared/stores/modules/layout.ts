export default nx.$defineStore('layout', {
  state: {
    collapsed: nx.$local.get('collapsed')
  },
  watch: {
    collapsed(newValue) {
      nx.$local.set('collapsed', newValue);
    }
  }
});
