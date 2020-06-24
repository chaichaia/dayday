<template>
  <div>
    <button @click="$router.push('/search')">搜索</button>
    <div class="top">
      <div class="item" 
      is="router-link"
      :to="'/list?id='+item.id" 
      v-for="item in four" :key="item.id"
      >
        <img :src="item.coverImgUrl" alt />
        <div class="right">
          <p v-for="(i,idx) in item.tracks" :key="i.first">{{idx+1}}.{{i.first}} - {{i.second}}</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="item in other" :key="item.id"
      is="router-link"
      :to="'/list?id='+item.id"
      >
        <img :src="item.coverImgUrl" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { requestTop } from "../util/request";
export default {
  components: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {},
  mounted() {
    requestTop().then(res => {
      console.log("======top====")
      console.log(res)
      this.arr = res.data.list;
    });
  },
  computed: {
    four(){
     return this.arr.filter((item,index)=>index<4)
   
      
    },
    other(){
      return this.arr.filter((item,index)=>index>=4)
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.top 
  .item 
    padding $padding 
    height 2rem 
    display flex 
    img 
      width 2rem 
      height 2rem 
      border-radius $radius
      display block 
    .right 
      flex 1 
      margin-top $margin
      margin-left $margin
      overflow hidden
      p 
        font-size $h3 
        line-height 0.4rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
.bottom 
  overflow hidden
  .item 
    width 33.33% 
    float left
    img 
      width 90% 
      margin 0.1rem auto
      display block
      border-radius $radius
    p 
      text-align center
      line-height 0.4rem
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
</style>