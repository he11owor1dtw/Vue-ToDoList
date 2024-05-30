<template>
  <!-- 篩選列表 -->
  <div class="filters">
    <span class="filter active">全部</span>
    <span class="filter">已完成</span>
    <span class="filter">未完成</span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
}
</script>

<style scoped>
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
</style>