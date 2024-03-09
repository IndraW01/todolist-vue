<script setup>
import Form from "./components/form.vue";
import Cards from "./components/cards.vue";
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-blue-200 w-[600px] h-[600px] rounded-lg p-5">
      <h1 class="text-3xl text-center">My Todolist</h1>
      <Form />
      <Cards />
    </div>
  </div>
</template>
