<template>
  <!-- 輸入框和按鈕 -->
  <div class="input-add">
    <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <i class="plus"></i> <!-- 按鈕圖標 -->
    </button>
  </div>
  <!-- v-model 綁定 todoContent 變量，使得輸入框中的值與變量保持同步 -->
  <!-- @keyup.enter 和 @click 分別綁定了 emitAddTodo 方法，使得在按下 Enter 鍵或點擊按鈕時會觸發該方法 -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoAdd",
  setup(props, context) {
    const todoContent = ref("");

    const emitAddTodo = () => {
      // 這行代碼定義了一個名為 emitAddTodo 的箭頭函數，這個函數將在用戶按下 Enter 鍵或點擊按鈕時被調用
      const todo = {
        id: props.tid,
        content: todoContent.value, // 需訪問 value 屬性才能訪問 ref 的值
        completed: false,
      };
      // 這段代碼創建了一個包含新待辦事項信息的對象todo。該對象有以下屬性：
      // id: 從父組件 (App.vue) 傳遞過來的 props.tid，每個待辦事項的唯一標識符
      // content: 輸入框的內容，即用戶輸入的文字，通過 todoContent.value 獲取
      // completed: 預設為 false，表示這個待辦事項還未完成。

      context.emit("add-todo", todo);
      // 這行代碼使用 context.emit 方法向父組件發出名為 add-todo 的事件，並將新創建的 todo 對象作為參數傳遞
      // 父組件需要監聽這個事件以接收新的待辦事項並將其添加到待辦事項列表中
      todoContent.value = "";
      // 在添加一個待辦事項後，輸入框會被清空，以便繼續輸入下一個待辦事項
    };

    return {
      todoContent,
      emitAddTodo,
    };
    // 將 todoContent 和 emitAddTodo 函數作為返回值從 setup 函數中返回，這樣它們就可以在模板中被使用
  },
};
</script>

<style>
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