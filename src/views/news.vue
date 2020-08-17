<template>
  <div class="new-msg">
    <!-- 标题 -->
    <div class="top">消息</div>
    <!-- 主体部分 -->
    <div class="content">
      <!-- 消息类型 -->
      <div class="msg-type">
        <div class="item">
          <router-link :to="{path:'/msgList',query:{id:0}}">
            <img src="../assets/img/fs.gif" alt />
          </router-link>
          <p>粉丝</p>
        </div>
        <div class="item">
          <router-link :to="{path:'/msgList',query:{id:1}}">
            <img src="../assets/img/zan.png" alt />
          </router-link>
          <p>赞</p>
        </div>
        <div class="item">
          <router-link :to="{path:'/msgList',query:{id:2}}">
            <img src="../assets/img/@.gif" alt />
          </router-link>
          <p>@我</p>
        </div>
        <div class="item">
          <router-link :to="{path:'/msgList',query:{id:3}}">
            <img src="../assets/img/pl.gif" alt />
          </router-link>
          <p>评论</p>
        </div>
      </div>
      <!-- 消息列表 -->
      <div class="msg-list">
        <ul>
          <li @click="toMsgInfo(item[0].msgAll)" v-for="item in msgList" :key="item[0].id">
            <div class="msg-img">
              <img :src="item[0].img" alt />
              <span v-if="item[0].isGf">官方</span>
            </div>
            <div>
              <div>{{ item[0].name }}</div>
              <p>{{ item[0].msgAll[0].msgTitle }} · {{ item[0].msgAll[0].newsTime }}</p>
            </div>
          </li>
          <li class="bottom">{{nullText}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      msgList: [],
      nullText: "",
    };
  },
  created() {
    this.getNewsMsg();
  },
  methods: {
    getNewsMsg() {
      Indicator.open();
      this.$http
        .get("/newsMsg")
        .then((res) => {
          Indicator.close();
          this.nullText = "暂无更多视频";
          if (this.$store.state.myInfo.name == undefined) {
            this.msgList = [];
          } else {
            this.msgList = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //跳转到消息详情页
    toMsgInfo(value) {
      this.$router.push({
        path: "/msgInfo",
        query: { info: value },
      });
    },
  },
};
</script>

<style lang="scss" scope>
.new-msg {
  padding: 10px;
  .top {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .content {
    width: 100%;
    height: calc(83vh);
    overflow: auto;
    .msg-type {
      display: flex;
      justify-content: space-around;
      text-align: center;
      font-size: 90%;
      padding: 20px 0;
      border-bottom: 1px solid #3a3636;

      img {
        width: 50px;
        border-radius: 2px;
      }
    }
    .msg-list {
      ul {
        padding: 0 10px;
        li {
          display: flex;
          margin-top: 20px;

          img {
            width: 50px;
            border-radius: 50%;
            margin-right: 20px;
          }
          .msg-img {
            position: relative;
            span {
              display: block;
              font-size: 50%;
              line-height: 15px;
              color: #000;
              text-align: center;
              width: 30px;
              height: 15px;
              border-radius: 60px 20px 60px 20px;
              background-color: #fccc2a;
              position: absolute;
              bottom: 0;
              right: 10px;
            }
          }

          div {
            p {
              font-size: 80%;
              color: #776d6d;
              margin-top: 5px;
            }
          }
        }
        .bottom {
          width: 100%;
          height: 30px;
          font-size: 80%;
          color: #928585;
          line-height: 30px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
