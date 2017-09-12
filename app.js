new Vue({
  el: '.container',
  data: function() {
    return {
      text: '',
    }
  },
  methods: {
    addTask: function() {
      console.log(this.text);
      this.text = '';
    }
  }
})