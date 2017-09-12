const ALL = 'ALL';
const COMPLETED = 'COMPLETED';
const PENDING = 'PENDING';
new Vue({
  el: '.container',
  data: function() {
    return {
      text: '',
      state: ALL,
      todos: [{
        text: 'Update todo',
        completed: true
      }]
    }
  },
  computed: {
    filteredTodos: function() {
      switch(this.state) {
        case ALL:
          return this.todos;
        case COMPLETED:
          return this.todos.filter(todo => todo.completed === true);
        case PENDING:
          return this.todos.filter(todo => todo.completed === false);
      }
    }
  },
  methods: {
    addTask: function() {
      this.todos.push({text: this.text, completed: false});
      this.text = '';
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
    },
    filterTodos(term) {
      switch(term) {
        case ALL:
          this.state = ALL
          break;
        case COMPLETED:
          this.state = COMPLETED
          break;
        case PENDING:
          this.state = PENDING
          break;
      }
    }
  }
})