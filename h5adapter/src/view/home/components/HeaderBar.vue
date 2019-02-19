<template>
    <header class='header-bar'>
        <div class='header-bar-left pl15' @click="goAddress">
            <i class="icon iconfont icon-dingwei"></i>
            {{gps_address}}
            <i class="icon iconfont icon-angle-right"></i>
        </div>
        <div class='header-bar-right pr10'>
            <i class="icon iconfont icon-fangdajing" @click="gosearch"></i>
            <img src="https://img.dmallcdn.com/store/201804/eda85a36-48fa-4b07-9618-04698d2fe8cb" alt="">
        </div>
    </header>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
    name:'HeaderBar',
    methods:{
        goAddress(){
            this.$router.push('/address')
        },
        gosearch(){
            console.log(11)
            this.$emit('gosearch')
        }
    },
    computed:{
        ...mapState('posi',['gps_location','gps_address']),
        ...mapActions('posi',['get_gps_location'])
    },
}
</script>
<style lang='scss' scoped>
.header-bar{
    width:100%;
    height:42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-bar-left{
        icon{
            vertical-align: middle;
        }
    }
    .header-bar-right{
        img{
            width:24px;
            height:24px;
        }
    }
}
</style>

