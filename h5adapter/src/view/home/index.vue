<template>
<div class="page home-page fdc">
  <HeaderBar @goaddress="goaddress" @gosearch="gosearch"/>
  <div class="main fdc">
    <TabBar :navList="nav" @change="navChange" :defaultIndex="activeIndex"  />
    <div class="swiper-container index">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
        	        <page1 />
                </div>
                <div class="swiper-slide">
        	        <page2 />
                </div>
            </div>
        </div>
  </div>
  <FooterBar />
</div>
</template>
<script>
import HeaderBar from './components/HeaderBar'
import Banner from './components/banner'
import page1 from './children/page1'
import page2 from './children/page2'
import TabBar from '@/components/TabBar'
import FooterBar from '@/components/FooterBar'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {localStorage,sessionStorage} from '../../utils/local'
export default {
  props: {},
  data () {
    return {
        nav:[{
            text:'多点超市'
        },
        {
            text:'全球精选'
        }],
        activeIndex: 0,
        swiperImgArr:[]
    }
  },
  components: {
    HeaderBar,
    TabBar,
    page1,
    page2,
    Banner,
    FooterBar
  },
  created () {
  },
  mounted () {
        let that = this;
        let myHomeSwiper = new Swiper('.index',{
                on:{
                    slideChangeTransitionStart(){
                      that.activeIndex = myHomeSwiper.activeIndex
                    }
                }
              })
            that.$myHomeSwiper = myHomeSwiper; 
            },
  watch: {},
  computed: {},
  methods: {
    navChange (index, item) {
      this.$myHomeSwiper.activeIndex = index
      this.$myHomeSwiper.update();
      this.activeIndex = index;
    },
    goaddress(){
        this.$router.push('/address')
    },
    gosearch(){
        this.$router.push('/search')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/static/scss/demo.scss';
.home-page{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main{
  width: 100%;
  flex: 1;
  .swiper-container{
    width: 100%;
    flex: 1;
  }
}
</style>
