<template>
  <div>
    <h3 class="title">评论页</h3>
    <h3 class="comment-title">热门评论</h3>
    <div>
      <comment-card @dianzan="dianzan" v-for="item in hots" :key="item.commentId" :d="item"></comment-card>
    </div>
    <h3 class="comment-title">评论</h3>
    <div>
      <comment-card @dianzan="dianzan" v-for="item in comments" :key="item.commentId" :d="item"></comment-card>
    </div>
  </div>
</template>
<script>
import { requestComment,dianzan } from "../util/request";
import commentCard from "../components/commentCard";
export default {
  components: {
    commentCard
  },
  data() {
    return {
      hots: [],
      comments: []
    };
  },
  methods: {
    dianzan(d){
      //点赞
      var t=1;
      if(d.liked){
        t=0;
      }
      dianzan({
        id:this.id,//资源 哪个歌
        cid:d.commentId,//评论
        t:t,//1-点赞 0-取消点赞
        type:0,//0-歌曲
      }).then(res=>{
        alert("点赞成功")
      })
    }
  },
  activated() {
    //歌曲id
    this.id = this.$route.query.id;
    //根据id获取评论内容
    requestComment({ id: this.id }).then(res => {
      this.hots = res.data.hotComments;
      this.comments = res.data.comments;
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.title {
  font-size: $h1;
  color: $primary;
}

.comment-title {
  font-size: $h2;
  color: $success;
}
</style>