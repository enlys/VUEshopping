<template>
    <div class="newsinfo">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.addtime}}</span>
            <span>点击：{{ newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content">



        </div>
                    <!-- 评论区域 -->
            <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import{Toast} from "mint-ui"
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{
                addtime:'2018-07-06 15:14:35',
                title:"想要这样一间小木屋，夏天挫冰吃瓜",
                click:54,
                content:'让生活充满阳光与原木的芳香木结构别墅是以天然木材为结构材料的建筑，亲和自然，是最适合人类居住的建筑。木质别墅内富含的芬多精与负离子被誉为空气维他命，能够清除空气中的细菌，增强免疫力，对人体提高记忆力、降低血压、使人心情舒爽等有明显功效。.'
            }
        }
    } ,
    created(){
        this.getnewsinfo();
    },
    methods:{
        getnewsinfo(){
        /* this.$http.get('api/getnewlist/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.newsinfo=result.body.message;

              }
              else{
                  Toast('获取失败！')

              }
                
            })*/
        }
    },
    components:{//用来注册子组件的
    "comment-box":comment

    }
    
}
</script>
<style lang="scss" scoped>//注意这样设置ajax获取到的页面样式设置是无效的
.newsinfo{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: aquamarine;
    }
    .subtitle{
        font-size: 13px;
        color: burlywood;
        display: flex;
        justify-content: space-between;

    }
    .content{
        img{
            width: 100%;
        }
    }
}

</style>

