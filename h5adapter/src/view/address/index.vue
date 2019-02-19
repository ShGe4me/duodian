<template>
    <div class='page address-page'>
        <div>
            <HeaderBar class='address-header' title="请选择" @back="back"/>
            <div class='address-form'>
                <input type="text" placeholder="小区 街道 大厦" v-model="val" v-canRun="search">
                <i class="icon iconfont icon-fangdajing"></i>
                <button @click="changeaddress">取消</button>
            </div>
        </div>
        <div class='address-cont'>
            <div class='address-content'>
                <div class='address-address' @click="popupShow">
                    <i class="icon iconfont icon-faxiandingdan"></i>
                    定位到当前地址
                </div>
            </div>
            <Popup :visibility="popupFlag" @changeFlag="changeFlag">
                <SearchAddress/>
            </Popup>
            <div class='address-citylist' v-show="val!==''">
                <SearchAddress />
            </div>
        </div>
        <div @click="goAddress">
            <d-button types="white">+新增地址</d-button>
        </div>
    </div>
</template>
<script>
import map from '@/utils/map';
import SearchAddress from '@/components/searchAddress';
import HeaderBar from '@/components/HeaderBar';
import Popup from '@/components/popup';
import {mapState,mapMutations,mapActions} from 'vuex';

export default {
    data(){
        return {
            val:'',
            popupFlag:false,
            citylist:[]
        }
    },
    computed:{
        ...mapMutations('posi',['GETADDRESS'])
    },
    watch:{
        val(newVal){
            // this.search(newVal)
        }
    },
    methods:{
        search(){
            map.search(this.val).then((res) => {
                this.$store.commit('posi/GETADDRESS',res.poiList.pois);
            })
        },
        popupShow(){
            this.$loading.show()
            map.geolocation().then(res => {
                this.citylist = res.pois;
                this.$store.commit('posi/GETADDRESS',res.pois)
                this.popupFlag = true;
                this.$loading.hide()
            }).catch(() => {
                this.$error('定位失败');
                this.$loading.hide()
            })
        },
        changeFlag(){
            this.popupFlag = false;
        },
        goAddress(){
            this.$router.push('/addAddress')
        },
        changeaddress(){
            this.val = '';
        },
        back(){
            this.$router.back()
        }
    },
    components:{
        HeaderBar,
        SearchAddress,
        Popup
    },
    directives: {
      debounce: {
        inserted: function (el, binding) {
          let timer
          el.addEventListener('keyup', () => {
            if (timer) {
              clearTimeout(timer)
            }
            timer = setTimeout(() => {
              binding.value()
            }, 300)
          })
        }
      }
    }
}
</script>
<style lang='scss' scoped>
.address-page{
    background: #f9faf7;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.address-header{
    background: #fff;
}
.address-form{
    width:100%;
    padding:10px;
    background: #fff;
    display: flex;
    position: relative;
    .icon{
        position: absolute;
        left:20px;
        top:15px;
    }
    input{
        flex:1;
        height:30px;
        padding-left:25px;
        border:0;
        outline:0;
        border:1px solid #eee;
        border-radius: 5px;
    }
    button{
        width:80px;
        height:30px;
        background: #eee;
        border:0;
        outline:0;
        background: #eee;
        margin-left:10px;
    }
}
.address-address{
    width:100%;
    height:50px;
    background: #fff;
    padding-left:15px;
    line-height: 50px;
}
.address-cont{
    flex:1;
    width:100%;
    overflow: auto;
}
.address-citylist{
    position: fixed;
    left: 0;
    top: 100px;
    right: 0;
    bottom: 0;
    overflow-y: auto;
}
</style>


