<template>
    <div class="menu pt5 pb5">
        <a href="javascript:;" v-for="item in menuArr" :key="item.id" class="mt6 mb6">
            <img :src="item[url]" alt="">
            <p>{{item[title]}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        props:['menuArr','title','url']
    }
</script>

<style lang="scss" scoped>
@import "@/static/scss/demo.scss";
.menu{
    width: 100%;
    height: auto;
    a{
        color: #000;
        display: inline-block;
        width: 20%;
        text-align: center;
        img{
            width: 80%;
        }
    }
}

</style>