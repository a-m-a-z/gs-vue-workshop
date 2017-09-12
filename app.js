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
    },
    toggleTodo: function(todoToUpdate) {
      this.todos = this.todos.map(todo => {
        if(todo.text !== todoToUpdate.text) {
          return todo;
        }
        const update = {
          text: todo.text,
          completed: !todo.completed
        }
        return update;
      })
    }
  }
})