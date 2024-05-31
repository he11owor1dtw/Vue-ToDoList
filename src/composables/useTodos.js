import { onMounted, ref } from "vue";

export default function useTodos() {
  const todos = ref([]);
  // 增加 todo
  const addTodo = (todo) => todos.value.push(todo);

  // fetch 自製 json 檔當作既有列表
  const fetchTodos = async () => {
    const response = await fetch("./todos.json");
    const rawTodos = await response.json();

    // 使用了 JavaScript 的 map 方法，將 rawTodos 數組中的每個元素映射為新的數組
    // 對於每個 todo 對象，我們都要執行一段箭頭函數來轉換它的格式，它定義了如何轉換每個 todo 對象的格式
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed,
    }));
  };

  // 在組件掛載後調用 fetchTodos 函數以加載數據
  onMounted(() => {
    fetchTodos();
  });

  return {
    todos,
    addTodo,
  };

}