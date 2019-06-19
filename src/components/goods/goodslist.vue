<template>
    <div class="goods-list">
      <!-- <router-link class="goods-item" v-for="item in goodlist" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
          <img :src="item.imgulr" >
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥{{item.now}}</span>
                  <span class="old">￥{{item.old}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩{{item.stock}}件</span>
              </p>
          </div>
      </router-link> -->
       <div class="goods-item" v-for="item in goodlist" :key="item.id" @click="goinfo(item.id)">
          <img :src="item.imgulr" >
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥{{item.now}}</span>
                  <span class="old">￥{{item.old}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩{{item.stock}}件</span>
              </p>
          </div>
      </div>
      <mt-button type="danger" size="large" @click="add">加载更多</mt-button>

    </div>
</template>
<script>
export default {
    data(){
        return{
            pageindex:1,
            goodlist:[
                {
                    id:37,title:"华为 HUAWEI P30 全面屏全网通双4G手机",addtime:"2019-04-01",
                    zhaiyao:"华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+128GB天空之境全网通双4G手机",imgulr:"https://m.360buyimg.com/babel/jfs/t1/20382/39/12581/229510/5c98ccd9E16dec112/8ecf0cb424de1349.jpg!q70.jpg",now:3899,old:3899,stock:60
                },
                  {
                    id:38,title:"华为 HUAWEI P30 Pro 全面屏全网通双4G手机",addtime:"2019-04-01",
                    zhaiyao:"华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+128GB亮黑色全网通版双4G手机",imgulr:"https://img14.360buyimg.com/n5/s54x54_jfs/t1/32211/9/7668/128927/5c98c8e4Ed0c89d28/e5c2821f1192497a.jpg",now:5488,old:5488,stock:60
                },
                  {
                    id:39,title:"华为 HUAWEI Mate20X 麒麟980芯片",addtime:"2019-04-01",
                    zhaiyao:"华为 HUAWEI Mate20X 麒麟980芯片全面屏超微距影像超大广角徕卡三摄6GB+128GB宝石蓝全网通版双4G游戏手机",imgulr:"https://img14.360buyimg.com/n5/s54x54_jfs/t26554/49/982527056/166996/2cb10b6f/5bbec121N567c43b5.jpg",now:4499,old:5499,stock:60
                },
                  {
                    id:40,title:"华为 HUAWEI P20 AI智慧徕卡双摄全面屏游戏手机",addtime:"2019-04-01",
                    zhaiyao:"华为 HUAWEI P20 AI智慧徕卡双摄全面屏游戏手机 6GB+64GB 亮黑色 全网通移动联通电信4G手机 双卡双待",imgulr:"https://img10.360buyimg.com/n5/s54x54_jfs/t17590/198/1213299293/129603/eff13876/5ac1bf5cNbc4fe8be.jpg",now:3088,old:3788,stock:60
                },
                  {
                    id:41,title:"小米9 4800万超广角三摄 骁龙855 全网通4G 双卡双待",addtime:"2019-04-01",
                    zhaiyao:"小米9 4800万超广角三摄 8GB+128GB全息幻彩蓝 骁龙855 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机",imgulr:"https://img10.360buyimg.com/n5/s54x54_jfs/t1/30858/32/2918/209997/5c6fcc52Ed2f6e122/d05ed0ce052a5a0c.jpg",now:3299,old:3299,stock:60
                },
                  {
                    id:42,title:"小米9 SE 4800万超广角三摄 骁龙712 水滴全面屏 游戏智能拍照手机",addtime:"2019-04-01",
                    zhaiyao:"小米9 SE 4800万超广角三摄 骁龙712 水滴全面屏 游戏智能拍照手机 6GB+64GB 全息幻彩蓝 全网通4G双卡双待",imgulr:"https://img13.360buyimg.com/n5/s54x54_jfs/t1/32838/12/2646/47222/5c6d0161E581e8c4b/5e35b24d32855205.jpg",now:1999,old:1999,stock:60
                },
                  {
                    id:43,title:"小米 红米Redmi Note7 幻彩渐变AI双摄",addtime:"2019-04-01",
                    zhaiyao:"小米 红米Redmi Note7 幻彩渐变AI双摄 4GB+64GB 梦幻蓝 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机",imgulr:"https://img13.360buyimg.com/n5/s54x54_jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg",now:1199,old:1499,stock:60
                },
                  {
                    id:44,title:"Apple iPhone XS Max (A2104) 256GB  全面屏全网通双4G手机",addtime:"2019-04-01",
                    zhaiyao:"Apple iPhone XS Max (A2104) 256GB 深空灰色 移动联通电信4G手机 双卡双待",imgulr:"https://img13.360buyimg.com/n5/s54x54_jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg",now:9499,old:9799,stock:60
                },
                  {
                    id:45,title:"Apple iPhone XS  全面屏全网通双4G手机",addtime:"2019-04-01",
                    zhaiyao:"Apple iPhone XS  (A2104) 64GB 金色 移动联通电信4G手机 双卡双待",imgulr:"https://img10.360buyimg.com/n5/s54x54_jfs/t1/4460/2/3458/153299/5b997bf0Ed101778b/2361563781a99acb.jpg",now:8399,old:8999,stock:60
                },
            ]


        }
    },
    methods:{
        getgoodslist(){
           /* this.$http.get('api/getgoods?pageindex="+this.pageindex).then(result=>{
              if(result.body.status===0){
                  this.newsinfo=result.body.message;

              }
              else{
                  Toast('获取失败！')

              }
                
            })*/
            console.log(31313);
        },
        add(){
            this.pageindex++;
            this.getgoodslist();
        },
        goinfo(id){
            //this.$router.push("/home/goodsinfo/"+id)
             this.$router.push({ name: 'goodsinfo', params: { id }})

        }
    }
    
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 230px;
        img{
            width: 100%;
           
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color:#eee;
            p{margin: 0;
            padding: 5px;
            
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>
