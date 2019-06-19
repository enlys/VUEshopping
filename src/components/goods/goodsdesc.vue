<template>
  <div class="desc">
      <h3>{{desc.title}}</h3>
      <hr>
      <div class="content" v-html="desc.zhaiyao"></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
             id:this.$route.params.id,
            desc:{
                title:"华为 HUAWEI P30 全面屏全网通双4G手机",
                zhaiyao:"摄像头总数：四摄像头（后三）<br>后置摄像头：4000万像素+1600万像素+800万像素高清级像素<br>前置摄像头：3200万像素高清级像素高像素自拍手机<br>传感器类型：CMOS<br>闪光灯：LED补光灯<br>光圈：后置f/1.8+f/2.2+f/2.4，前置f/2.0<br>视频拍摄：后置 4K（3840×2160）视频录制；前置 FHD+（2160×1080）视频录制<br>拍照功能：<br>后置：自动对焦（激光对焦/相位对焦/反差对焦），AIS防抖，双景录像(功能随OTA升级支持)，超大广角，超微距，大光圈虚化，超级夜景，人像模式，专业模式，慢动作，全景模式，黑白艺术，流光快门，HDR，延时摄影，智能滤镜，水印，文档矫正，AI摄影大师，动态照片，4D预测追焦，熄屏快拍，笑脸抓拍，声控拍照，定时拍照，连拍<br>前置：人像模式，全景模式，趣AR，延时摄影，智能滤镜，水印，笑脸抓拍，自拍镜像，声控拍照，定时拍照"
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.desc{
    padding: 5px;
    h3{
        color: aquamarine;
        font-size: 16px;
        text-align: center;
        margin: 10px 0;
    }
    .content{
    
    }
}
</style>
