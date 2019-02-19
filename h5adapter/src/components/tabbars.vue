<template>
    <div class='tab-bar'>
        <nav  style="position:relative;">
            <a href="javascript:;" 
            v-for="(item,index) in navList" 
            :key="index"
            :class="{active:activeIndex == index}"
            @click="handlerChange(index,item)"
            ref="currentItem"
            >{{item[label]}}</a>
            <b class='tab-line' :style="styleBar"></b>
        </nav>
    </div>
</template>
<script>
export default {
    props:{
        navList:Array,
        label:{
            type:String,
            default:'text'
        },
        defaultIndex:{
            type:Number,
            default:0
        }
    },
    data () {
        return {
            activeIndex:0,
            styleBar:{
                width:0,
                left:0
            }
        }
    },
    watch:{
        defaultIndex(index){
            this.setDefaultIndex(index)
        },
        activeIndex(index){
            this.setBarStyle(index);
        },
        navList(){
            this.$nextTick(()=>{
                 this.setBarStyle(this.defaultIndex);
            })
        }
    },
    created () {
        this.setDefaultIndex(this.defaultIndex);
    },
    mounted () {
        this.setBarStyle(this.defaultIndex);
    },
    methods:{
        setBarStyle(index){
            if(this.navList.length>=1){
                const navItem = this.$refs['currentItem'][index];
                const width = navItem.clientWidth;
                const left = navItem.offsetLeft;
                this.styleBar = {
                    width:width+'px',
                    left:left+'px'
                }
            }
            
        },
        setDefaultIndex(index){
            this.activeIndex = index ? index : 0;
        },
        handlerChange(index,item){
            this.setBarStyle(index)
            this.activeIndex = index;
            this.$emit('changeNav',index,item)
        }
    }
}
</script>
<style lang='scss'>
.tab-bar{
    height:40px;
    nav{
        height:100%;
        display: flex;
        align-items: center;
        overflow-x:auto;
        a{
            flex-shrink:0;
            margin:0 10px;
            text-decoration: none;
        }
    }
}
.active{
    color:red;
}
.tab-line{
    width:20px;
    height:2px;
    background: #f00;
    position: absolute;
    left:0;
    bottom:0;
    transition:all 1s ease;
}

</style>

