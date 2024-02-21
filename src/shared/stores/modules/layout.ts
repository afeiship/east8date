export default nx.$defineStore({
  name: 'layout',
  state: {
    collapsed: nx.$local.get('collapsed')
  },
  watch: {
    collapsed(newValue) {
      nx.$local.set('collapsed', newValue);
    }
  }
});
