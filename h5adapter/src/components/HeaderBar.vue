<template>
    <header class='public-header'>
        {{title}}
        <span @click="$router.back()"><i class="icon iconfont icon-angle-left"></i></span>
    </header>
</template>
<script>
export default {
    props:{
        title:String
    },
    methods:{
       
    }
}
</script>
<style lang='scss'>
.public-header{
    width:100%;
    line-height: 44px;
    text-align: center;
    span{
        width:30px;
        height:30px;
        background: #333;
        border-radius:50%;
        text-align: center;
        line-height: 30px;
        position: absolute;
        left:15px;
        top:5px;
        .icon{
            font-size:20px;
            color:#fff;
        }
    }
}
</style>


