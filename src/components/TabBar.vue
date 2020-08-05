<template>
  <div class="tab-bar">
    <div @click="addActive(0)">
      <router-link :class="active == 0 ? 'active' : ''" to="/">首页</router-link>
    </div>
    <div @click="addActive(1)">
      <router-link :class="active == 1 ? 'active' : ''" to="/city">北京</router-link>
    </div>
    <div>
      <router-link to="/add">
        <img style="width:40px" src="@/assets/img/01.gif" />
      </router-link>
    </div>
    <div @click="addActive(2)">
      <router-link :class="active == 2 ? 'active' : ''" to="/news">消息</router-link>
    </div>
    <div @click="addActive(3)">
      <router-link :class="active == 3 ? 'active' : ''" to="/my">我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    addActive(a) {
      this.active = a
    },
  },
}
</script>

<style lang="scss">
.tab-bar {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #000;
  justify-content: space-around;
  align-items: center;
  // font-size: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  .active {
    color: #fff;
  }
}
</style>
