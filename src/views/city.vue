<template>
  <div class="city">
    <!-- 顶部 -->
    <div class="top">{{ $store.state.myInfo.city || ' 登录即可获取 ' }}</div>
    <!-- 视频列表区域 -->
    <div class="video-list">
      <ul>
        <li @click="clickVideo(index)" v-for="(item,index) in cityVideoList" :key="item.id">
          <img v-lazy="item.img" alt />
          <div class="avatar">
            <div>
              <img :src="item.avatar" alt />
            </div>
            <span>{{item.distance}} km</span>
          </div>
        </li>
        <li class="bottom">{{nullText}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Lazyload, Indicator } from "mint-ui";
export default {
  data() {
    return {
      cityVideoList: [],
      nullText: "",
    };
  },
  created() {
    this.getCityVideoList();
  },
  methods: {
    // 跳转视频播放
    clickVideo(index) {
      this.$router.push({
        path: "/myVideo",
        query: { video: this.cityVideoList, index },
      });
    },
    // 获取同城视频
    getCityVideoList() {
      Indicator.open();
      this.$http
        .get("/cityVideos")
        .then((res) => {
          Indicator.close();
          this.nullText = "暂无更多视频";
          if (this.$store.state.myInfo.name == undefined) {
            this.msgLcityVideoListist = [];
          } else {
            this.cityVideoList = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scope>
.city {
  padding: 10px 0;
  .top {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .video-list {
    ul {
      overflow: auto;
      height: calc(84vh);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: #1d1a1c34;

      li {
        width: 49.5%;
        margin-bottom: 1px;
        position: relative;
        img {
          width: 100%;
        }
        .avatar {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 10px;
          left: 10px;
          div {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 10px;
            img {
              width: 100%;
            }
          }
          span {
            font-size: 80%;
          }
        }
      }
    }
    .bottom {
      font-size: 50%;
      color: #8e9489;
      height: 50px;
      width: 100%;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
