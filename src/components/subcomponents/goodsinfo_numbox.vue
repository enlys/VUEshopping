<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" @change="countchanged" ref="numbox"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
    mounted(){
        mui(".mui-numbox").numbox()
        
    },
    props:["max"],
    watch:{
        'max':function(newval,oldval){
            mui(".mui-numbox").numbox().setOption('max',newval);
        }
    },
    methods:{
        countchanged(){
           // console.log(this.$refs.numbox.value);
            this.$emit("getcount",parseInt(this.$refs.numbox.value))
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
