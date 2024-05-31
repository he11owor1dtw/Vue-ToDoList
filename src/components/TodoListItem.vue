<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <!-- 用 label 包裹整個元素，使得點擊文字或自定義按鈕時都能觸發複選框，進而更改 css -->
    <label>
      <input type="checkbox" :checked="todoItem.completed" @click="$emit('change-state', $event)" />
      <!-- 註冊點擊事件，點擊時觸發 change-state 事件，並把 $event 參數傳遞進去 -->
      {{ todoItem.content }}
      <span class="check-button"></span> <!-- 自定義的複選按鈕 -->
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todoItem"], // 接受從 TodoList.vue 傳遞過來的 todoItem 屬性
}
</script>

<style>
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}

/* 完成時增加斜體跟刪除線 */
.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1.5px solid #626262;
}

.todo-item label span.check-button::after {
  transition: 0.3s;
  background: #61b5ee;
  transform: translate(1.5px, 1.5px) scale(0.8);
  opacity: 0;
}

/* 原生 input 框隱藏，使用上面偽元素替代 */
.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked+span.check-button::after {
  opacity: 1;
}
</style>