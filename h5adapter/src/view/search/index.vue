<template>
    <div class='page search'>
        <div class='search-header'>
            <HeaderBar></HeaderBar>
            <div class='address-form'>
                <input type="text" placeholder="搜索想要的商品" v-model="searchKey" v-canRun="searchSuggest"> 
                <!-- v-model="searchKey"  -->
                <i class="icon iconfont icon-fangdajing"></i>
            </div>
        </div>
        {{searchKey}}
        <div class='search-main'>
            <h1>热门搜索</h1>
            <div class='search-hot'>
                <Hot/>
            </div>
            <h2>
                <span>历史搜索</span>
                <span><i class="icon iconfont icon-lajitong"></i></span>
            </h2>
            <div class='search-history'>
                
            </div>
        </div>
        <SearchList :searchList="searchlist" v-show="searchFlag"/>
    </div>
</template>
<script>
import jsonp from '@/utils/jsonp';
import Hot from './components/hot';
import SearchList from './components/searchList';
export default {
    data(){
        return {
            searchKey:'',
            searchlist:[],
            searchFlag:false
        }
    },
    watch:{
        searchKey(newVal){
            if(newVal === ''){
                this.searchFlag = false;
            }else{
                this.searchFlag = true;
            }
        }
    },
    methods:{
        searchSuggest(){
            if (this.searchKey !== '') {
                jsonp('https://gatewx.dmall.com/search/suggest',{
                    param:{
                        keyword:this.searchKey,
                        pairs:"1-206"
                    },
                    source: 2,
                    tempid: 'C83D70EB7D300002EEE716901E1F1A63',
                    pubParam: '{}'
                }).then(res => {
                    this.searchlist=res.data;
                })
                
            }
        }
    },
    components:{
        Hot,
        SearchList
    }
}
</script>
<style lang='scss'>
.search-header{
    width:100%;
    display: flex;
    height:50px;
    align-items: center;
    .public-header{
        width:60px;
        span{
            top:10px;
        }
    }
}
</style>

<style lang="scss" scoped>
.search-header{
    width:100%;
    display: flex;
    height:50px;
    align-items: center;
    .public-header{
        width:60px;
        span{
            top:20px;
        }
    }
}
.address-form{
    width:100%;
    padding:10px;
    background: #fff;
    display: flex;
    position: relative;
    .icon{
        position: absolute;
        left:20px;
        top:15px;
    }
    input{
        flex:1;
        height:30px;
        padding-left:25px;
        border:0;
        outline:0;
        border:1px solid #eee;
        border-radius: 15px;
        background: #f6f6f6;

    }
}
.search-main{
    flex:1;
    width:100%;
    h1{
        padding:20px;
    }
    h2{
        padding:20px;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
}
</style>
