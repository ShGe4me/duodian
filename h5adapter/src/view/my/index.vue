<template>
  <div class="wrap">
    <section class='page-my'>
        <div id='headeraa'>
        <div class='top-box'>
          <div class='welcome'>Hello,{{user.name}}</div>
        </div>
        <div class="Discount" data-traceevent="点击线下优惠"><i class="Discount-img"></i></div>
      </div>
      <Title></Title>
    </section>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import Title from "./components/Title";
import {mapState} from 'vuex'
import FooterBar from '@/components/FooterBar'
export default {
  data() {
    return {};
  },
  
 components: {
    FooterBar,
    Title
   },
    computed:{
            ...mapState(['user'])
        },
        methods:{
            goLogin(){
                this.$router.push('/login')
            }
        }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.14rem;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y:scroll;
}

.page-my {
    width: 100%;
    
    overflow-x: hidden;
    #headeraa {
      flex-shrink: 0;
      width: 100%;
      background: url(https://static.dmall.com/kayak-project/usercenter/dist/usercenter/common/image/mine-top-banner-bg.png) center bottom no-repeat;
      height: 130px;
      position: relative;
      .welcome{
        font-size: 18px;
        padding-top: 20px;
      }
      .top-box {
        position: absolute;
        top: 50%;
        width: 80%;
        left: 10%;
        transform: translateY(-50%);
        color: #fff;
        min-height: 112px;
        z-index: 1;
        .login {
          display: inline-block;
          margin-top: 10px;
          font-size: 14px;
          color: #ff5700;
          background-color: #fff;
          height: 24px;
          line-height: 24px;
          border-radius: 24px;
          padding: 0 20px;
        }
      }
      .Discount {
        width: 104px;
        height: 25px;
        position: absolute;
        bottom: 30px;
        right: 30px;
        transform: translateY(-50%);
        padding-top: 30px;
        z-index: 2;
        .Discount-img {
          display: inline-block;
          width: 104px;
          height: 25px;
          background: url(https://static.dmall.com/kayak-project/usercenter/dist/usercenter/common/image/offline-barcode.png) no-repeat;
          background-size: auto 100%;
        }
      }
    }
  }

</style>