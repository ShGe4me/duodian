<template>
    <div class="banner_img">
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
@import "@/static/scss/demo.scss";
.banner_img{
    width: 100%;
    height: 113px;
    border-top: 10px solid #eee;
    a{
        width: 100%;
        display: inline-block;
        img{
            width: 100%;
        }
    }
    ul{
        width: 100%;
        display: flex;
        li{
            width: 50%;
            img{
                width: 100%;
            }
        }
    }
}
</style>