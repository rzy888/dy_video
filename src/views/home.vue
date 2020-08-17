<template>
  <div class="home">
    <router-view />
    <TabBar class="bar"></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
export default {
  components: {
    TabBar,
  },
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
