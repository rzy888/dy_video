<template>
  <div class="edit">
    <!-- 顶部 -->
    <div class="top">
      <i @click="goBack" class="iconfont">&#xe604;</i>
      <div>
        <div>编辑资料</div>
        <div class="complete">已完成{{ num || 0 }}%</div>
      </div>
    </div>
    <!-- 头像 -->
    <div class="avatar">
      <div>
        <div class="avatar-img">
          <!-- 头像图片 -->
          <img :src="myInfo.avatar" alt />
          <div class="icon">
            <!-- 相机图标 -->
            <i class="iconfont">&#xe62f;</i>
            <!-- 头像上传 -->
            <input class="file" type="file" accept="image/*" multiple @change="updateFace" />
          </div>
        </div>
        <div class="update">点击更换头像</div>
      </div>
    </div>
    <!-- 其他信息 -->
    <div class="edit-info">
      <div @click="editInfo('name')" class="edit-item">
        <span class="item-name">名字</span>
        <span class="item-content">
          {{ myInfo.name }}
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
      <div @click="editInfo('id')" class="edit-item">
        <span class="item-name">抖音号</span>
        <span class="item-content">
          {{ myInfo.dyId }}
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
      <div @click="editInfo('introduce')" class="edit-item">
        <span class="item-name">简介</span>
        <span class="item-content">
          {{ myInfo.introduction }}
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
      <div @click="isShowSex = true" class="edit-item">
        <span class="item-name">性别</span>
        <span class="item-content">
          <span v-if="myInfo.sex == 1">男</span>
          <span v-else-if="myInfo.sex == 2">女</span>
          <span v-else>不显示</span>
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
      <div @click="openPicker" class="edit-item">
        <span class="item-name">生日</span>
        <span class="item-content">
          点击设置
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
      <div @click="isShowCity = true" class="edit-item">
        <span class="item-name">地区</span>
        <span class="item-content">
          {{ myInfo.city }}
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
      <div @click="editInfo('school')" class="edit-item">
        <span class="item-name">
          学校
          <span class="item-content">(选填)</span>
        </span>
        <span class="item-content">
          点击设置
          <i class="iconfont">&#xe630;</i>
        </span>
      </div>
    </div>
    <!-- 性别弹出层 -->
    <mt-popup class="mt-sex" v-model="isShowSex" position="center">
      <div @click="editSex('1')">男</div>
      <div @click="editSex('2')">女</div>
      <div @click="editSex('不显示')">不显示</div>
    </mt-popup>
    <!-- 生日弹出层 -->
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="birthday"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="editDate"
    ></mt-datetime-picker>
    <!-- 地区选择区域 -->
    <mt-popup class="mt-city" v-model="isShowCity" position="right">
      <div>
        <div class="top">
          <i @click="isShowCity = false" class="iconfont">&#xe604;</i>
          <div>地区选择</div>
        </div>
        <div class="select-city">
          <ul>
            <li @click="editCity('')">暂不设置</li>
            <li class="china">中国</li>
            <li @click="editCity(item.name)" v-for="(item, index) in cityList" :key="index">{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { MessageBox, Popup, DatetimePicker } from 'mint-ui'
import '../assets/js/date.js'
import { formatDate } from '../assets/js/date.js'
import { province } from '../assets/js/china.js'
export default {
  components: {
    MessageBox,
  },
  data() {
    return {
      // 个人信息
      myInfo: this.$route.query.myInfo,
      isShowSex: false,
      isShowCity: false,
      pickerValue: '',
      birthday: '',
      startDate: new Date(1900 - 1 - 1),
      endDate: new Date(),
      cityList: province,
    }
  },
  computed: {
    // 计算完成度
    num() {
      let a = 0
      let i = 0
      for (let key in this.myInfo) {
        i++
        if (this.myInfo[key] != '') {
          a++
        }
      }
      return parseInt((a / i) * 100)
    },
  },
  methods: {
    // 返回
    goBack() {
      // 返回之前存储我的信息
      this.$store.commit('init_myInfo', this.myInfo)
      this.$store.commit('init_num')
      history.go(-1)
    },
    // 上传头像
    updateFace(e) {
      let file = e.target.files[0]
      let fileReader = new FileReader()
      fileReader.onload = (e) => {
        this.myInfo.avatar = e.target.result //base64
      }
      fileReader.readAsDataURL(file)
    },
    // 修改信息
    editInfo(e) {
      // 名字
      if (e == 'name') {
        MessageBox.prompt('不能超过20个字符', '修改名字', {
          inputValue: this.myInfo.name,
        })
          .then(({ value, action }) => {
            if (action == 'confirm') {
              this.myInfo.name = value
            }
          })
          .catch((err) => {
            if (err == 'cancel') {
              return
            }
          })
      }
      // 抖音号
      if (e == 'id') {
        MessageBox.prompt('最多16个字符', '修改抖音号', {
          inputValue: this.myInfo.dyId,
        })
          .then(({ value, action }) => {
            if (action == 'confirm') {
              this.myInfo.dyId = value
            }
          })
          .catch((err) => {
            if (err == 'cancel') {
              return
            }
          })
      }
      // 个人简介
      if (e == 'introduce') {
        MessageBox({
          title: '修改简介',
          message: `<div>
            <textarea id="introduce" class="introduce">${this.myInfo.introduction}</textarea>
          </div>`,
          showCancelButton: true,
        }).then((action) => {
          if (action == 'confirm') {
            this.myInfo.introduction = document.getElementById('introduce').value
          }
        })
      }
      //填写学校
      if (e == 'school') {
        MessageBox.prompt('(选填)', '修改学校名字', {
          inputValue: this.myInfo.school,
        })
          .then(({ value, action }) => {
            if (action == 'confirm') {
              this.myInfo.school = value
            }
          })
          .catch((err) => {
            if (err == 'cancel') {
              return
            }
          })
      }
    },
    //编辑性别
    editSex(value) {
      this.myInfo.sex = value
      this.isShowSex = false
    },
    //打开生日选择框
    openPicker() {
      this.birthday = new Date()
      this.$refs.picker.open()
    },
    // 选择日期
    editDate() {
      this.myInfo.birthday = formatDate(this.birthday)
    },
    //选择地区
    editCity(name) {
      this.myInfo.city = name
      this.isShowCity = false
    },
  },
}
</script>

<style lang="scss" scope>
.edit {
  padding: 20px 10px;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    i {
      position: absolute;
      left: 0;
    }
    .complete {
      font-size: 50%;
      color: #746969;
    }
  }
  .avatar {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 30px;
    .avatar-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 10px;
      position: relative;
      img {
        width: 100%;
      }
      .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 100px;
        background-color: rgba(0, 0, 0, 0.3);
        i {
          font-size: 150%;
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
    .update {
      font-size: 80%;
      font-weight: bold;
    }
  }
  .edit-info {
    margin-top: 30px;
    .edit-item {
      display: flex;
      justify-content: space-between;
      height: 50px;
      font-size: 90%;
      line-height: 50px;
      &:active {
        background-color: #2d3146;
      }
      .item-name {
        font-weight: bold;
      }
      .item-content {
        width: 200px;
        text-align: right;
        overflow: hidden;
        color: #969191;
      }
    }
  }
  .mt-sex {
    color: #000;
    width: 340px;
    border-radius: 2px;
    div {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      font-size: 90%;
      &:active {
        background-color: #eee;
      }
    }
  }
  .mt-city {
    width: 100%;
    height: 100%;
    background-color: #161824;

    div {
      .top {
        padding: 10px;
        border-bottom: 1px solid #2e2b2b;
      }
    }
    .select-city {
      width: 100%;
      height: 100%;
      ul {
        width: 100%;
        height: calc(94vh);
        overflow-y: auto;
        box-sizing: border-box;
        .china {
          border-top: 1px solid #2e2b2b;
          border-bottom: 1px solid #2e2b2b;
        }
        li {
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 90%;
          padding: 0 10px;
          box-sizing: border-box;
          &:active {
            background-color: #2d3146;
          }
        }
      }
    }
  }
}
.introduce {
  width: 250px;
  height: 150px;
  border: 1px solid #7c7777;
  border-radius: 4px;
  outline: none;
}
</style>
