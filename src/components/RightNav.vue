<template>
  <div class="right-nav">
    <div @click="clickRight">
      <!-- 头像 -->
      <div class="item-avatar">
        <div>
          <img :src="videoList.avatar" alt />
        </div>
        <div @click="isGz = true" v-if="!isGz" class="add">+</div>
      </div>
      <!-- 点赞 -->
      <div @click="addLove" class="item-icon">
        <img v-if="isLove" src="../assets/img/love1.png" alt />
        <img v-else src="../assets/img/love.png" alt />
        <p>{{videoList.zan}}</p>
      </div>
      <!-- 评论 -->
      <div @click="openComment" class="item-icon">
        <img src="../assets/img/comment.png" alt />
        <p>{{videoList.commentNum}}</p>
      </div>
      <!-- 转发 -->
      <div class="item-icon">
        <img src="../assets/img/forward.png" alt />
        <p>{{videoList.forward}}</p>
      </div>
      <!-- 作品原声 -->
      <div class="item-avatar">
        <img :src="videoList.avatar" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Boolean,
    videoList: Object,
    isClickRight: Boolean,
  },
  data() {
    return {
      isLove: false,
      isGz: false,
    };
  },
  methods: {
    clickRight() {
      this.$emit("clickRight", true);
    },
    // 点赞和取消点赞
    addLove(event) {
      this.isLove = !this.isLove;
      if (this.isLove) {
        this.videoList.zan = this.videoList.zan + 1;
      } else {
        this.videoList.zan = this.videoList.zan - 1;
      }
    },
    //打开评论
    openComment(event) {
      event.preventDefault();
      // 传递给父组件
      this.$emit("changeCommentOpen", true);
    },
  },
};
</script>

<style lang="scss" scope>
.right-nav {
  div {
    width: 50px;
    text-align: center;
    font-size: 10px;

    .item-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      div {
        width: 40px;
        height: 40px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .item-icon {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    div {
      margin: 30px auto;
    }
    div:nth-child(1) {
      position: relative;
      div {
        width: 40px;
        height: 40px;
        border: 1px solid red;
        border-radius: 50%;
        overflow: hidden;
      }
      .add {
        width: 20px;
        height: 20px !important;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        bottom: -40px;
        left: 10px;
        text-align: center;
        line-height: 20px;
      }
    }

    div:nth-child(3),
    div:nth-child(4) {
      width: 30px;
      height: 30px;
    }
    div:nth-child(5) {
      padding: 3px;
      margin-top: 50px;
      margin-bottom: 0;
      background-color: rgb(37, 36, 36);
      position: relative;
      animation: bgm 5s linear infinite;
      img {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }
    @keyframes bgm {
      form {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
