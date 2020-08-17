<template>
  <div class="add-video">
    <!-- 顶部 -->
    <div class="top">
      <i @click="goBack" class="iconfont">&#xe64f;</i>
      <span>
        <span class="iconfont">&#xe690;</span> 选择音乐
      </span>
    </div>
    <!-- 拍摄区域 -->
    <div class="video-box">
      <video ref="video" autoplay style="width:100%;height:auto;object-fit:fill" src></video>
      <!-- 底部按钮 -->
      <div class="btn">
        <div class="left-item">
          <div>道具</div>
          <p>道具</p>
        </div>
        <!-- 拍摄按钮 -->
        <div @click="getCamera" class="center-item">
          <div></div>
        </div>
        <div class="right-item">
          <div class="file-box">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596727940421&di=7f295987d3e6c78a63daa819a05b2706&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201302%2F19%2F1413538w83a1hab328jqz3.png"
              alt
            />
            <input
              class="file"
              ref="videoFace"
              type="file"
              accept="video/*"
              multiple
              @change="updateFace"
            />
          </div>
          <p>上传</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getCamera();
  },
  methods: {
    // 获取摄像机
    getCamera() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((success) => {
          this.$refs["video"].srcObject = success;
          this.$refs["video"].play();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 关闭摄像头
    closeCamera() {
      if (!this.$refs["video"].srcObject) return;
      let stream = this.$refs["video"].srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      this.$refs["video"].srcObject = null;
    },
    // 上传视频
    updateFace(e) {
      const file = e.target.files[0] || e.dataTransfer.files[0];
      if (file) {
        // 本地预览
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (evt) => {
          let data;
          if (typeof evt.target.result !== "object") {
            //将视频地址转为blob格式
            data = window.URL.createObjectURL(new Blob([evt.target.result]));
          } else {
            data = evt.target.result;
          }

          this.$refs["video"].src = data;
          console.log(data);
        };
        this.$refs["video"].play();
      }
    },
    // 返回
    goBack() {
      history.go(-1);
      this.closeCamera();
    },
  },
};
</script>

<style lang="scss" scope>
.add-video {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .top {
    width: 100%;
    text-align: center;
    position: fixed;
    top: 20px;
    z-index: 999;
    i {
      position: absolute;
      left: 10px;
    }
  }
  .video-box {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    video {
      background-color: #4e4444;
    }

    .btn {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      bottom: 20px;
      text-align: center;
      .left-item {
        div {
          width: 40px;
          height: 40px;
          background-color: #d3b7b7;
          color: red;
          line-height: 40px;
        }
      }
      .center-item {
        width: 70px;
        height: 70px;
        border: 5px solid #cf3232;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          width: 60px;
          height: 60px;
          background-color: #cf3232;
          border-radius: 50%;
        }
      }
      .file-box {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        position: relative;
        padding: 3px 5px;
        overflow: hidden;
        color: #fff;
        img {
          width: 100%;
          height: 100%;
        }
        .file {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          outline: none;
          background-color: transparent;
          filter: alpha(opacity=0);
          -moz-opacity: 0;
          -khtml-opacity: 0;
          opacity: 0;
        }
      }
    }
  }
}
</style>
