<template>
<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div class='page popup' v-show="visibility"> 
        <div class='popup-box'>
            <div class='popup-top' @click="closepopup">
                
            </div>
            <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
                <div class='popup-content' v-show="visibility">
                    <div class='popup-header'>
                        <span>您附近的地址</span>
                        <span @click="closepopup">取消</span>
                    </div>
                    <div class="popup-list">
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
    </transition>
</template>
<script>

export default {
    props:{
        visibility:Boolean
    },
    methods:{
        closepopup(){
            this.$emit('changeFlag')
        }
    }
}
</script>
<style lang='scss'>
.popup{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.4);
    position:fixed;
    left:0;
    top:0;
    z-index:100;
    .popup-box{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
    }
    .popup-top{
        width:100%;
        height:110px;
    }
}
.popup-content{
    width:100%;
    background: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    .popup-header{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
        border-bottom:1px solid #ccc;
        flex-shrink: 0;
    }
    .popup-list{
        width: 100%;
        flex: 1;
        overflow:auto;
    }
}
</style>



