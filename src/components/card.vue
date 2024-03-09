<script setup>
import { todolists } from "@/stores/todolists";

const stateTodolist = todolists();

const props = defineProps({
  todo: Object,
  index: Number,
});

const editTodo = (id) => {
  stateTodolist.todo = stateTodolist.todolists[id].name;
  stateTodolist.isEditing = true;
  stateTodolist.indexUpdate = id;
};

const deleteTodo = (id) => {
  stateTodolist.destroyTodo(id);
};
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-xl">{{ todo.name }}</h2>
    <div class="flex gap-x-2">
      <button
        class="px-4 py-2 bg-yellow-600 text-white rounded-md"
        @click="editTodo(index)"
      >
        Edit
      </button>
      <button
        class="px-4 py-2 bg-red-600 text-white rounded-md"
        @click="deleteTodo(index)"
      >
        Hapus
      </button>
    </div>
  </div>
</template>
