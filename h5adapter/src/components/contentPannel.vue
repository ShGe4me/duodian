<template>
    <div>
        <header class='public_header'>
            <h2>
                <img :src="imageUrl" v-if="imageUrl">
                <span v-else>{{title}}</span>
            </h2>
        </header>
        <div class='public_contentpannet'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        imageUrl:String
    }
}
</script>
<style lang='scss'>
.public_header{
    width:100%;
    height:30px;
    background: #eee;
    img{
        width:100%;
        height:100%;
    }
    span{
        line-height: 30px;
        text-align: center;
    }
}
.public_contentpannet{
    width:100%;
}
</style>


