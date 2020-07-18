<template>
  <div id="app">
    <router-view />
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/tabBar/TabBar.vue'

export default {
  components: {
    TabBar,
  },
}
</script>

<style>
#app {
  height: 100%;
  background-color: #161824;
  color: #fff;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #f5f5f5c5;
}
</style>
