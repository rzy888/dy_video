<template>
  <div>
    <div class="my" :style="isShowRight?'transform: translateX(-200px);':''">
      <!-- 头部按钮 -->
      <div class="top">
        <!-- 展开按钮 -->
        <div @click="isShowRight = !isShowRight;">
          <i class="iconfont">&#xe600;</i>
        </div>
      </div>
      <div @click="isShowRight = false" class="content">
        <!-- 中间个人信息部分 -->
        <div class="my-info">
          <div class="my-avatar">
            <img
              class="avatar"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596359813660&di=412d55978783be920b6cfeaf84b90566&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201508%2F20%2F20150820143413_Tsx8R.thumb.700_0.jpeg"
              alt
            />
            <div>
              编辑资料
              <span>75%</span>
            </div>
            <div>+好友</div>
          </div>
          <div class="uname">朝阳</div>
          <div>抖音号: 1899158662</div>
          <div>
            <span>商品橱窗</span>
            <span>></span>
          </div>
          <div>此处是个人简介</div>
          <div>
            <span>男</span>
            <span>北京</span>
            <span>+增加年龄、学校等标签</span>
          </div>
          <div>
            <b>55</b>
            <span>赞</span>
            <b>26</b>
            <span>关注</span>
            <b>99</b>
            <span>粉丝</span>
          </div>
        </div>
        <!-- 作品视频导航 -->
        <div class="nav">
          <div @click="handleClick(1)" :class="active==1?'active':''">作品 15</div>
          <div @click="handleClick(2)" :class="active==2?'active':''">动态 17</div>
          <div @click="handleClick(3)" :class="active==3?'active':''">喜欢 60</div>
        </div>
        <!-- 底部作品列表 -->
        <div class="video-list">
          <ul>
            <li v-for="(item,index) in vidoList" :key="index">{{item}}</li>
          </ul>
          <div class="bottom">暂时没有更多了</div>
        </div>
      </div>
    </div>
    <div v-if="isShowRight" class="right">
      <ul>
        <li>
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
        </li>
        <li @click="LoginOut" class="out">
          <i class="iconfont">&#xeb37;</i>退出登录
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vidoList: [1, 2, 3, 4, 5, 6, 7],
      active: 1,
      isShowRight: false,
    };
  },
  methods: {
    handleClick(i) {
      this.active = i;
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
            font-size: 60%;
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
                margin-top: 5px;
                span {
                  margin-right: 10px;
                  margin-top: 5px;
                  background-color: #665f5f4d;
                  padding: 0 5px;
                  border-radius: 2px;
                }

                + div {
                  font-size: 90%;
                  margin-top: 10px;
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
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 2px 0;
        li {
          width: 33%;
          height: 150px;
          background-color: #c8aac434;
          margin-bottom: 1px;
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