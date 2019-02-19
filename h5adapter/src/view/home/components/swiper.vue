<template>
  <div class="posr">
    <swiper :options="swiperOption" ref="mySwiper" class="img_swiper-container ">
      <!-- slides -->
      <swiper-slide v-for="item in swiperImgArr" :key="item.id">
        <img :src="item[label]" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    swiperImgArr: Array,
    label: {
      type: String,
      default: "imageUrl"
    },
    page: String
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {},
  mounted() {},
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/scss/demo.scss";
.img_swiper-container {
  width: 100%;
  height: 170px;
  .swiper-slide {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>