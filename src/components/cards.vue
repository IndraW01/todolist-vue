<script setup>
import { todolists } from "@/stores/todolists";
import Card from "./card.vue";

const stateTodolists = todolists();
</script>

<template>
  <div class="mt-5 flex flex-col gap-y-5">
    <div v-for="(todo, index) in stateTodolists.todolists" :key="todo.name">
      <Card :todo="todo" :index="index" />
    </div>
  </div>
</template>
