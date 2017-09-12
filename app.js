new Vue({
  el: '.container',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function() {
      this.counter = this.counter + 1;
    },
    decrement: function() {
      this.counter = this.counter - 1;
    }
  },
})