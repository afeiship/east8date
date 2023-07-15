export default nx.$defineStore('auth', {
  state: {
    collapsed: null
  },
  watch: {
    collapsed(newValue) {
      console.log('newValue: ', newValue);
    }
  }
});
