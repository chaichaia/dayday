import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login =()=>import ("../pages/login")
const index =()=>import ("../pages/index")
const top =()=>import ("../pages/top")
const tuijian =()=>import ("../pages/tuijian")
const list =()=>import ("../pages/list")
const play =()=>import ("../pages/play")
const comment =()=>import ("../pages/comment")
const search =()=>import ("../pages/search")
export default new Router({
  //滚动行为
  scrollBehavior(to,from,savePosition){
    if(savePosition){
      return savePosition
    }else{
      return {
        x:0,
        y:0
      }
    }
  },
  routes: [
    {
      path:"/login",
      component:login
    },
    {
      path:"/index",
      component:index,
      children:[
        {
          path:"tuijian",
          component:tuijian
        },
        {
          path:"top",
          component:top
        },
        {
          path:"",
          redirect:"tuijian"
        }
      ]
    },
    {
      path:"/list",
      component:list
    },
    {
      path:"/search",
      component:search
    },
    {
      path:"/comment",
      component:comment
    },
    {
      path:"/play/:id",
      component:play
    },
    {
      path:"*",
      redirect:"/login"
    },
  ]
})
