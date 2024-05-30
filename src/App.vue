<script setup>

</script>

<template>
  <main>
    <div class="container">
      <!-- 標題 title -->
      <h1>Vue To-Do List</h1>
      <!-- 輸入框和按鈕 -->
      <div class="input-add">
        <input type="text" name="todo" />
        <button>
          <!-- 按鈕圖標 -->
          <i class="plus"></i>
        </button>
      </div>
      <!-- 篩選列表 -->
      <div class="filters">
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <!-- todo 列表 -->
      <div class="todo-list">
        <!-- todo 項目，外層容器用於顯示背景、圓角邊框 -->
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
      </div>
    </div>
  </main>
</template>

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

/* 增加欄 */
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input {
  padding: 16px 52px 14px 30px;
  border-radius: 40px;
  border: none;
  /* outline: none; */
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 85%;
  font-size: 20px;
  color: #626262;
}

.input-add button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #c7564a);
  /* 漸變顏色 */
  border: none;
  /* outline:auto; */
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer;
}

.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 3px, 3px 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.filters {
  display: flex;
  margin: 24px 3px;
  color: #ecf0f1;
  font-size: 14px;
}

.filters .filter {
  margin-right: 24px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #32a8f6;
  transform: scale(1.2);
  font-weight: bolder;
}

.todo-list {
  display: grid;
  row-gap: 14px;
}

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
