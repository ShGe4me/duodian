<template>
    <div class='scroll-wrap' ref="scrollWrap">
        <div class="content">
            <slot></slot>
            <b v-show="isPullUpLoad">加载</b>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    props:{
        scrollX:Boolean,
        scrollY:{
            type:Boolean,
            default:true
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:'',
            isPullUpLoad:false
        }
    },
    mounted(){
        this.initScroll();
        if(this.pullUpLoad){
            this.initpullingUp();
        }
    },
    methods:{
        initScroll(){
            this.scroll = new BScroll(this.$refs.scrollWrap,{
                scrollX:this.scrollX,
                scrollY:this.scrollY,
                click:true,
                pullUpLoad:this.pullUpLoad
            })
        },
        refresh(){
            this.scroll.finishPullUp();
            this.isPullUpLoad = false;
            this.scroll.refresh();
        },
        initpullingUp (){
            this.scroll.on('pullingUp',() => {
                this.isPullUpLoad = true;
                this.$emit('pullingUp')
            })
        }
    }
}
</script>
<style lang='scss'>
.content{
    display: flex;
    flex-direction: column;
}
</style>
