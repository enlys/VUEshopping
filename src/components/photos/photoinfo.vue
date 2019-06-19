<template>
    <div  class="photoinfo">
          <h3 class="title">{{ ptotoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ ptotoinfo.addtime}}</span>
            <span>点击：{{  ptotoinfo.click}}次</span>
        </p>
        <hr>

  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

       <div class="content"  v-html=" ptotoinfo.content">   </div> 
        <comment-box :id="this.id"></comment-box>

       </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
             id:this.$route.params.id,
              ptotoinfo:{
                addtime:'2018-07-06 15:14:35',
                title:"想要这样一间小木屋，夏天挫冰吃瓜",
                click:54,
                content:'让生活充满阳光与原木的芳香木结构别墅是以天然木材为结构材料的建筑，亲和自然，是最适合人类居住的建筑。木质别墅内富含的芬多精与负离子被誉为空气维他命，能够清除空气中的细菌，增强免疫力，对人体提高记忆力、降低血压、使人心情舒爽等有明显功效。.'
            }
            , slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
        }
    },
    components:{//用来注册子组件的
    "comment-box":comment

    },
    created(){
        this.getinfo();
    },
    methods:{
        getinfo(){
           /* this.$http.get('api/getnewlist/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.newsinfo=result.body.message;

              }
            })*/
        },
        handleClose () {
        console.log('close event')
      }
    }
    
}
</script>
<style lang="scss" scoped>
.photoinfo{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: #26A2FF;
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
