<template>
    <div class="loading-wrap" v-show="isShow">
        <div class="loading"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        show () {
            this.isShow = true
        },
        hide () {
            this.isShow = false
        }
    }
}
</script>
<style lang='scss'>
.loading-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.1);
    z-index: 1000;
    display: flex;
    .loading {
        background: #fff url('https://img.dmallcdn.com/common/2add440a-12a9-40c1-b9a3-bad9dea816db');
        z-index: 1004;
        width: 128px;
        height: 128px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: auto 128px;
        animation:loading 1.2s steps(17) infinite;
        border-radius: 100%;
        margin: auto;
    }
}
@keyframes loading{100%{background-position:-2176px 0}}
</style>


