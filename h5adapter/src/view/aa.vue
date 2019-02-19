<template>
    <div>
        <div id="testCount" v-html="message"></div>
        <button @click="change">aaaa</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message: 'changed'
            }
        },
        methods:{
            change(){
                this.message = 'changedssss'
                console.log(document.getElementById('testCount').innerHTML) // 得到'changed' 而不是 changedssss
                //这样可以，nextTick里面的代码会在DOM更新后执行
                this.$nextTick(function(){
                    console.log(document.getElementById('testCount').innerHTML) //可以得到'changedssss'
                })
            }
        }
    }
</script>

<style scoped>

</style>