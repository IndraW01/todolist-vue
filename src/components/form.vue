<script setup>
import { todolists } from "@/stores/todolists";

const stateTodolist = todolists();

const addOrUpdateTodo = () => {
  const todoObject = {
    name: stateTodolist.todo,
    isComplete: false,
  };

  if (!stateTodolist.isEditing) {
    stateTodolist.storeTodo(todoObject);
  } else {
    stateTodolist.updateTodo(todoObject);
  }
};
</script>

<template>
  <div class="mt-5">
    <form>
      <div class="flex gap-x-3">
        <input
          class="p-3 outline-none rounded-md w-full"
          type="text"
          placeholder="Masukkan todo"
          v-model="stateTodolist.todo"
        />
        <button
          type="button"
          class="px-4 py-2 text-white rounded-md"
          :class="{
            'bg-blue-600': stateTodolist.isEditing == false,
            'bg-yellow-600': stateTodolist.isEditing == true,
          }"
          @click="addOrUpdateTodo"
        >
          {{ stateTodolist.isEditing ? "Ubah" : "Tambah" }}
        </button>
      </div>
    </form>
  </div>
</template>
