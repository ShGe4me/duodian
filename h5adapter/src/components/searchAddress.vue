<template>
    <ul class='search-list'>
        <li v-for="(item) in placeSearch" :key="item.id" @click="changeCity(item.name)">
            <p>{{item.address}}</p>
            <p>{{item.name}}</p>
        </li>
    </ul>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    computed:{
        ...mapState('posi',['placeSearch']),
        ...mapMutations('posi',['SETADDRESS']),
    },
    mounted(){
        
    },
    methods:{
        changeCity(val){
            this.$store.commit('posi/SETADDRESS',val);
            this.$router.push('/home');
        }
    }
}
</script>
<style lang="scss">
.search-list{
    background: #f0f0f0;
    width:100%;
    height:auto;
    li{
        padding:10px;
        border-bottom:1px solid #ccc;
        display: flex;
        flex-direction: column;
        line-height: 2;
        &:nth-child(1){
            color:#000;
        }
        &:nth-child(2){
            color:#333;
        }
    }
}
</style>


