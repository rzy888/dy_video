<template>
  <div>
    <div class="my" :style="isShowRight ? 'transform: translateX(-200px);' : ''">
      <!-- 头部按钮 -->
      <div class="top">
        <!-- 展开按钮 -->
        <div @click="isShowRight = !isShowRight">
          <i class="iconfont">&#xe600;</i>
        </div>
      </div>
      <div @click="isShowRight = false" class="content">
        <!-- 中间个人信息部分 -->
        <div class="my-info">
          <div class="my-avatar">
            <img class="avatar" :src="myInfo.avatar" alt />
            <router-link :to="{ path: '/edit', query: { myInfo } }">
              <div>
                编辑资料
                <span>{{ $store.state.num || 0 }}%</span>
              </div>
            </router-link>
            <div>+好友</div>
          </div>
          <div class="uname">{{ myInfo.name ||'抖音'}}</div>
          <div>抖音号: {{ myInfo.dyId || '无' }}</div>
          <div>
            <span>商品橱窗</span>
            <i class="iconfont">&#xe630;</i>
          </div>
          <div>{{ myInfo.introduction }}</div>
          <div>
            <span>
              <span class="tag" v-if="myInfo.sex == 1">男</span>
              <span class="tag" v-else-if="myInfo.sex == 2">女</span>
              <span class="tag" v-else>保密</span>
            </span>
            <span class="tag" v-show=" myInfo.city">{{ myInfo.city }}</span>
            <router-link :to="{ path: '/edit', query: { myInfo } }">
              <span class="tag">+增加年龄、学校等标签</span>
            </router-link>
          </div>
          <div>
            <b>{{ myInfo.zan || 0 }}</b>
            <span>赞</span>
            <b>{{ myInfo.guanzhu || 0 }}</b>
            <span>关注</span>
            <b>{{ myInfo.fensi || 0 }}</b>
            <span>粉丝</span>
          </div>
        </div>
        <!-- 作品视频导航 -->
        <div class="nav">
          <div @click="handleClick(1)" :class="active == 1 ? 'active' : ''">作品 {{zNum}}</div>
          <div @click="handleClick(2)" :class="active == 2 ? 'active' : ''">动态 {{dNum}}</div>
          <div @click="handleClick(3)" :class="active == 3 ? 'active' : ''">喜欢 {{loveNum}}</div>
        </div>
        <!-- 底部作品列表 -->
        <div class="video-list">
          <!-- 作品和喜欢 -->
          <ul v-if="active!=2">
            <li @click="clickMyVideo" v-for="(item) in vidoList" :key="item.id">
              <img v-lazy="item.img" alt />
            </li>
          </ul>
          <!-- 动态 -->
          <ul v-else class="dynamic">
            <li @click="clickMyVideo" v-for="(item, index) in vidoList" :key="index">
              <div class="user">
                <img class="avatar" :src="item.avatar" alt />
                <span>{{myInfo.name}}</span>
              </div>
              <div class="dynamic-video">
                <img v-lazy="item.img" alt />
              </div>
            </li>
          </ul>
          <div class="bottom">{{nullText}}</div>
        </div>
      </div>
    </div>
    <div v-if="isShowRight" class="right">
      <ul>
        <!-- <li>
          <i class="iconfont">&#xe602;</i>我的订单
        </li>
        <li>
          <i class="iconfont">&#xe60f;</i>钱包
        </li>
        <li>
          <i class="iconfont">&#xe601;</i>我的二维码
        </li>
        <li>
          <i class="iconfont">&#xe609;</i>设置
        </li>-->
        <li @click="LoginOut" class="out">
          <i class="iconfont">&#xeb37;</i>退出登录
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Lazyload, Indicator } from "mint-ui";

export default {
  data() {
    return {
      // 用于渲染视频列表
      vidoList: [],
      active: 1,
      isShowRight: false,
      myInfo: {},
      zNum: 0,
      dNum: 0,
      loveNum: 0,
      // 所有视频列表
      videoListAll: {},
      nullText: "",
    };
  },
  created() {
    // 获取我的信息
    this.myInfo = this.$store.state.myInfo;
    // 获取我的视频
    this.getMyVideoList();
  },
  methods: {
    // 点击我的视频
    clickMyVideo() {
      this.$router.push({
        path: "/myVideo",
        query: { video: this.vidoList },
      });
    },
    // 切换作品动态喜欢
    handleClick(i) {
      this.active = i;
      if (i == 1) {
        this.vidoList = this.videoListAll.myVideoList;
      }
      if (i == 2) {
        this.vidoList = this.videoListAll.dynamicList;
      }
      if (i == 3) {
        this.vidoList = this.videoListAll.loveList;
      }
    },
    // 获取我的视频
    getMyVideoList() {
      Indicator.open();
      this.$http
        .get("/myVideo")
        .then((res) => {
          Indicator.close();
          this.nullText = "暂无更多视频";
          if (this.myInfo.name == undefined) {
            this.videoListAll = [];
          } else {
            this.videoListAll = res.data;
            // 默认展示我的作品和数量
            this.vidoList = this.videoListAll.myVideoList;
            this.zNum = this.videoListAll.myVideoList.length;
            this.dNum = this.videoListAll.dynamicList.length;
            this.loveNum = this.videoListAll.loveList.length;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 退出登录
    LoginOut() {
      window.localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.my {
  overflow-y: auto;
  .top {
    width: 100%;
    height: 100px;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596358746525&di=e968ae353b35005d422c78d58accd7ed&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180611%2F1222d94544f04a419350e48b9c81dfa3.jpeg")
      no-repeat;
    position: relative;
    div {
      position: absolute;
      right: 10px;
      top: 30px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      line-height: 30px;
    }
  }
  .content {
    background-color: #161824;
    margin-bottom: 50px;
    .my-info {
      width: 100%;
      height: 270px;
      padding: 0 20px;
      box-sizing: border-box;
      .my-avatar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(-10px);
        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #ffffff;
        }
        div {
          height: 30px;
          background-color: #665f5f4d;
          padding: 0 20px;
          line-height: 30px;
          font-size: 80%;
          border-radius: 2px;
          span {
            color: #868891fd;
          }
        }
      }
      .uname {
        font-size: 120%;
        font-weight: bold;

        + div {
          font-size: 60%;
          color: #71758a;
          margin-top: 5px;

          + div {
            height: 30px;
            color: #e0d35a;
            font-size: 80%;
            margin: 10px 0;
            border-top: 1px solid #c3c3c317;
            border-bottom: 1px solid #c3c3c317;
            display: flex;
            justify-content: space-between;
            line-height: 30px;

            + div {
              font-size: 80%;

              + div {
                display: flex;
                align-items: center;
                height: 25px;
                line-height: 25px;
                font-size: 60%;
                margin-top: 10px;
                .tag {
                  height: 25px;
                  max-width: 100px;
                  margin-right: 10px;
                  background-color: #665f5f4d;
                  padding: 0 5px;
                  border-radius: 2px;
                  overflow: hidden;
                }

                + div {
                  font-size: 90%;
                  margin-top: 15px;
                  span {
                    color: #f0e6e688;
                    margin-right: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 30px;
      text-align: center;
      div {
        width: 33%;
        height: 30px;
        line-height: 30px;
        font-size: 90%;
        color: #f0e6e688;
        font-weight: bold;
      }
      .active {
        border-bottom: 2px solid #e0d35a;
        color: #fff;
      }
    }
    .video-list {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin: 2px 0;
        li {
          width: 33%;
          height: 150px;
          margin: 0.5px 0.5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .dynamic {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 2px 0;
        li {
          width: 90%;
          height: 390px;
          margin-bottom: 20px;
          border-bottom: 1px solid #34353a;
          .user {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .avatar {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              margin-right: 20px;
            }
          }
          .dynamic-video {
            width: 100%;
            height: 300px;
            border-radius: 2px;
            background-color: #c8aac434;
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
}
.right {
  height: 100%;
  width: 205px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #1d202e;
  z-index: 9999;
  ul {
    margin: 20px 0;
    li {
      width: 200px;
      height: 50px;
      font-size: 90%;
      line-height: 50px;
      padding-left: 10px;
      i {
        margin-right: 10px;
      }
      &:active {
        background-color: #2d3146;
      }
    }
    .out {
      position: absolute;
      bottom: 40px;
      left: 20px;
      width: 150px;
      height: 40px;
      line-height: 40px;
      border-radius: 2px;
      text-align: center;
      background-color: #3d425e;
      padding: 0;
    }
  }
}
</style>
