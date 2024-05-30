<template>
  <div class="todo-item">
    <!-- 用 label 包裹，點擊任何一個元素都能觸發 checkbox，進而更改 css -->
    <label>
      <input type="checkbox" />
      Coding
      <!-- 自定義的複選按鈕 -->
      <span class="check-button"></span>
    </label>
  </div>
  <div class="todo-item">
    <label>
      <input type="checkbox" />
      Reading
      <span class="check-button"></span>
    </label>
  </div>
  <div class="todo-item">
    <label>
      <input type="checkbox" />
      吃飯
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
}
</script>

<style scoped>
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

.todo-item label span.check-button {
  position: absolute;
  top: 2.5px;
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
  transform: scale(0.7);
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