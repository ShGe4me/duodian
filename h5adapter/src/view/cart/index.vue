<template>
    <div class="wrap">
        <div class="main">
            <checkAll />
            <Cartlist />
            <Footer />
        </div>
        <FooterBar />
    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import Footer from './components/footer'
import Cartlist from './components/cartlist'
import checkAll from './components/checkAll'
import axios from 'axios';
import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapState('cart',['cartList','price']),
            ...mapGetters('cart',['count'])
        },
        methods:{
           
        },
        mounted(){
        },
        components:{
            FooterBar,
            Footer,
            Cartlist,
            checkAll
        },
    }
</script>

<style lang="scss" scoped>
@import '@/static/scss/demo.scss';
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
}

.main{
    width: 100%;
    flex: 1;
    background: #eee;
    overflow-y: auto;
    overflow-x: hidden;;
}
</style>