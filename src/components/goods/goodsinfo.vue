<template>
    <div class="goodsinfo">
        <transition
        @before-enter="beforeenter"
        @enter="enter"
        @after-enter="afterenter"
        >
             <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
       
        <!-- 轮播图区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					  <swiper :lunbotulist="img" :isfull="false"></swiper>
					</div>
				</div>
			</div>
          <!-- 购买区域 -->
          <div class="mui-card">
				<div class="mui-card-header">{{goods.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                           市场价：<del>￥{{goods.old}}</del>&nbsp;&nbsp;销售价：<span class="now">￥{{goods.now}}</span>
                        </p>
                        <p>购买数量:<numbox @getcount="getselectecount" :max="goods.stock"></numbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                             <mt-button type="danger" size="small" @click=" addshopcar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
				
			</div>
            <!-- 商品参数区域 -->
            <div class="mui-card">
				<div class="mui-card-header">参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>货号：{{goods.goodsid}}</p>
                        <p>库存情况：{{goods.stock}}件</p>
                        <p>上架时间：{{goods.addtime}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                     <mt-button type="primary" size="large" plain @click="godesc(id)">图文介绍</mt-button>
                             <mt-button type="danger" size="large" plain @click="gocomment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return{
             id:this.$route.params.id,
             ballflag:false,
            img:[
                {img:"https://m.360buyimg.com/babel/jfs/t1/20382/39/12581/229510/5c98ccd9E16dec112/8ecf0cb424de1349.jpg!q70.jpg"},
            {img:"https://m.360buyimg.com/babel/jfs/t1/4730/11/4020/215051/5b9b2d9dE84edba01/45602b8f08b313ec.jpg!q70.jpg"},
            {img:"https://m.360buyimg.com/babel/jfs/t1/4460/2/3458/153299/5b997bf0Ed101778b/2361563781a99acb.jpg!q70.jpg"}
            ],
             goods: {
                    id:38,title:"华为 HUAWEI P30 全面屏全网通双4G手机",addtime:"2019-04-01",goodsid:"AOIASJBH15616313238",
                    zhaiyao:"华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+128GB天空之境全网通双4G手机",imgulr:"https://m.360buyimg.com/babel/jfs/t1/20382/39/12581/229510/5c98ccd9E16dec112/8ecf0cb424de1349.jpg!q70.jpg",now:3899,old:3899,stock:99
                },
                selectcount:1

        }
    },
    methods:{
        godesc(id){
            this.$router.push({ name: 'goodsdesc', params: { id }})

        },
        gocomment(id){
            this.$router.push({ name: 'goodscomment', params: { id }})
        },
        addshopcar(){
            this.ballflag=!this.ballflag;
            var goodsinfo={id:this.id,count:this.selectcount,price:this.goods.now,selected:true}
            this.$store.commit("addtocar",goodsinfo);
        },
        beforeenter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            
            //获取小球和徽标的位置
            const ballold=this.$refs.ball.getBoundingClientRect();
            const badgenow=document.getElementById('badge').getBoundingClientRect();
            const xdist=badgenow.left-ballold.left;
            const ydist=badgenow.top-ballold.top;
      
             el.style.transform = `translate(${xdist}px, ${ydist}px)`;
            el.style.transition='all 0.5s cubic-bezier(.4,-0.3,1,.68)';
            done();
        },
        afterenter(el){
            this.ballflag=!this.ballflag;
        },
        getselectecount(count){
            this.selectcount=count;
            console.log("asfdasda"+this.selectcount);
        }

    },
    components:{
        swiper,numbox
    }
    
}
</script>
<style lang="scss" scoped>
.goodsinfo{
    background-color: #eee;
    overflow: hidden;
    .now{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
}
.mui-card-footer{
    display: block;
    button{
        margin: 10px 0;
    }
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background-color: red;
    z-index: 99;
    top:409px;
    left: 137px;
   
}

</style>
