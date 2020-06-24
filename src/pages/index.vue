<template>
  <div>
    <router-view class="con"></router-view>
    <footer>
      <router-link :to="item.path" v-for="item in navs" :key="item.name" activeClass="select">
        <img :src="item.select" v-if="$route.path==item.path" alt="">
        <img :src="item.no_select" v-else alt="">
        <p>{{item.name}}</p>
      </router-link>
    </footer>
  </div>
</template>
<script>
import tuijian_no from "../assets/img/tuijian_no.png"
import tuijian_yes from "../assets/img/tuijian_yes.png"
import top_no from "../assets/img/top_no.png"
import top_yes from "../assets/img/top_yes.png"
export default {
  components: {},
  data() {
    return {
      navs:[
        {
          name:"推荐榜",
          select:tuijian_yes,
          no_select:tuijian_no,
          path:"/index/tuijian"
        },
        {
          name:"排行榜",
          select:top_yes,
          no_select:top_no,
          path:"/index/top"
        },

      ]
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
  .con 
    padding-bottom $footerHeight
  footer 
    position fixed
    left 0 
    bottom 0
    width 100vw 
    height $footerHeight
    display flex
    background $info
    a 
      flex: 1;
      padding $padding 0
      img 
        width $iconWidth
        height $iconHeight 
        display block 
        margin 0px auto;
      p 
        text-align center
        color $default;
    .select 
      background $primary;
      p 
        color #fff
</style>