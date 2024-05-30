<template>
  <!-- 輸入框和按鈕 -->
  <div class="input-add">
    <input type="text" name="todo" />
    <button>
      <!-- 按鈕圖標 -->
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
}
</script>

<style scoped>
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
</style>