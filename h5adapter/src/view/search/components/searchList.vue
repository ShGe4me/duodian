<template>
    <div class='search-list'>
        <div v-for="(item,index) in searchList" :key="index">{{item.suggestedKeyword}}</div>
    </div>
</template>
<script>
export default {
    props:{
        searchList:Array
    }
}
</script>
<style lang='scss'>
.search-list{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:50px;
    background: #fff;
    z-index:0;
    div{
        height:50px;
        line-height: 50px;
        padding-left:20px;
    }
}
</style>
