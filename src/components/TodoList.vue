<template>
  <!-- todo 列表 -->
  <div class="todo-list">
    <todo-list-item v-for="n in 1" :key="n"></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: { TodoListItem },
}
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>