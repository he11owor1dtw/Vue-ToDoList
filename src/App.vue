<template>
  <main>
    <div class="container">
      <!-- 標題 title -->
      <h1>Vue To-Do List</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo"></todo-add>
      <todo-filter :selected="filter" @change-filter="filter = $event"></todo-filter>
      <todo-list :todos="filteredTodos">
        <todo-list-item></todo-list-item>
      </todo-list>
    </div>
  </main>
  <!-- 
    傳遞 filter 作為 selected 屬性給 TodoFilter 子組件
    並監聽子組件觸發的 change-filter 事件，使用 $event 來更新父組件的 filter。
  -->
</template>

<script>

import TodoAdd from './components/TodoAdd.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import TodoListItem from './components/TodoListItem.vue';
import useTodos from './composables/useTodos';
import useFilteredTodos from './composables/useFilteredTodos';

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList, TodoListItem },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilteredTodos(todos);

    return {
      todos,
      filter,
      addTodo,
      filteredTodos,
    };
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", "SimSun", "STSong", "Helvetica", "Arial", sans-serif;
}

/* 整個頁面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: #2c3e50
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: #34495e
}

/* 標題 */
h1 {
  margin: 24px 0;
  margin-top: -10px;
  font-size: 28px;
  font-weight: bolder;
  color: #ecf0f1;
}
</style>
