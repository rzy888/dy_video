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
    <!-- 视频组件 -->
    <div class="videos">
      <Videos :videoList="videoList"></Videos>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
import Videos from "@/components/Videos";
export default {
  components: {
    Videos,
  },
  data() {
    return {
      active: 1,
      // 渲染视频列表
      videoList: [],
      // 关注视频列表
      gzVideoList: [],
      // 推荐视频列表
      tjVideoList: [],
    };
  },
  created() {
    this.getVideoList();
    this.getVideoList2();
  },
  methods: {
    //  获取推荐视频列表
    getVideoList() {
      Indicator.open();
      this.$http
        .get("/videoList")
        .then((res) => {
          Indicator.close();
          this.tjVideoList = res.data;
          this.videoList = this.tjVideoList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //  获取关注视频列表
    getVideoList2() {
      // 打开加载动画
      Indicator.open();
      this.$http
        .get("/videoList2")
        .then((res) => {
          // 关闭加载动画
          Indicator.close();
          this.gzVideoList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 顶部导航切换
    addActive(a) {
      this.active = a;
      if (a == 0) {
        this.videoList = this.gzVideoList;
      } else {
        this.videoList = this.tjVideoList;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  position: relative;
  .nav {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f5f5f5c5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    .guanzhu {
      display: flex;
      width: 40%;
      justify-content: space-around;
      color: #ccd3c5;
      font-weight: 800;
      text-shadow: #ccc 1px 1px 1px;
      .active {
        color: #fff;
        position: relative;

        &:after {
          width: 20px;
          content: "";
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
  }
}
</style>
