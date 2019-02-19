<template>
    <div class='public_sort' v-show="visibility" @click="sortsHide">
        <ul>
            <li @click="filterFn(0,{volume:'DESC',price:'ASC'})">智能排序<b v-if="defaultInd==0"></b></li>
            <li @click="filterFn(1,{volume:'DESC'})">销量从高到底<b v-if="defaultInd==1"></b></li>
            <li @click="filterFn(2,{price:'DESC'})">价格从高到低<b v-if="defaultInd==2"></b></li>
            <li @click="filterFn(3,{price:'ASC'})">价格从低到高<b v-if="defaultInd==3"></b></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        visibility:Boolean
    },
    data(){
        return {
            defaultInd:0
        }
    },
    methods:{
        filterFn(id,obj){
            this.defaultInd = id;
            this.$emit('filterChange',obj)
        },
        sortsHide(){
            console.log(11)
            this.$emit('update:visibility',false);
        }
    }
}
</script>
<style lang='scss' scoped>
.public_sort{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: rgba(0,0,0,.2);
    z-index:100;
    ul{
        width:150px;
        position: absolute;
        right:40px;
        top:50px;
        background: #fff;
        border-radius:10px;
        li{
            height:50px;
            line-height: 50px;
            padding-left:20px;
            position: relative;
            b{
                width:2px;
                height:20px;
                position: absolute;
                left:0;
                top:15px;
                background: #ff6600;
            }
        }
    }
}
</style>

