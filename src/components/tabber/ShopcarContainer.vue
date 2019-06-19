<template>
     <div class="shopcar">
         <!-- 商品区域 -->
        <div class="goos-list">
        <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<mt-switch v-model="$store.getters.getgoodsselected[item.id]"
                        @change="selectedchange(item.id,$store.getters.getgoodsselected[item.id])"
                        ></mt-switch>
                        <img :src="item.imgulr" >
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">{{item.now}}</span>
                               <numbox :initcount="$store.getters.getgoodscount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <!-- 结算区域 -->
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)</p>
                            <p>已勾选 <span>{{$store.getters.getgoodscountandmoney.count}}</span> 件，总价￥ <span>{{$store.getters.getgoodscountandmoney.money}}</span>元</p>
                        </div>
                        <div>
                         <mt-button type="danger">去结算</mt-button>
                    </div>
					</div>
                    
                   
				</div>
			</div>
       <p>{{$store.getters.getgoodsselected}}</p>
    </div>
</template>
<script>
console.log(this)
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return{
            goodslist:[]
        }
    },
    created(){
        this.getgoodlist();
    },
    methods:{
        getgoodlist(){
            var idea=[]
            this.$store.state.car.forEach(item=>idea.push(item.id));
            if(idea.length<=0){
                return;
            }

            // this.$http.get('api/getnewlist/'+idea.join(",")).then(result=>{
      //         if(result.body.status===0){
      //             this.newslist=result.body.message;
      //         }
      // })
    //   var list=[{
    //       id:37,title:"华为 HUAWEI P30 4G手机",now:3899,src="https://m.360buyimg.com/babel/jfs/t1/20382/39/12581/229510/5c98ccd9E16dec112/8ecf0cb424de1349.jpg!q70.jpg"
    //   }]
      this.goodslist=[{
          id:37,title:"华为 HUAWEI P30 4G手机",now:3899,imgulr:"https://m.360buyimg.com/babel/jfs/t1/20382/39/12581/229510/5c98ccd9E16dec112/8ecf0cb424de1349.jpg!q70.jpg"
      }];

        },
        remove(id,index){
        //点击实现删除商品
       this.goodslist.splice(index,1)
        this.$store.commit('removecar',id)
        },
        selectedchange(id,val){
            console.log(id,val)
              this.$store.commit('updategoodsselected',{id,selected:val}) 
            
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>

.shopcar{
    background-color: #eee;
    overflow: hidden;
    .goos-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color: red;
                font-weight: boid;
            }
        }
    }
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        color: red;
        font-size: 16px;
    }
}
</style>


