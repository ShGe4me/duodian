<template>
  <div class="wrap">
    <Swipers :swiperImgArr="swiperImgArr" :label="labels" page="page2"/>
    <hr style="height:10px; background:#eee;border:none;">
    <Menu :menuArr="menuArr" title="remark" url="imageUrl"/>
    <Banner>
      <ul class="type3 border-1px border-t-b J_fixed_mod_30">       <li class="col-6 ">
								<a class="J_ClickTrace J_Link" data-traceevent="https://a.dmall.com/act/kWiC5gIxERGcLP.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1543838154485" href="https://a.dmall.com/act/kWiC5gIxERGcLP.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1543838154485"> <img class="J_ItemImage lazyloaded" data-src="https://img.dmallcdn.com/mIndex/201807/47a84856-ac4e-4d05-8263-8ac8dd4a25e2_480x480H" src="https://img.dmallcdn.com/mIndex/201807/47a84856-ac4e-4d05-8263-8ac8dd4a25e2_480x480H"> </a>
							</li>  <li class="col-6 ">
								<a class="J_ClickTrace J_Link" data-traceevent="https://a.dmall.com/act/4IrXpjNLkKVxG.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1543838154485" href="https://a.dmall.com/act/4IrXpjNLkKVxG.html?erpStoreId=206&amp;dmfrom=wx&amp;from=wx&amp;shareKey=1543838154485"> <img class="J_ItemImage lazyloaded" data-src="https://img.dmallcdn.com/mIndex/201808/b421a19e-ebcc-4707-9759-a5d1e1ce6415_480x480H" src="https://img.dmallcdn.com/mIndex/201808/b421a19e-ebcc-4707-9759-a5d1e1ce6415_480x480H"> </a>
							</li>  </ul>
    </Banner>
  </div>
</template>

<script>
import Swipers from "@/view/home/components/swiper";
import Menu from "@/view/home/components/menu";
import Banner from '@/view/home/components/banner'
import axios from "axios";
export default {
  data() {
    return {
      swiperImgArr: [],
      labels: "imageUrl",
      menuArr: []
    };
  },
  created() {
    this.getSwiperArr()
  },
  mounted() {},
  methods: {
    getSwiperArr() {
      axios.get("/api/homeData2").then(res => {
        this.menuArr = [...res.data.pageModules[2].dataList,...res.data.pageModules[3].dataList]
        this.swiperImgArr = res.data.pageModules[0].dataList;
      });
    }
  },
  components: {
    Swipers,
    Menu,
    Banner
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
</style>