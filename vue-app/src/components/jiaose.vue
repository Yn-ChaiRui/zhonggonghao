<template>
  <div>
    <!-- 输入块 -->
    <a-input-search placeholder="输入关键字搜索" style="width: 500px" @search="onSearch" />
    <!-- 分割线块 -->
    <a-divider />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    }
  }
};


</script>

<style  scoped>
.fudong {
  float: right;
}
</style>