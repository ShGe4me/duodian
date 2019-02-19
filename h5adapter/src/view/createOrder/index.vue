<template>
    <div class='page order-page'>
        <header-bar title="订单确认" class='order-header'></header-bar>
        <Scroll class='order-content'>
            <Input/>
            <div class='order-duodian'>
                <p>
                    <span>配送方式</span>
                    <span>多点配送<i class="icon iconfont icon-angle-right"></i></span>
                </p>
                <p>
                    <span>配送时间</span>
                    <span>明天(周五),09:00-21:00<i class="icon iconfont icon-angle-right"></i></span>
                </p>
            </div>
            <h2 class='h2'>
                <span>在线支付</span>
                <i class="icon iconfont icon-xuanzhong-01"></i>
            </h2>
            <h3 class='h3'>
                <span>优惠券/优惠码</span>
                <span>0张可用<i class="icon iconfont icon-angle-right"></i></span>
            </h3>
            <div class='order-address'>
                <span>备注</span>
                <input type="text" value="填写安全存放地址，请按门铃等配送相关要求">
            </div>
            <div class='order-list'>
                <h4>订单价格</h4>
                <ul>
                    <li>
                        <span>商品金额</span>
                        <span>￥{{price}}</span>
                    </li>
                    <li>
                        <span>促销优惠</span>
                        <span>-￥0.00</span>
                    </li>
                    <li>
                        <span>包装费</span>
                        <span>+￥3.00</span>
                    </li>
                    <li>
                        <span>包装费减免</span>
                        <span>-￥3.00</span>
                    </li>
                    <p>满69元免服务费 <i class="icon iconfont icon-shoucang1"></i></p>
                </ul>
                <h5>
                    <span>实际支付</span>
                    <span>{{price}}</span>
                </h5>
            </div>
            <div class='order-img'>
                <Scroll :scrollX="true">
                    <ul>
                        <li><img src="https://img.dmallcdn.com/20180502/30db73bf-1f59-4768-804a-542f0aadf747_200x200" alt=""><b>1</b></li>
                        <li><img src="https://img.dmallcdn.com/20171127/2bfa282e-6094-42fc-b8fa-ea1fdf6d1371_200x200" alt=""><b>1</b></li>
                        <li><img src="https://img.dmallcdn.com/20170901/9e445e18-8050-4249-ab50-687147de71ad_200x200" alt=""><b>1</b></li>
                    </ul>
                </Scroll>
                <span>共3件<i class="icon iconfont icon-angle-right"></i></span>
            </div>
            <h5>
                <span>发票</span>
                <span>如何开发票？</span>
            </h5>
            <h5>
                <span>如遇缺货</span>
                <span>请选择<i class="icon iconfont icon-angle-right"></i></span>
            </h5>
        </Scroll>
        <div class='order-footer'>
            <div>
                
                合计 <sup>￥</sup><span>{{price}}</span>
            </div>
            <button>提交订单</button>
        </div>
    </div>
</template>
<script>
import Input from './components/input';
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState('cart',['price'])
    },
    components:{
        Input
    }
}
</script>
<style lang='scss' scoped>
.order-content{
    width:100%;
    flex: 1;
    overflow: hidden;
    h5{
        margin-top:10px;
        height:45px;
        background: #fff;
        display: flex;
        padding:0 20px;
        justify-content: space-between;
        align-items: center;
    }
}
.order-header{
    height: 45px;
    background: #fff;
}
.order-page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
}
.order-duodian{
    width:100%;
    margin-top:10px;
    background: #fff;
    p{
        width:100%;
        height:45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
        border-bottom:1px solid #ccc;
    }
}
.h2,.h3{
    margin-top:10px;
    width:100%;
    height:45px;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
}
.h2{
    .icon{
        color:#ff6600;
        font-size:20px;
    }
}
.order-address{
    margin-top:10px;
    width:100%;
    height:45px;
    display: flex;
    background: #fff;
    align-items: center;
    padding:0 20px;
    input{
        flex:1;
        padding-left:10px;
        border:0;
        outline:0;
    }
}
.order-list{
    width:100%;
    margin-top:10px;
    background: #fff;
    h4{
        height:45px;
        line-height: 45px;
        padding-left:20px;
        border-bottom:1px solid #ccc;
    }
    h5{
        height:45px;
        padding:0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top:1px solid #ccc;
        span:nth-child(2){
            color:#ff6600;
        }
    }
    ul{
        padding:10px 20px;
        li{
            display: flex;
            justify-content: space-between;
        }
        p{
            color:#c8cccd;
        }
    }
}
.order-img{
    width:100%;
    margin-top:10px;
    display: flex;
    padding:10px 20px;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    ul{
        display: flex;
        li{
            width:60px;
            height:60px;
            padding:6px;
            position: relative;
            border:1px solid #f0f0f0;
            margin-right:10px;
            img{
                width:100%;
                height:100%;
            }
            b{
                width:15px;
                height:15px;
                font-size:12px;
                color:#FF712B;
                border:1px solid #FF712B;
                border-radius:50%;
                text-align: center;
                line-height: 15px;
                position: absolute;
                right:-5px;;
                top:-5px;
            }
        }
    }
}
.order-footer{
    width:100%;
    height:45px;
    display: flex;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        padding-left:20px;
        color:#ff6600;
        display: flex;
        align-items: center;
        sup{
            margin-left:10px;
        }
        span{
            font-size:20px;
        }
    }
    button{
        width:100px;
        height:45px;
        border:0;
        outline:0;
        background: #ff6600;
        color:#fff;
    }
}
</style>
