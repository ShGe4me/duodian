<template>
    <div class='page detail-page'>
        <header-bar class='header-top'></header-bar>
        <div class='detail-content'>
            <swiper :options="swiperOptions">
                <swiper-slide v-for="item in swiperData" :key="item.id">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <div class='detail-tit'>
                <h1>{{detailData.name}}</h1>
                <p><sup>￥</sup><span>{{detailData.price}}</span></p>
            </div>
            <div class='detail-tit detail-tits'>
                <h2>
                     现在下单，预计明日09:00-10:30送达
                </h2>
            </div>
            <div class='detail-tit detail-tits'>
                <img src="http://img.dmallcdn.com/store/201804/eda85a36-48fa-4b07-9618-04698d2fe8cb" alt="">
                百旺店
            </div>
        </div>
        <div class='detail-footer'>
            <i class="icon iconfont icon-gouwuche"></i>
            <button>加入购物车</button>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'  
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return {
            detailData:[],
            swiperOptions:{
                pagination:{
                    el:'.swiper-pagination'
                }
            },
            swiperData:null
        }
    },
    mounted(){
       this.getDetailData(this.$router.history.current.params.id);
    },
    methods:{
        getDetailData(id){
            axios.get('/api/detail',{
                params:{id}
            }).then(res => {
                this.detailData = res[0];
                this.swiperData = JSON.parse(res[0].imgList);
            })
        }
    },
    components:{
        swiper, 
        swiperSlide,
    }
}
</script>

<style lang='scss' scoped>
img{
    width:375px;
    height:375px;
    display: block;
}
.header-top{
    position: absolute;
    z-index: 999;
}
.detail-tit{
    padding:10px 20px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    font-size:18px;
    h1{
        line-height: 2;
    }
    p{
        sup{
            vertical-align: super;//垂直对齐文本的上标
            font-size: smaller;
        }
        color:#ff6600;
        span{
            font-size:20px;
        }
    }
}
.detail-tits{
    font-size:14px;
    display:flex;
    align-items: center;
    img{
        width:30px;
        height:30px;
        margin-right:15px;
    }
}
.detail-footer{
    width:100%;
    height:50px;
    position: absolute;
    bottom:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
        margin-left:30px;
        font-size:20px;
    }
    button{
        width:80px;
        height:50px;
        background: #ff6600;
        color:#fff;
        border:0;
        outline:0;
    }
}
</style>

