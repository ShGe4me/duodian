<template>
    <ul>
        <li v-for="(item,index) in hotData" :key="index">
            {{item.name}}
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            hotData:[
                {name:'混沌'},
                {name:'海苔'},
                {name:'抽纸'},
                {name:'卫生纸'},
                {name:'酸奶'},
            ]
        }
    }
}
</script>
<style lang='scss' scoped>
ul{
    width:100%;
    padding:0 20px;
    display:flex;
    li{
        padding:5px 10px;
        border:1px solid #eee;
        border-radius:10px;
        margin-right:10px;
    }
}
</style>
