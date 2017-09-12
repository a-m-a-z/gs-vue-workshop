new Vue({
  el: '.container',
  data: function() {
    return {
      text: '',
      todos: [{
        text: 'Update todo',
        completed: true
      }]
    }
  },
  methods: {
    addTask: function() {
      this.todos.push({text: this.text, completed: false});
    }
  }
})