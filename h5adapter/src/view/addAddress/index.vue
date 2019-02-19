<template>
    <div class="addAddress-wrap">
        <header-bar title="编辑地址" @back="back"/>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>
<style lang='scss'>
.addAddress-wrap{
    width: 100%;
    height: 100%;
}
</style>

