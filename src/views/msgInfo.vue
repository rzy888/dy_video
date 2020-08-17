<template>
  <div class="msg-info">
    <div class="top">
      <i @click="goBack" class="iconfont">&#xe604;</i>
      <div>{{queryInfo.name}}</div>
    </div>
    <div class="list">
      <div class="item" v-for="item in queryInfo" :key="item.id">
        <h4>{{item.msgTitle}}</h4>
        <span>{{item.newsTime}}</span>
        <p>{{item.msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: this.$route.query.info,
    };
  },
  methods: {
    // 返回
    goBack() {
      history.go(-1);
    },
  },
};
</script>

<style lang="scss" scope>
.msg-info {
  .top {
    height: 50px;
    border-bottom: 1px solid #2e2b2b;
    line-height: 50px;
    text-align: center;
    background: #161824;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 10px 0;
    i {
      position: absolute;
      left: 10px;
    }
  }
  .list {
    margin-top: 70px;
    padding: 20px;
    .item {
      border-radius: 4px;
      background: #25283b;
      padding: 10px;
      margin-bottom: 20px;
      span {
        font-size: 70%;
        color: #8d7e7e;
      }
      p {
        margin-top: 10px;
        font-size: 80%;
      }
    }
  }
}
</style>