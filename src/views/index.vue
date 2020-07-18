<template>
  <div class="index">
    <div class="nav">
      <div>
        <img src="@/assets/img/zhibo.png" style="width:30px;padding-left:20px" />
      </div>
      <div class="guanzhu">
        <div @click="addActive(0)" :class="active == 0 ? 'active' : ''">关注</div>
        <div @click="addActive(1)" :class="active == 1 ? 'active' : ''">推荐</div>
      </div>
      <div>
        <img src="@/assets/img/search.png" style="width:30px;padding-right:20px" />
      </div>
    </div>
    <div class="videos">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2438981516,3561412782&fm=26&gp=0.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    }
  },
  methods: {
    addActive(a) {
      this.active = a
    },
  },
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  .nav {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f5f5f5c5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    .guanzhu {
      display: flex;
      width: 40%;
      justify-content: space-around;

      .active {
        color: #fff;
        position: relative;

        &:after {
          width: 20px;
          content: '';
          border: 1px solid #fff;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 5px);
        }
      }
    }
  }
  .videos {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
