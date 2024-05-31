<template>
  <!-- 篩選列表 -->
  <div class="filters">
    <span class="filter" 
    v-for="filter in filters" 
    :key="filter.value" 
    @click="$emit('change-filter', filter.value)"
    :class="{ active: selected === filter.value }">
        {{ filter.label }}
      
    </span>
  </div>
  <!--  
  $emit 是 Vue 的一個實例方法，用來在子組件中觸發父組件上綁定的事件
  這是一種父子組件之間溝通的方式，通常用於子組件向父組件傳遞數據或通知某個動作
  -->

  <!-- 
  $emit('change-filter', filter.value);
  'change-filter' 是事件名稱，並將 filter.value 作為參數傳遞給父組件，可以是任何類型
  -->

  <!-- 
  通過 props 和 $emit，父子組件之間能夠進行雙向通信：
  父組件向子組件傳遞當前狀態，子組件通過事件通知父組件狀態改變
  -->
</template>

<script>
export default {
  name: "TodoFilter",
  props: ["selected"],
  setup() {
    const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
    ];
    return { filters };
  },
};
</script>

<style>
.filters {
  display: flex;
  margin: 24px 3px;
  color: #ecf0f1;
  font-size: 14px;
  cursor: pointer;
}

.filters .filter {
  margin-right: 20px;
  transition: 0.3s;
}

.filters .filter.active {
  color: #32a8f6;
  transform: scale(1.3);
  font-weight: bolder;
}
</style>