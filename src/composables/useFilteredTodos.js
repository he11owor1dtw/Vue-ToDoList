import { ref, computed } from "vue";

export default function useFilteredTodos(todos) {
  const filter = ref("all");
  // filter 和 todos 都是響應式的數據
  // 當其中的任意一個發生變化時，下方計算屬性 filteredTodos 會自動重新計算

  const filteredTodos = computed(() => {
    // 根據 filter.value 的值選擇不同的情況
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });
  return {
    filter,
    filteredTodos,
  }
}