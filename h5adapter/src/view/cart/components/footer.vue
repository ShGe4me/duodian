<template>
    <div class="total border-1px border-t">
        <div class="count">
            <div class="orange">
                合计：
                <sup>¥</sup>
                <strong>{{price.toFixed(2)}}</strong>（不含运费）
            </div>
            <div>促销已抵扣金额：¥0.00</div>
        </div>
        <span
            class="orangebtn J_Pay J_ClickTrace"
            data-storeid="206"
            data-erpstorediscountprice="358"
            data-allcount="1"
            data-num="1"
            data-traceevent="点击去结算"
            @click="goOeder"
        >选好了</span>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState('cart',['price'])
        },
        methods:{
            goOeder(){
                if(this.price *1 ===0){
                    alert('你还没有购物')
                }else{
                    this.$router.push('/addOrder')
                }
               
            }
        }
    }
</script>

<style lang="scss" scoped>
.total {
    display: block;
    padding: 10px;
    color: grey;
    font-size: 12px;
    position: relative;
    background: #fff;
    .count {
            position: relative;
            .orange {
                font-size: 14px;
                margin-bottom: 5px;
                color: #ff712b;
                font-weight: 800;
                }
    }
    .orangebtn {
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -20px;
        overflow: hidden;
        cursor: pointer;
        background: #ff712b;
        padding: 10px 15px;
        color: #eee;
    }
}
</style>