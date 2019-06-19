import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Vuex from 'vuex'
//注册vuex
Vue.use(Vuex)
//当进入网站自动调用本地存储中的购物车数据
var car=JSON.parse(localStorage.getItem('car1')||'[]')
var store = new Vuex.Store({
    state: {//this.$store.state.***
     car:car,//将购物车的商品的数据存储起来
     //{id:商品ID,count:商品数量,price:商品单价，selected:false}
    },
    mutations: {//this.$store.commit('')
      addtocar(state,goodsinfo){
          //点击加入购物车，把商品信息保存到store
          var flag=false//表示当前car中是否存在goodsinfo
          state.car.some(item=>{
              if(item.id==goodsinfo.id){
                  item.count+=parseInt(goodsinfo.count)
                  flag=true
                  return true
              }
          })
          if(!flag){
              state.car.push(goodsinfo)
          }
          //当更新car之后，把car数组，存放到本地localstorage中
          localStorage.setItem('car1',JSON.stringify(state.car))


      },
      updatecount(state,goodsinfo){

        state.car.some(item=>{
            if(item.id==goodsinfo.id){
                item.count=parseInt(goodsinfo.count)
                
                return true
            }
        })
        //当修改car之后，把car数组，存放到本地localstorage中
        localStorage.setItem('car1',JSON.stringify(state.car))
      },
      removecar(state,id){
        state.car.some((item,i)=>{
            if(item.id==id){
                state.car.splice(i,1)
                
                return true
            }
        })
        localStorage.setItem('car1',JSON.stringify(state.car))


      },
      updategoodsselected(state,info){
        state.car.some(item=>{
            if(item.id==info.id){
                item.selected=info.selected
                
                return true
            }
        })
        localStorage.setItem('car1',JSON.stringify(state.car))
    }
    },
    getters:{//this.$store.getters.***
        getallcount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c

        },
        getgoodscount(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.count
            })
            return o
        },
        getgoodsselected(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o
        },
        getgoodscountandmoney(state){
            var o={
                count:0,money:0
            }
            state.car.forEach(item=>{
               if(item.selected){
                   o.count+=item.count
                   o.money+=item.price*item.count
               }
            })
            return o
        }
        

    }
  })

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'

//导入时间插件
import moment from 'moment'
//导入全局过滤器
Vue.filter('dataFormat',function(dataStr,patten="YYYY-MM-DD HH:mm:ss"){
    moment(dataStr).format(patten)
})

//图片预览插件
import VuePreview from 'vue-preview'
 
// defalut install
Vue.use(VuePreview)


import VueResource from 'vue-resource'
Vue.use(VueResource)



Vue.http.options.root='http://vue.studyit.io'//http请求头部
Vue.http.options.emulateJSON=true//设置post的数据格式

// import { Header,Swipe, SwipeItem ,Button } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

var vm=new Vue({
    el:'#app',
    
    render:c=>c(app),
    router,
    store
})