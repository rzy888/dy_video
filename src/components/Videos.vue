<template>
  <div class="videosList">
    <swiper class="swiperBox" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item, index) in videoList" :key="index">
        <!-- 视频组件 -->
        <div>
          <VideoPlay ref="videos" :videoList="item" :index="index"></VideoPlay>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 视频详情组件 -->
    <div class="video-info">
      <video-info></video-info>
    </div>
    <!-- 视频右边头像和导航 -->
    <div class="right">
      <right-nav :comment="comment" @changeCommentOpen="changeCommentOpen"></right-nav>
    </div>
    <!-- 评论组件 -->
    <transition name="up">
      <div v-if="comment" class="comment-info">
        <Comment :comment="comment" @changeCommentClose="changeCommentClose"></Comment>
      </div>
    </transition>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import VideoPlay from "@/components/VideoPlay.vue";
import VideoInfo from "@/components/VideoInfo.vue";
import RightNav from "@/components/RightNav.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "Videos",
  components: {
    Swiper,
    SwiperSlide,
    VideoPlay,
    VideoInfo,
    RightNav,
    Comment,
  },
  data() {
    return {
      page: 1,
      // 轮播图组件的配置项
      swiperOption: {
        direction: "vertical", //垂直方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        on: {
          // 点击事件
          tap: () => {
            this.playAction(this.page - 1);
          },
          //向下翻页事件
          slideNextTransitionStart: () => {
            this.page += 1;
            this.nextVideo(this.page - 1);
          },
          // 向上翻页事件
          slidePrevTransitionEnd: () => {
            if (this.page > 1) {
              this.page -= 1;
              this.prevVideo(this.page - 1);
            }
          },
        },
      },
      //视频列表
      videoList: [
        {
          id: 1,
          url:
            "https://vdse.bdstatic.com/4437b9d40bedbec8c24c3c3d701d1f59.mp4?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2Ff54b3fbae192ca87b15d592159c1276cc90e1a837dc7626028284a15eb6c0d40",
        },
        {
          id: 2,
          url:
            "https://vdse.bdstatic.com/217108b1f6b93caf856d23ecf99a01c0.mp4?authorization=bce-auth-v1%2Ffb297a5cc0fb434c971b8fa103e8dd7b%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F7235f7f72fa9881e763723a07d9a05f089a2b730a083d4663ec92926130d8147",
        },
        {
          id: 3,
          url:
            "https://vdse.bdstatic.com/d95c9012700c69e75dbbc73b8c226eeb.mp4?authorization=bce-auth-v1%2Ffb297a5cc0fb434c971b8fa103e8dd7b%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F814f8be3a709978557d4e0a7cf509c9a23957ca5eb6a04961cb86c4b4b4a20db",
        },
      ],
      comment: false,
    };
  },
  methods: {
    // 点击事件
    playAction(index) {
      this.$refs.videos[index].playOrStop();
      this.comment = false;
    },
    // 上一个视频
    prevVideo(index) {
      // 暂停下一个播放当前视频
      this.$refs.videos[index + 1].stop();
      this.$refs.videos[index].play();
    },
    // 下一个视频
    nextVideo(index) {
      // 暂停上一个播放当前视频
      this.$refs.videos[index - 1].stop();
      this.$refs.videos[index].play();
    },
    // 打开评论
    changeCommentOpen(value) {
      this.comment = value;
    },
    // 关闭评论
    changeCommentClose(value) {
      this.comment = value;
    },
  },
};
</script>

<style lang="scss">
.videosList {
  width: 100%;
  height: 100%;

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .swiperBox {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;

    div:nth-child(1) {
      height: 100%;
    }
  }

  .video-info {
    position: absolute;
    bottom: 60px;
    left: 10px;
    z-index: 999;
  }
  .right {
    position: fixed;
    width: 50px;
    bottom: 60px;
    right: 10px;
    z-index: 999;
  }
  .comment-info {
    position: fixed;
    width: 100%;
    bottom: 50px;
    left: 0;
    z-index: 999;
  }
}
/* 设置持续时间和动画函数 */
.up-enter-active,
.up-leave-active {
  transition: all 0.3s;
}
.up-enter,
.up-leave-to {
  transform: translateY(100%);
  opacity: 1;
}
</style>
