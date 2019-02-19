<template>
    <div class="list">
        <div v-for="(item,index) in cartList" :key="index" class="listitem pl8 mt5 mb5">
            <Check :checkBool="item.active" :id="item.id *1"/>
            <div class="content ml8">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
            </div>
            <changeConut :num="item.num" :id="item.id"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import {mapState,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState('cart',['cartList'])
        },
        methods:{
           
        },
        mounted(){
        },
        components:{
           
        },
    }
</script>

<style lang="scss" scoped>
.listitem{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #f90;
    background: #fff;
}
</style>