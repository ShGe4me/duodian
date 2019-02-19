<template>
  <div class="wrap">
    <Swipers :swiperImgArr="swiperImgArr" :label="labels" page="page1"/>
    <hr style="height:10px; background:#eee;border:none;">
    <Menu :menuArr="menuArr" title="remark" url="imageUrl"/>
    <Banner>
      <a class="J_ClickTrace J_Link" data-traceevent="https://a.dmall.com/act/Y5OT1iXuQH8A.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1543838166073" href="https://a.dmall.com/act/Y5OT1iXuQH8A.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1543838166073"> <img class="J_ItemImage lazyloaded" data-src="https://img.dmallcdn.com/mIndex/201811/a02279bb-eb05-4b8e-86d6-b9c481b6de34_750H" src="https://img.dmallcdn.com/mIndex/201811/a02279bb-eb05-4b8e-86d6-b9c481b6de34_750H"> </a>
    </Banner>
    <div class="product">
      <HeaderImg />
      <Product :list="list" :rowNum="3" name="name"/>
    </div>
  </div>
</template>
<script>
import Swipers from "@/view/home/components/swiper";
import Banner from '@/view/home/components/banner'
import Menu from "@/view/home/components/menu";
import HeaderImg from "@/view/home/components/headerIMG";
import Product from "@/components/product";
import axios from "axios";
export default {
  data() {
    return {
      swiperImgArr: [],
      labels: "imageUrl",
      menuArr: [],
      list:[]
    };
  },
  created() {
        this.getSwiperArr()

  },
  mounted() {
        this.getlistData()
  },
  methods: {
    getSwiperArr() {
      axios.get("/api/homeData1").then(res => {
        this.menuArr = [...res.data.pageModules[2].dataList,...res.data.pageModules[3].dataList]
        this.swiperImgArr = res.data.pageModules[0].dataList;
      });
    },
    getlistData(){
        axios.get("/api/product/list",{
          params:{
            page:1,
            page_size:10,
            category_id:72
          }
        }).then(res => {

        this.list = res.data
      });
    }
  },
  components: {
    Swipers,
    Menu,
    Banner,
    HeaderImg,
    Product
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/scss/demo.scss";
.wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.product{
  width: 100%;
}
</style>