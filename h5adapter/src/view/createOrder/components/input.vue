<template>
    <form>
        <label>
            <span>联系人</span>
            <input type="text" placeholder="请输入收货人姓名">
        </label>
        <label>
            <span>手机号</span>
            <input type="text" placeholder="请输入手机号">
        </label>
        <div>
            <span>地址</span>
            <span>{{gps_address}}</span>
        </div>
        <label class='four'>
            <span>详细地址</span>
            <input type="text" placeholder="请输入详细地址">
        </label>
    </form>
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState('posi',['gps_address'])
    }
}
</script>
<style lang='scss' scoped>
form{
    width:100%;
    display:flex;
    flex-direction: column;
    background: #fff;
    >div{
        width:100%;
        height:50px;
        background: #f4f4f4;
        align-items: center;
        display: flex;
        span{
            padding-left:20px;
        }
    }
    label{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        border-top:1px solid #ccc;
        padding-left:20px;
        input{
            padding-left:20px;
            border:0;
            outline:0;
        }
    }
    .four{
        width:100%;
        padding-top:10px;
        background-image: url(https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png
        );
        background-color: #fff;
        background-repeat: repeat-x;
        background-position: top left;
        background-size: auto 2px;
        }
}
</style>
