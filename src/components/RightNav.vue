<template>
  <div class="right-nav">
    <!-- 头像 -->
    <div class="item-avatar">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595430447549&di=e68ec6a80faddae8362c703f7c3904dd&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fbd315c6034a85edf8c1758e240540923dc547553.jpg"
        alt
      />
      <div class="add">+</div>
    </div>
    <!-- 点赞 -->
    <div class="item-icon">
      <img src="../assets/img/love.png" alt />
      <p>7.6W</p>
    </div>
    <!-- 评论 -->
    <div @click="openComment" class="item-icon">
      <img src="../assets/img/comment.png" alt />
      <p>500</p>
    </div>
    <!-- 转发 -->
    <div class="item-icon">
      <img src="../assets/img/forward.png" alt />
      <p>99</p>
    </div>
    <!-- 作品原声 -->
    <div class="item-avatar">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595430447549&di=e68ec6a80faddae8362c703f7c3904dd&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fbd315c6034a85edf8c1758e240540923dc547553.jpg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Boolean,
  },
  methods: {
    openComment() {
      this.$emit('changeCommentOpen', true)
    },
  },
}
</script>

<style lang="scss">
.right-nav {
  width: 50px;
  text-align: center;
  font-size: 10px;

  .item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
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
    border: 2px solid red;
    position: relative;
    .add {
      width: 20px;
      height: 20px;
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
</style>
