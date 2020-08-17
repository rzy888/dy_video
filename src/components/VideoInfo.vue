<template>
  <div class="info">
    <div class="author">@{{videoList.name}}</div>
    <div class="title">{{videoList.title}}</div>
    <div class="bgm-name">
      <img src="../assets/img/dy_logo_sm.png" alt />
      <div>
        <span :data-text="videoList.name+'的作品原声'">{{videoList.name}}的作品原声</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["videoList"],
};
</script>

<style lang="scss">
.author {
  color: #fff;
  font-weight: bold;
  font-size: 90%;
  margin-bottom: 5px;
}
.title {
  color: #eee;
  font-size: 80%;
  margin-bottom: 10px;
}
.bgm-name {
  color: #eee;
  font-size: 14px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin-right: 10px;
  }
  div {
    width: 150px;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    span {
      display: inline-block;
      animation: scroll 5s linear infinite;
      &::after {
        content: attr(data-text);
        margin-left: 30px;
      }
    }
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-50% - 20px));
      }
    }
  }
}
</style>
