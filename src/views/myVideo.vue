<template>
  <div class="my-video">
    <i @click="goBack" class="iconfont">&#xe604;</i>
    <!-- 视频组件 -->
    <div class="videos">
      <Videos :videoList="videoList" :videoIndex="videoIndex"></Videos>
    </div>
  </div>
</template>

<script>
import Videos from "@/components/Videos";
export default {
  components: {
    Videos,
  },
  data() {
    return {
      videoList: this.$route.query.video,
      videoIndex: this.$route.query.index,
    };
  },
  methods: {
    // 返回
    goBack() {
      history.go(-1);
    },
    toComment() {},
  },
};
</script>

<style lang="scss" scope>
.my-video {
  height: 100%;
  position: relative;

  i {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
  }
  .videos {
    width: 100%;
    height: 100%;
  }
}
</style>