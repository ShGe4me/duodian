<template>
    <div class="count">
        <template v-if="num >= 1">
            <p @click.stop="changeNum('del')">-</p>
            <output>{{num}}</output>
            <p @click.stop="changeNum('add')">+</p>
        </template>
        <template v-else>
            <p @click.stop="changeNum('add')">+</p>
        </template>
    </div>
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';
    export default {
        props:{
            num:Number,
            id:Number
        },
        data(){
            return{
                
            }
        },
        methods:{
            changeNum(type){
                if(type === 'add'){
                    axios.post('/api/cart/add_cart',{
                        product_id:this.id
                    }).then(res => {
                        this.$store.dispatch('cart/getcartlist')
                    })
                }else{
                    axios.post('/api/cart/reduce_cart',{
                        product_id:this.id
                    }).then(res => {
                        this.$store.dispatch('cart/getcartlist')
                    })
                }
            }
        }
        ,
        watch:{
            
        },
        computed:{
            
        }
    }
</script>

<style lang="scss" scoped>
.count{
    display: flex;
    position: absolute;
    right: 10px;
    p{
        width: 30px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border: 1px solid #f90;
        color: #f90;
    }
    output{
        padding: 0 8px;
    }
}
</style>