<template>
    <div>
        <!-- 轮播图 -->
   <swiper :lunbotulist="lunbotulist" :isfull="true"></swiper>
<!-- 九宫格 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                        <a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 

        <h3>home</h3>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return{
            lunbotulist:[{img:'https://img12.360buyimg.com/da/jfs/t1/44984/17/115/97298/5cd298aaE58eade97/f8c2bd85ab16864c.jpg!q90.webp',url:"www.baidu.com"},
            {img:'https://img14.360buyimg.com/da/jfs/t1/40168/2/6769/98325/5cd4ddd1Edf3acb42/38bc89673ac5ebc1.jpg!q90.webp',url:"www.imooc.com"},
            {img:'https://img10.360buyimg.com/da/jfs/t1/34562/16/8519/94596/5cd4ce7aEf47ab58d/349df81e25d946fc.jpg!q90.webp',url:"www.bilibili.com"},
            
            ],
        }
    },
    created(){
        this.getLunbotn();
    },
    methods:{
        getLunbotn(){
        /*    this.$http.get('api/getlunbo').then(result=>{
                console.log(result.body);
            })*/
        }
    },
    components:{
        swiper
    }
    
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    // .mint-swipe-item:nth-child(3){
    //     background-color: aquamarine;
    // }
    //  .mint-swipe-item:nth-child(1){
    //     background-color:darkgreen;
    // }
    //  .mint-swipe-item:nth-child(2){
    //     background-color:darksalmon;
    // }
    .mint-swipe-item{
        &:nth-child(1){
            background-color: aquamarine;
        }
          &:nth-child(2){
            background-color: aquamarine;
        }
          &:nth-child(3){
            background-color: aquamarine;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: 0;
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-media.mui-col-xs-4.mui-col-sm-4{
    border: 0;

}

</style>


