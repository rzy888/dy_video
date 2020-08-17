<template>
  <div class="msg-list">
    <div class="top">
      <i @click="goBack" class="iconfont">&#xe604;</i>
      <div v-if="id==0">粉丝</div>
      <div v-else-if="id==1">赞</div>
      <div v-else-if="id==2">@我</div>
      <div v-else>评论</div>
    </div>
    <ul class="list">
      <li v-for="(item) in msgList" :key="item.id">
        <div class="avatar">
          <img :src="item.avatar" alt />
        </div>
        <div class="user-name">
          <div>{{item.uname}}</div>
          <div>
            <p v-if="id==0">关注了你</p>
            <p v-else-if="id==1">赞了你的作品</p>
            <p v-else-if="id==2">@了你</p>
            <p v-else>评论了你的作品</p>
          </div>
          <span>{{item.time}}</span>
        </div>
        <div class="item-right">
          <div
            @click="guanzhu(item.id)"
            v-if="id==0"
            :class="!item.isgz?'huiguan':''"
          >{{item.isgz?'已关注':'回关'}}</div>
          <img v-else :src="item.img" alt />
        </div>
      </li>
      <li class="bottom">{{nullText}}</li>
    </ul>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.query.id,
      msgList: [],
      nullText: "",
    };
  },
  created() {
    this.getMsgList();
  },
  methods: {
    // 回关
    guanzhu(value) {
      this.msgList.forEach((x, i) => {
        if (x.id == value) {
          x.isgz = true;
        }
      });
    },
    // 返回
    goBack() {
      history.go(-1);
    },
    //   获取消息列表
    getMsgList() {
      Indicator.open();
      this.$http
        .get("/msgList")
        .then((res) => {
          Indicator.close();
          this.nullText = "暂无更多视频";
          if (this.$store.state.myInfo.name == undefined) {
            this.msgList = [];
          } else {
            if (this.id == 0) {
              this.msgList = res.data.fs;
            }
            if (this.id == 1) {
              this.msgList = res.data.zan;
            }
            if (this.id == 2) {
              this.msgList = res.data.aite;
            }
            if (this.id == 3) {
              this.msgList = res.data.comments;
            }
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
.msg-list {
  padding: 10px;
  background: #161824;
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
    overflow-y: auto;
    background: #161824;
    margin-top: 70px;
    li {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .avatar {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
      .user-name {
        width: 200px;
        text-align: left;
        font-size: 90%;
        overflow: hidden;

        div {
          margin-bottom: 5px;
        }
        span {
          font-size: 80%;
          color: #5a4d4d;
        }
      }
      .item-right {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        text-align: center;
        overflow: hidden;
        .huiguan {
          width: 100%;
          height: 30px;
          background-color: #ee3c3c;
          border-radius: 4px;
          line-height: 30px;
        }
        img {
          width: 100%;
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
</style>