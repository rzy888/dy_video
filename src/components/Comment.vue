<template>
  <div class="comment">
    <!-- 顶部文字和关闭 -->
    <div class="top">
      <h5>{{list.length}} 条评论</h5>
      <span @click="closeComment">x</span>
    </div>
    <!-- 评论内容主体 -->
    <div class="comment-content">
      <ul class="comment-item" v-for="(item, index) in list" :key="index">
        <li>
          <!-- 评论人头像 -->
          <div>
            <img src="../assets/logo.png" alt />
          </div>
          <!-- 评论内容 -->
          <div @click="submitReply(index)">
            <span>{{ item.user }}</span>
            <p>
              {{ item.commentValue}}
              <span class="time">{{item.time}}分钟前</span>
            </p>
          </div>
          <!-- 评论点赞 -->
          <div @click="commentZan(index)">
            <img v-if="!item.isLove" src="../assets/img/love2.png" alt />
            <img v-else src="../assets/img/love1.png" alt />
            <div>{{item.zan}}</div>
          </div>
        </li>
        <!-- 评论回复 -->
        <transition name="slide-fade">
          <div v-if="item.showReply" class="reply">
            <div class="reply-content">
              <ul class="reply-item" v-for="(item2, index2) in item.reply" :key="index2">
                <li>
                  <!-- 回复人头像 -->
                  <div>
                    <img src="../assets/logo.png" alt />
                  </div>
                  <!-- 回复内容 -->
                  <div>
                    <span @click="replyUser(index,index2)">{{ item2.user }}</span>
                    <p>
                      {{ item2.replyValue }}
                      <span class="time">{{item2.time}}分钟前</span>
                    </p>
                  </div>
                  <!-- 回复点赞 -->
                  <div @click="replyZan(index,index2)">
                    <img v-if="!item2.isLove" src="../assets/img/love2.png" alt />
                    <img v-else src="../assets/img/love1.png" alt />
                    <div>{{item2.zan}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <div v-if="item.reply.length !=0" @click="replyAll(index)" class="reply-all">
          <span v-if="!item.showReply">---展开更多回复></span>
          <span v-else>---收起</span>
        </div>
      </ul>
      <div>暂时没有更多了</div>
    </div>
    <!-- 输入评论 -->
    <div class="my-comment">
      <input type="text" v-model="commentValue" placeholder="留下你的精彩评论吧" />
      <div>
        <span @click="commentValue = ''">清空</span>
        <span @click="submitComment">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Boolean,
  },
  data() {
    return {
      list: [
        {
          user: "用户100158",
          commentValue: "这一条评论",
          zan: 20,
          time: "10",
          isLove: false,
          showReply: false,
          reply: [
            {
              user: "用户20158",
              replyValue: "这一条回复",
              zan: 2,
              time: "40",
              isLove: false,
            },
            {
              user: "用户1031258",
              replyValue: "这一条回复",
              time: "50",
              isLove: false,
              zan: 0,
            },
            {
              user: "用户10012",
              replyValue: "这一条回复",
              isLove: false,
              time: "50",
              zan: 0,
            },
          ],
        },
        {
          user: "用户100148",
          commentValue: "这一条评论",
          time: "10",
          isLove: false,
          zan: 0,
          reply: [],
          showReply: false,
        },
        {
          id: 3,
          user: "用户104458",
          commentValue: "这一条评论",
          isLove: false,
          time: "10",
          zan: 0,
          showReply: false,
          reply: [],
        },
        {
          user: "用户10358",
          commentValue: "这一条评论",
          time: "20",
          isLove: false,
          zan: 0,
          showReply: false,
          reply: [],
        },
        {
          user: "用户105258",
          commentValue: "这一条评论",
          time: "30",
          isLove: false,
          zan: 0,
          showReply: false,
          reply: [],
        },
      ],
      commentValue: "",
      uname: this.$store.state.myInfo.name || "匿名用户",
      index: 0,
      isReply: false,
    };
  },
  methods: {
    // 评论点赞和取消
    commentZan(index) {
      if (!this.list[index].isLove) {
        this.list[index].zan = this.list[index].zan + 1;
        this.list[index].isLove = true;
      } else {
        this.list[index].zan = this.list[index].zan - 1;
        this.list[index].isLove = false;
      }
    },
    // 回复点赞和取消
    replyZan(index, index2) {
      if (!this.list[index].reply[index2].isLove) {
        this.list[index].reply[index2].zan =
          this.list[index].reply[index2].zan + 1;
        this.list[index].reply[index2].isLove = true;
      } else {
        this.list[index].reply[index2].zan =
          this.list[index].reply[index2].zan - 1;
        this.list[index].reply[index2].isLove = false;
      }
    },
    //提交评论和回复
    submitComment() {
      // 添加回复
      if (this.isReply) {
        this.isReply = false;
        this.list[this.index].reply = [
          {
            user: this.uname,
            replyValue: this.commentValue,
            time: "1",
            zan: 0,
          },
          ...this.list[this.index].reply,
        ];
      } else {
        // 添加评论
        this.list = [
          {
            user: this.uname,
            commentValue: this.commentValue,
            time: "1",
            zan: 0,
            reply: [],
            showReply: false,
          },
          ...this.list,
        ];
      }
      this.commentValue = "";
      this.isReply = false;
    },
    // 回复
    submitReply(index) {
      this.commentValue = `@${this.list[index].user} `;
      this.index = index;
      this.isReply = true;
      this.list[index].showReply = true;
    },
    // @用户
    replyUser(index, index2) {
      this.commentValue = `@${this.list[index].reply[index2].user} `;
      this.index = index;
      this.isReply = true;
    },
    // 展开收起所有回复
    replyAll(index) {
      this.list[index].showReply = !this.list[index].showReply;
    },
    // 关闭评论
    closeComment() {
      //   console.log(this.comment)
      this.$emit("changeCommentClose", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 400px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff;
  color: #000;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 10px;
    margin-bottom: 10px;
    span {
      position: absolute;
      right: 20px;
    }
  }

  .comment-content {
    height: 320px;
    width: 100%;
    overflow-y: auto;
    .comment-item {
      padding: 0 10px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        div:nth-child(1) img {
          width: 30px;
          height: 30px;
          background-color: #eee;
          border-radius: 50%;
        }
        div:nth-child(2) {
          width: 100%;
          text-align: left;
          margin-left: 10px;
          span {
            font-size: 70%;
            color: #000;
            font-weight: bold;
          }
          p {
            font-size: 80%;
            .time {
              font-size: 60%;
              color: #0505053a;
              margin-left: 5px;
            }
          }
        }
        div:nth-child(3) {
          width: 30px;
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
          div {
            width: 30px;
            margin: 0 auto;
            font-size: 50%;
            color: #05050591;
            text-align: center;
          }
        }
      }
      .reply {
        margin-left: 30px;
        .reply-content {
          .reply-item {
            li {
              div:nth-child(1) img {
                width: 20px;
                height: 20px;
                background-color: #eee;
                border-radius: 50%;
              }
              div:nth-child(2) {
                span {
                  font-size: 70%;
                  color: #05050596;
                  font-weight: bold;
                }
                p {
                  .time {
                    font-size: 60%;
                    color: #0505053a;
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .reply-all {
      font-size: 70%;
      color: #08080893;
      margin-left: 30px;
    }
    > div {
      color: #05050550;
      font-size: 50%;
      text-align: center;
    }
  }
  .my-comment {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #eeeeee;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    input {
      width: 200px;
      height: 20px;
      padding-left: 10px;
    }
    div {
      span {
        margin-right: 20px;
        color: #05050581;
        font-weight: bold;
      }
    }
  }
}
/* 设置持续时间和动画函数 */
// .slide-fade-enter-active,
// .slide-fade-leave-active {
//   transition: all 0.3s;
// }
// .slide-fade-enter,
// .slide-fade-leave-to {
//   opacity: 0;
//   transform: translateY(-10px);
// }
</style>
