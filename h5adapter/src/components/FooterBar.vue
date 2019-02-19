<template>
    <footer class="footers">
        <router-link to="/home" active-class="active">
            配送到家
        </router-link>
        <router-link to="/sorts" active-class="active">
            分类
        </router-link>

        <router-link to="/cart" active-class="active">
        <span class="count">{{count.count}}</span>
            购物车
        </router-link>
        <router-link to="/my" active-class="active">
            我的
        </router-link>
     </footer>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        computed:{
            ...mapGetters('cart',['count'])
        }
    }
</script>

<style lang="scss" scoped>
@import '@/static/scss/demo.scss';
.footers{
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 50px;
    flex-shrink: 0;
    border-top: 1px solid #ccc;
    background: #eee;
    a{
        font-size: 14px;
        display:inline-block;
        width: 25%;
        height: 100%;
        text-align: center;
        color: #000;
        &.active{
        color: red;
        }
    }
    .count{
        position: relative;
        display: inline-block;
        top: -15px;
        right: -50px;
        color: #fff;
        background: red;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
    }
}
</style>