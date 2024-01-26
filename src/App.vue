<script setup lang="ts">
import { ref } from 'vue';
const active = ref(0);
var title = "首页"
const onclickTabbar = function () {
  switch (active.value) {
    case 0:
      title = "首页";
      break;
    case 1:
      title = "搜索";
      break;
  }
}
</script>

<template>
  <van-nav-bar :title="title" :fixed=true />
  <router-view />
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace to="/" icon="home-o" @click="onclickTabbar">首页</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search" @click="onclickTabbar">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
