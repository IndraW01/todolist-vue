import { defineStore } from 'pinia'

export const todolists = defineStore('todolists', {
  state: () => {
    return {
      todolists: [
        {
          name: 'Belajar PHP',
          isComplete: false
        },
        {
          name: 'Belajar Javascript',
          isComplete: false
        }
      ],
      todo: '',
      isEditing: false,
      indexUpdate: ''
    }
  },

  actions: {
    storeTodo(todo) {
      this.todolists.push(todo);

      this.todo = '';
    },
    updateTodo(todo) {
      this.todolists[this.indexUpdate] = todo;

      this.todo = '';
      this.isEditing = false;
    },
    destroyTodo(id) {
      this.todolists.splice(id, 1);
    },
  }
})