<template>
  <div class="wrapper">
    <audio autoplay :src="'https://music.163.com/song/media/outer/url?id='+id+'.mp3'" controls></audio>
    <hr>
    <router-link :to="'/comment?id='+id">评论</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data () {
    return {
        id:""
    };
  },
  watch: {
    $route(){
      console.log("=======$route变了=====")
      if(this.$route.path.indexOf("/play")!=-1){
        console.log("=======play $route变了================")
        this.id=this.$route.params.id;
      }
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted() {
    this.id=this.$route.params.id;
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrapper{}
</style>
