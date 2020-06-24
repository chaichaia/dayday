<template>
  <div>
    <ul>
      <!-- <li class="item" >
              <img src="http://p1.music.126.net/DxQeZM26qjkQsyZulBdw6A==/109951163314294843.jpg" alt="">
              <div class="right">
                  <h3>歌名：xx</h3>
              <p>歌手：xx xx</p>
              </div>
      </li>-->
      <li class="item" v-for="item in songs" :key="item.id" is="router-link" :to="'/play/'+item.id">
        <img :src="item.al.picUrl" alt />
        <div class="right">
          <h3>歌名：{{item.name}}</h3>
          <p>
            歌手：
            <span v-for="i in item.ar" :key="i.id">{{i.name}}&nbsp;&nbsp;</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { requestList } from "../util/request";
export default {
  components: {},
  data() {
    return {
      songs: []
    };
  },
  methods: {},
  mounted() {
    console.log("---list mounted----------");
  },
  activated() {
    console.log("=====list activated==========");
    var id = this.$route.query.id;

    /*如果这次的id和上次的id是一样的，那么就不用发起请求了；
        如果这次id和上次的id不一样，那么songs=[]*/

    if(localStorage.getItem("id")===id){
        return;
    }

    localStorage.setItem("id",id);
    this.songs=[];

    requestList({
      id: id
    }).then(res => {
      this.songs = res.data.playlist.tracks;
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.item {
  width: 90%;
  margin: $margin auto;
  background: $info;
  height: 2rem;
  display: flex;
  padding: $padding;

  img {
    width: 1.5rem;
    height: 1.6rem;
    margin-top: 0.2rem;
  }

  .right {
    flex: 1;
  }
}
</style>