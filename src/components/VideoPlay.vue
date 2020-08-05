<template>
  <div>
    <video-player
      class="video-player vjs-big-play-button"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
// 引入视频播放组件
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

export default {
  name: 'VideoPlay',
  components: {
    videoPlayer,
  },
  props: ['videoList', 'index'],
  data() {
    return {
      //视频播放组件配置项
      playerOptions: {
        autoplay: false, //自动播放
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 循环播放。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            // src: require('../assets/video/01.mp4') //url地址,引入本地视频需要require()
            src: this.videoList.url,
          },
        ],
        width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false,
      },
      // 控制视频播放与否
      isPlay: true,
    }
  },
  created() {
    this.autoPlayAction()
  },
  methods: {
    // 点击播放暂停
    playOrStop() {
      if (this.isPlay) {
        this.stop()
      } else {
        this.$refs.videoPlayer.player.play()
        this.isPlay = true
      }
    },
    // 自动播放第一个视频
    autoPlayAction() {
      if (this.index == 0) {
        this.playerOptions.autoplay = true
      }
    },
    // 播放方法
    play() {
      this.$refs.videoPlayer.player.load() //重新加载视频
      this.$refs.videoPlayer.player.play()
      this.isPlay = true
    },
    // 暂停方法
    stop() {
      this.$refs.videoPlayer.player.pause()
      this.isPlay = false
    },
  },
}
</script>

<style lang="scss">
.video-player {
  position: relative;
  .video-js .vjs-big-play-button {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    font-size: 600%;
    background-color: rgba(0, 0, 0, 0);
    span {
      position: absolute;
      top: 40%;
      left: 45%;
      opacity: 0.5;
    }
  }
}
</style>
