<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.ciick">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
           <h1>{{item.zhaiyao}}</h1>
            <!-- <p class="mui-ellipsis"> <span>发表时间：{{item.addtime |dataFormat()}}</span> -->
            <p class="mui-ellipsis"> <span>发表时间：{{item.addtime }}</span>
            <span>点击：{{item.click}}次</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import{Toast} from "mint-ui"
export default {
     data(){
        return{
            newslist:[
                {id:1,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2910014142,2007755718&fm=27&gp=0.jpg',title:"木屋",addtime:"2018-06-06 06:06:06",click:18,zhaiyao:"想要这样一间小木屋，夏天挫冰吃"},
                 {id:2,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2910014142,2007755718&fm=27&gp=0.jpg',title:"远眺",addtime:"2018-06-06 07:06:06",click:82,zhaiyao:"烤炉模式的城，到黄昏，如同打翻的"},
                  {id:3,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2910014142,2007755718&fm=27&gp=0.jpg',title:"木屋",addtime:"2018-06-06 04:06:06",click:41,zhaiyao:"想要这样一间小木屋，夏天挫冰吃瓜"},
                   {id:4,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2910014142,2007755718&fm=27&gp=0.jpg',title:"远眺",addtime:"2018-06-06 03:06:06",click:51,zhaiyao:"静静的看这个世界，最后终于疯了"},
                    {id:5,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2910014142,2007755718&fm=27&gp=0.jpg',title:"木屋",addtime:"2018-06-06 02:06:06",click:35,zhaiyao:"想要这样一间小木屋，夏天挫冰吃瓜"},
                     {id:6,img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2910014142,2007755718&fm=27&gp=0.jpg',title:"远眺",addtime:"2018-06-06 01:06:06",click:65,zhaiyao:"能和心爱的人一起睡觉，是件幸福"},
           
            
            
            ],
        }
    },
    created(){
        this.getnewslist();
    },
    methods:{
        getnewslist(){
         /* this.$http.get('api/getnewlist').then(result=>{
              if(result.body.status===0){
                  this.newslist=result.body.message;

              }
              else{
                  Toast('获取失败！')

              }
                
            })*/
        }
    }
    
}

</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        
    }
   
}
</style>
