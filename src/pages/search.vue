<template>
  <div class="search">
      <!-- 搜索框 -->
    <div class="box">
      <div class="ipt">
        <input type="text" placeholder="请输入关键词" v-model="keyword" />
      </div>
      <div class="btn">
        <button @click="search">搜索</button>
      </div>
    </div>
    <!-- 热搜词汇 -->
    <div class="hots" v-show="keyword===''">
        <h3 class="title">热搜词：</h3>
        <span v-for="item in hots" :key="item.first"
        @click="change(item.first)"
        >{{item.first}}</span>
       
    </div>

    <!-- 搜索结果 -->
    <div class="result" v-show="keyword!==''">
        <div class="right" v-for="item in songs" :key="item.id"
        is="router-link"
        :to="'/play/'+item.id"
        >
            <h3>{{item.name}}</h3>
            <p>
                <span v-for="i in item.artists" :key="i.id">{{i.name}}&nbsp;&nbsp;</span>
            </p>
        </div>
    </div>
  </div>
</template>
<script>
import {requestHots, requestSearch} from "../util/request"
export default {
  components: {},
  data() {
    return {
        hots:[],//热门搜索词汇
        keyword:"",//搜素关键词
        songs:[],//搜索出来的歌曲
    };
  },
  methods: {
      //搜索
      search(){
          if(this.keyword===""){
              return;
          }
          requestSearch({
              keywords:this.keyword
          }).then(res=>{
              console.log(res);
              this.songs=res.data.result.songs;
          })
      },
      //点击了热搜词
      change(con){
          this.keyword=con;
          this.search()
      }
  },
  mounted(){
      //一进来页面就要请求热门搜索的词汇
      requestHots().then(res=>{
        //   console.log(res);
          this.hots=res.data.result.hots
      })
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.search 
    .box 
        overflow hidden
        .ipt 
            width 80% 
            float left
            input 
                margin-right 0
                width 90%
                margin-left 0.1rem
        .btn 
            float left
            width 20%
    .hots  
        overflow hidden
        .title 
            color $primary 
            font-size $h2
            margin $margin
        span 
            float left 
            padding $padding
            margin $margin
            border-radius $radius 
            background $info
.right 
    background $info
    margin-right $margin 
    margin-bottom $margin
    padding $padding
    display block
</style>