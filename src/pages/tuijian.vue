<template>
  <div>
     <button @click="$router.push('/search')">搜索</button>
    <ul class="all">
      <!-- <li class="item">
         <img src="https://p2.music.126.net/Hpd8jO5lSrnFRncv5U24DA==/109951164817491081.jpg" alt="">
         <p>123</p>
      </li>-->
      <li 
        is="router-link" 
        :to="'/list?id='+item.id" 
        class="item" 
        v-for="item in arr" 
        :key="item.id">
        <img :src="item.picUrl" alt />
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { requestTuijian } from "../util/request";
export default {
  components: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {},
  mounted() {
    //一进来页面就请求推荐的数据
    requestTuijian().then(res => {
      this.arr = res.data.result;
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.all {
  overflow: hidden;

  .item {
    width: 50%;
    float: left;
    padding: 0 $padding;
    box-sizing: border-box;
    height: 2.8rem;
    margin: $margin 0;

    img {
      width: 100%;
      height: 2rem;
    }

    p {
      height: 0.8rem;
      line-height: 0.4rem;
      overflow: hidden;
    }
  }
}
</style>