<template>
  <div class="comment">
    <!-- 顶部文字和关闭 -->
    <div class="top">
      <h5>10.4w 条评论</h5>
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
          <div>
            <span>{{ item.user }}</span>
            <p>
              这是第{{ item.id }}条评论内容这是第{{ item.id }}条评论内容这是第{{ item.id }}条评论内容
              <span
                class="time"
              >12分钟前</span>
            </p>
          </div>
          <!-- 评论点赞 -->
          <div>
            <img src="../assets/img/love2.png" alt />
            <div>10</div>
          </div>
        </li>
        <!-- 评论回复 -->
        <transition name="slide-fade">
          <div v-if="showReply" class="reply">
            <div class="reply-content">
              <ul class="reply-item" v-for="(item2, index) in item.reply" :key="index">
                <li>
                  <!-- 回复人头像 -->
                  <div>
                    <img src="../assets/logo.png" alt />
                  </div>
                  <!-- 回复内容 -->
                  <div>
                    <span>{{ item2.user }}</span>
                    <p>
                      这是第{{ item2.id }}条回复内容这是第{{ item2.id }}条回复
                      <span class="time">12分钟前</span>
                    </p>
                  </div>
                  <!-- 回复点赞 -->
                  <div>
                    <img src="../assets/img/love2.png" alt />
                    <div>1</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <div v-if="item.reply" @click="replyAll" class="reply-all">---{{ zhankai }}</div>
      </ul>
      <div>暂时没有更多了</div>
    </div>
    <!-- 输入评论 -->
    <div class="my-comment">
      <input type="text" placeholder="留下你的精彩评论吧" />
      <div>
        <span>@</span>
        <span>确定</span>
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
          id: 1,
          user: "用户100158",
          reply: [
            {
              id: 1,
              user: "用户20158",
            },
            {
              id: 2,
              user: "用户1031258",
            },
            {
              id: 3,
              user: "用户10012",
            },
          ],
        },
        {
          id: 2,
          user: "用户100148",
        },
        {
          id: 3,
          user: "用户104458",
        },
        {
          id: 4,
          user: "用户10358",
        },
        {
          id: 5,
          user: "用户105258",
        },
        {
          id: 6,
          user: "用户105558",
        },
        {
          id: 7,
          user: "用户104458",
        },
      ],
      zhankai: "展开更多回复>",
      showReply: false,
    };
  },
  methods: {
    // 展开收起所有回复
    replyAll() {
      this.showReply = !this.showReply;
      if (this.showReply) {
        this.zhankai = "收起";
      } else {
        this.zhankai = "展开更多回复>";
      }
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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
