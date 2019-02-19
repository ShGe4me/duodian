<template>
    <button class='d-btn' :class="[types,{transparent:transparent}]" @click="sureEvent" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props:{
        types:{
            type:String,
            default:'default'
        },
        transparent:Boolean,
        disabled:Boolean
    },
    methods:{
        sureEvent(){
            this.$emit('sure')
            this.$emit('getCode')
        }
    }
}
</script>
<style lang='scss'>
.d-btn{
    width:100%;
    height:50px;
    border:0;
    outline:0;
    background: #ff6600;
    color:#fff;
    border-radius:10px;
    line-height: 50px;
    text-align: center;
    &.white{
        background: #fff;
        color:#ff6600;
    }
    &.transparent{
        background: transparent;
        border:1px solid #ff6600;
        color:#ff6600;
    }
    &:disabled{
        opacity:0.5;
    }
}
</style>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           