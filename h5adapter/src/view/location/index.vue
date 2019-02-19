<template>
    <div class='page location-page'>
        <div class='pic'>
            <img src="../../static/images/logo.png" alt="">
        </div>
        <div class='address-map'>
            <div id="map">
            </div>
        </div>
        <h1 class='address-posi'>正在定位...</h1>
        <h2 class='address-bot'>高品质 低价格 好服务</h2>
    </div>
</template>
<script>
import AMap from 'AMap';
export default {
    methods:{
        
    },
    mounted(){
        let map = new AMap.Map('map');
        AMap.plugin('AMap.Geolocation', () => {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000
            })
            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', (data) => {
                this.$store.commit('posi/SETGPS',data)
                window.localStorage.setItem('location',JSON.stringify(data))
                this.$router.push('/home')
            })
            AMap.event.addListener(geolocation, 'error', (data) => {
                console.log('aaa')
                window.localStorage.setItem('location',JSON.stringify(data))
                this.$router.push('/home');
            })
        })
    }
}
</script>
<style lang='scss' scoped>
.location-page{
    background: #F6F5F5;
    .pic{
        width:100%;
        padding:60px 0;
        position: relative;
        img{
            width:100px;
            height:auto;
            position: absolute;
            left:0;
            right:0;
            margin:auto;
        }
    }
    .address-map{
        width:100%;
        margin-top:60px;
        #map{
            width:120px;
            height:120px;
            border-radius:50%;
            margin:0 auto;
        }
    }
    .address-posi{
        width:100%;
        text-align: center;
        margin-top:60px;
    }
    .address-bot{
        width:100%;
        text-align: center;
        color:#ff6600;
        position: absolute;
        bottom:80px;
    }
}
</style>


