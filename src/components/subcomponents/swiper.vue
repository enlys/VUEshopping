<template>
    <div>
        <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
     
     <img :src="item.img" alt="" :class="{'full':isfull}">

    </mt-swipe-item>
</mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
props:["lunbotulist","isfull"],
    methods:{
        
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
        text-align: center;
       
        img{
           
            height: 100%;
        }
    }
}

.full{
    width: 100%;
}
</style>
