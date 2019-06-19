<template>
<div class="cmt">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入BB内容（最多120字）" maxlength="120"  v-model="msg"></textarea>
   <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>
   <div class="cmt-list">
       <div class="cmt-item" v-for="(item, i) in  commentlist" :key="item.addtime">
           <div class="cmt-title">
               第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.addtime}}
           </div>
           <div class="cmt-body">
              {{item.content==='undefined'?'此用户很懒':item.content}}
           </div>
       </div>   
   </div>
   <mt-button type="danger" size="large" plain @click="getmove">加载更多</mt-button>
       </div>
    
</template>
<script>
 import{Toast} from "mint-ui"
export default {
   
     data(){
        return{
            pageindex:1,
            msg:'',
            commentlist:[{
                addtime:'2018-05-06 15:14:35',
                username:"木屋",
                content:'让生活充满阳光与原木的芳香木结构别墅是以天然木材为结构材料的建筑，亲和自然，是最适合人类居住的建筑。木质别墅内富含的芬多精与负离子被誉为空气维他命，能够清除空气中的细菌，增强免疫力，对人体提高记忆力、降低血压、使人心情舒爽等有明显功效。.'
            },
            {
                addtime:'2018-01-06 15:14:35',
                username:"木屋",
                content:'让生活充满阳光与原木的芳香木结构别墅是以天然木材为结构材料的建筑，亲和自然，是最适合人类居住的建筑。木质别墅内富含的芬多精与负离子被誉为空气维他命，能够清除空气中的细菌，增强免疫力，对人体提高记忆力、降低血压、使人心情舒爽等有明显功效。.'
            },
            {
                addtime:'2018-06-06 15:14:35',
                username:"木屋",
                content:'让生活充满阳光与原木的芳香木结构别墅是以天然木材为结构材料的建筑，亲和自然，是最适合人类居住的建筑。木质别墅内富含的芬多精与负离子被誉为空气维他命，能够清除空气中的细菌，增强免疫力，对人体提高记忆力、降低血压、使人心情舒爽等有明显功效。.'
            },
            {
                addtime:'2018-09-06 15:14:35',
                username:"木屋",
                content:'as'
            },
            ]
        }
    } ,
    created(){
        this.getnewsinfo();
    },
    methods:{
        getnewsinfo(){
        /* this.$http.get("api/getcomments/"+this.id+"?pageindex="+this. pageindex).then(result=>{
              if(result.body.status===0){
                 // this.commentlist=result.body.message;
                 this.commentlist=this.comments.concat(result.body.message)//追加数据

              }
              else{
                  Toast('获取失败！')

              }
                
            })*/
        },
       postcomment(){
           if(this.msg.length==0){
               return Toast("评论不能为空！");
           }
           var cmt={username:'匿名用户',
                  addtime:Date.now(),
                  content:this.msg.trim()
                  }
                  this.commentlist.unshift(cmt);
                  this.msg='';

          /* this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.msg.trim()}).then(function(result){
              if(result.body.status===0){
                  var cmt={username:'匿名用户',
                  addtime:Date.now(),
                  content:this.msg.trim()
                  }

              }
              else{
                  Toast('发表失败！')

              }
           })*/
       },
        getmove(){
            this.pageindex++;
            this.getnewsinfo();
        }
    },
    props:["id"]//父组件向子组件传值

    
}
</script>
<style lang="scss" scoped>
.cmt{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;


    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 11px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
                .cmt-body{
                     line-height: 35px;
                     text-indent: 2em;
                }
            }
        }

    }
}
</style>


