import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'




var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:Newsinfo},
        {path:'/home/photolist',component:photolist},
        {path:'/home/photoinfo/:id',component: photoinfo},
        {path:'/home/goodslist',component:goodslist},
        {path:'/home/goodsinfo/:id',component: goodsinfo,name:"goodsinfo"},
        {path:'/home/goodscomment/:id',component: goodscomment,name:"goodscomment"},
        {path:'/home/goodsdesc/:id',component: goodsdesc,name:"goodsdesc"},
        
    ],
    linkActiveClass:'mui-active'
  
})
export default router