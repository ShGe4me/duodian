<template>
  <div class="step">
    <div class="header-title">
      <h4>我的订单</h4>
      <div class="all-menu">
        <div class="right" href="javascript:;" data-traceevent="点击全部订单">全部订单</div>
        <span></span>
      </div>
    </div>
    <ul class='menu-car'>
      <li>
        <span class='icon iconfont icon-pay'></span>
        <span>待支付</span>
      </li>
      <li>
        <span class='icon iconfont icon-newcar'></span>
        <span>待发货</span>
      </li>
      <li>
        <span class='icon iconfont icon-oldcar'></span>
        <span>已发货</span>
     </li>
    </ul>
     <div class='bg'></div>
    <div class="my_zc">
      <h4>我的资产</h4>
      <ul class="my-zc_list">
        <li>
          <span>￥0.00</span>
          <span>余额</span>
        </li>
        <li>
          <span>0</span>
          <span>积分</span>
        </li>
        <li>
          <span>
              ￥0.00
              <b></b>
            </span>
          <span>卡包</span>
        </li>
        <li>
          <span>0</span>
          <span>优惠券</span>
        </li>
      </ul>
    </div>
    <div class='bg'></div>
    <div class="my_fw">
      <h4>我的服务</h4>
       <ul class="my_fw_list">
        <li>
          <img src="../../../static/images/QQ图片20181205205425.png"/>
          <span>会员中心</span>
          <span>会员有好礼</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205445.png"/>
          <span>收货地址</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205451.png"/>
          <span>帮助中心</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205457.png"/>
          <span>客服电话</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205502.png"/>
          <span>体验APP</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205506.png"/>
          <span>发票中心</span>
        </li> 
         <li>
          <img src="../../../static/images/QQ图片20181205205512.png"/>
          <span>绑卡</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205517.png"/>
          <span>自由购</span>
          <span>仅限App使用</span>
        </li>
        <li>
          <img src="../../../static/images/QQ图片20181205205523.png"/>
          <span>售后/退款</span>
        </li> 
         <li>
          <img src="../../../static/images/QQ图片20181205205529.png"/>
          <span>我想买的</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
.step {
  font-size: 16px;
  width: 100%;
  margin: 20px 0;

  .header-title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    display: flex;
    position: relative;
    h4 {
      margin-left: 10px;
    }
    .all-menu {
      display: flex;
      position: absolute;
      right: 10px;
      .right {
        margin-right: 5px;
      }
      span {
        position: relative;
        display: inline-block;
        font-size: 36px;
        border-width: 4px 4px 0 0;
        height: 18px;
        width: 18px;
        top: 14px;
        border-style: solid;
        transform: rotate(45deg);
        border-color: #c8cccd;
      }
    }
  }

  .menu-car {
    border-top: solid 1px #eee;
    display: flex;
    li {
      padding: 20px 0;
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      span {
        &:first-child {
          color: #ff712b;
        }
      }
    }
  }
  .bg {
    width: 100%;
    height: 15px;
    background: #eee;
  }
  .my_zc,
  .my_fw {
    width: 100%;
    background: #fff;
    height: auto;
    h4 {
      text-indent: 10px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 2px solid #eee;
    }
    .my-zc_list {
      margin: 20px 0;
      width: 100%;
      height: 60px;
      display: flex;
      li {
        width: 25%;
        text-align: center;
        span {
          height: 30px;
          line-height: 30px;
          display: inline-block;
          width: 100%;
          position: relative;
          b:after {
            content: "去充值";
            position: absolute;
            right: -20px;
            top: -15px;
            background-color: #eb2243;
            display: inline-block;
            white-space: nowrap;
            font-size: 14px;
            color: #fff;
            height: 20px;
            line-height: 20px;
            padding: 0 10px;
            border-radius: 10px 10px 10px 0;
          }
        }
      }
    }
    .my_fw_list {
      width: 100%;
      height: auto;
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        height: 65px;
        text-align: center;
        img {
          width: 30px;
          height: 30px;
          display: block;
          margin: 0 auto;
        }
        span {
          color: #666;
          font-size: 12px;
          display: block;
          &:nth-of-type(2) {
            font-size: 12px;
            color: #b2b2b2;
            display: block;
          }
        }
      }
    }
  }
}
</style>
