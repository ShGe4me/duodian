<template>
    <div class="all">
            <p :class="{active:count.Bool,que:true}"><input type="checkbox" @click="changeChe" ref="chebox"/></p>
            <div class="cont">
                <img src="https://img.dmallcdn.com/bizItem/201610/5491eb6a-8a7b-4621-89ad-f22e904b6e7f" >
                多点超市(百旺店)
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapGetters('cart',['count'])
        },
        data(){
            return{
                check:false
            }
        },
        methods:{
            changeChe(){
                this.check = this.$refs.chebox.checked;
                axios.post('/api/cart/upAllactive',{
                    active: this.check ? 1 :0
                }).then(res => {
                    this.$store.dispatch('cart/getcartlist')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.all{
    height: 40px;
    display: flex;
    align-items: center;
    background: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    .cont{
        img{
            width: 30px;
            margin-left: 10px;
        }
    }
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
}

</style>