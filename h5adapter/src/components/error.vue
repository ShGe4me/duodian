<template>
    <div class="dialog" v-if="time>0">
        {{message}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:'错误信息',
            time:3,
            interval:''
        }
    },
    watch:{
        time(newVal){
            if(newVal<0){
                this.$destroy()
            }
        }
    },
    mounted(){
        this.interval = setInterval(() =>{
            this.time-=1;
        },1000)
    },
    methods:{
        show(val){
            this.message = val;
        }
    }
}
</script>
<style lang='scss'>
.dialog{
    width:100%;
    height:50px;
    background: #ff6600;
    color:#fff;
    line-height: 50px;
    text-align: center;
    position: absolute;
    left:0;
    top:50px;
}
</style>
