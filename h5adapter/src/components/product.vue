<template>
    <div class="product-wrap">
        <div
        class="product-list" 
        v-for="(item,index) in list" 
        :key="index"
        :style="{width: 100 / rowNum + '%'}"
        :class="{row:rowNum == 1}"
        @click="$router.push(`/detail/${item.id}`)"
        >
            <dl>
                <dd><img :src="item.img" /></dd>
                <dt>
                    <h2 class="texthide2">{{item[name]}}</h2>
                    <p class="flex mt8"><span>{{item.price}}</span>
                    <changeConut :id="item.id"/></p>
                </dt>
            </dl>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters("cart/",['count'])
        },
        props:{
            rowNum:{
                type:Number,
                default:2
            },
            list:Array,
            name:{
                type:String,
                default:'title'
            }
        },
        methods:{
            addCart(id){
                axios.post('/api/cart/add_cart',{
                    product_id:id
                }).then(() => {
                    this.$store.dispatch('cart/getcartlist')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.product-wrap{
    width: 100%;
    float: left;
    overflow: hidden;
}
.product-list{
    height: 175px;
    float: left;
    padding: 0 5px;
    border: 1px solid #eee;
    box-sizing: border-box;
    dl{
        width: 100%;
        dd{
            width: 100%;
            text-align: center;
            img{
                max-width: 100px;
            }
        }
        dt{
            width: 100%;
            line-height: 1.5;
            .flex{
                height: 20px;
                justify-content: space-between;
                align-items: center;
                button{
                    box-sizing: border-box;
                }
            }
        }
    }
    &.row{
            height: 100px;
        dl{
            display: flex;
            align-items: center;
        }
    }
}
.mr5{
    padding: 0 10px;
    background: #f90;
}
</style>