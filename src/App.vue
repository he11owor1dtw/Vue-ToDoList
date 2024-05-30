<script setup>

</script>

<template>
  <main>
    <div class="container">
      <!-- 標題 title -->
      <h1>歡迎使用 Feng 待辦事項！</h1>
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
            Todo 1
            <!-- 自定義的複選按鈕 -->
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 2
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 3
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
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整個頁面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 標題 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
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
  background: linear-gradient(#c0a5f3, #7f95f7);
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
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
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
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked+span.check-button::after {
  opacity: 1;
}
</style>
