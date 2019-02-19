<template>
    <div class="check">
        <p :class="{active:check,que:true}"><input type="checkbox" v-model="check"/></p>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        props:{
            checkBool:String,
            id:Number
        },
        data(){
            return{
                check: this.checkBool === '0' ? false : true
            }
        },
        watch:{
            checkBool(newval){
                this.check = newval === '0' ? false : true
            },
            check(newcheck){
                axios.post('/api/cart/active',{
                    product_id:this.id,
                    active: newcheck ? 1 :0
                }).then(res => {
                    this.$store.dispatch('cart/getcartlist')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.que{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid red;
    position: relative;
    &.active{
        background: #f90;
    }
    input{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
}
</style>