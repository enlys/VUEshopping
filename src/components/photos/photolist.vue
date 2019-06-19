<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id==0?'mui-active':'']"
            v-for="item in cates"
            :key="item.id"
            @tap="getphotolist(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表 -->
    <ul class="photo-list">
      <router-link  v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: [
        //滑动条
        { title: "全部", id: 0 },
        { title: "推荐", id: 1 },
        { title: "体育", id: 2 },
        { title: "财经", id: 3 },
        { title: "热点", id: 4 },
        { title: "娱乐", id: 5 }
      ],
      list: [
        {
          id: 50,
          title: "超级可爱猫咪照片",
          img_url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1879390953,833739552&fm=26&gp=0.jpg",
          zhaiyao: "很多动物都成为了人们的宠物选择,什么新奇的种类在层出不穷,但是还有很多人会选择猫咪作为自己的陪伴对象,因为猫咪有很多的优点适合在家里饲养,还可以解除令人恐惧"
        },
        {
          id: 51,
          title: "猫咪",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557148191229&di=53984842a62b9170469ab2ca420f88c8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F16%2F20160416093446_FiURS.jpeg",
          zhaiyao: "很多动物都成为了人们的宠物选择,什么新奇的种类在层出不穷,但是还有很多人会选择猫咪作为自己的陪伴对象,因为猫咪有很多的优点适合在家里饲养,还可以解除令人恐惧"
        },
        {
          id: 52,
          title: "三只可爱的猫咪 枫叶 的日志 网易博",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557148191228&di=6352dc9f2823b20509055e8b5d5e3635&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201204%2F27%2F20120427222023_2hBnA.jpeg",
          zhaiyao: "很多动物都成为了人们的宠物选择,什么新奇的种类在层出不穷,但是还有很多人会选择猫咪作为自己的陪伴对象,因为猫咪有很多的优点适合在家里饲养,还可以解除令人恐惧"
        },
        {
          id: 53,
          title: "行为艺术的猫咪",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557148262848&di=d02eef19a1a6495489fb06d557d809d1&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1701843919%2C2169470429%26fm%3D214%26gp%3D0.jpg",
          zhaiyao: "很多动物都成为了人们的宠物选择,什么新奇的种类在层出不穷,但是还有很多人会选择猫咪作为自己的陪伴对象,因为猫咪有很多的优点适合在家里饲养,还可以解除令人恐惧"
        },
        {
          id: 54,
          title: "曼赤肯猫 小短腿 萌萌的 可爱 kitty cat 猫 ...",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557148191228&di=5060de23079c6965783dff096e0d280b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F19%2F20160519222447_yY5Uk.thumb.224_0.jpeg",
          zhaiyao: "很多动物都成为了人们的宠物选择,什么新奇的种类在层出不穷,但是还有很多人会选择猫咪作为自己的陪伴对象,因为猫咪有很多的优点适合在家里饲养,还可以解除令人恐惧"
        },
        {
          id: 55,
          title: "猫咪入夜后开始鬼哭狼嚎,难道是被情所困?",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557148191227&di=86266bab94d5e082ec67ccbe0799db85&imgtype=0&src=http%3A%2F%2Fimg5.goumin.com%2Fattachments%2Fbbs%2F201803%2F13%2F201803131339327545.jpg",
          zhaiyao: "很多动物都成为了人们的宠物选择,什么新奇的种类在层出不穷,但是还有很多人会选择猫咪作为自己的陪伴对象,因为猫咪有很多的优点适合在家里饲养,还可以解除令人恐惧"
        }
      ]
    };
  },
  
  mounted() {
    //当组件中的DOM结构渲染好会执行这个生命周期函数
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getcategory();
   
  },
  methods: {
    getcategory() {
      // this.$http.get('api/getnewlist').then(result=>{
      //         if(result.body.status===0){
      //             this.newslist=result.body.message;
      //         }
      // })
    },
    getphotolist(cateid) {
      /*this.$http.get('api/getnewlist/'+cateid).then(result=>{
              if(result.body.status===0){
                  this.newsinfo=result.body.message;

              }
              else{
                  Toast('获取失败！')

              }
                
            })*/
    }
  }
};
</script>
<style lang="scss" scoped>
// 去除滑动警告
* {
  touch-action: pan-y; //用于指定用户操作
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
     
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      max-height: 84px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size: 13px;
      }
    }
  }
}
</style>
