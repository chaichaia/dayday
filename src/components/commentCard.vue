<template>
  <div class="comment-card">
      <div class="comment-card-header">
          <img class="ava" :src="d.user.avatarUrl" alt="">
          <p class="nick">{{d.user.nickname}}</p>
          <p class="time">{{d.time|time}}</p>
      </div>
      <div class="con">{{d.content}}</div>
      <button @click="dianzan(d)">{{d.liked?'取消点赞':"点赞"}}</button>
  </div>
</template>
<script>
export default {
    props:["d"],
  components: {},
  data() {
    return {};
  },
  methods: {
    dianzan(d){
      this.$emit("dianzan",d)
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.comment-card 
    background $info 
    padding $padding
    .comment-card-header 
        height 0.8rem 
        overflow hidden
        img 
            float left 
            width 0.6rem 
            height 0.6rem 
            margin 0.1rem
            border-radius 50%; 
        .nick 
            float left
            line-height 0.8rem
        .time 
            float right 
            font-size $p 
            color #333
            line-height 0.8rem
</style>