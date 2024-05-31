<template>
  <!-- todo 列表 -->
  <div class="todo-list">
    <todo-list-item v-for="todo in todos" :key="todo.id" :todo-item="todo"
      @change-state="todo.completed = $event.target.checked">
      <!-- 
      :todo-item="todo"
      每個從父組件 App.vue 傳遞過來的 todo 對象通過 todo-item 屬性再傳遞給 TodoListItem 子組件 
      -->
      <!-- 
      當渲染 todo-list-item 組件時，我们監聽它的 change-state 事件，
      觸發的时候把 todo 的 completed 屬性改為複選框的選中狀態，( true / false )  
      -->
    </todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: { TodoListItem }, // 在組件內部註冊 TodoListItem 組件，使其可以在模板中使用
  props: ["todos"], // 定義props，從父組件接收 todos 陣列
}
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>