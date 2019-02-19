<template>
    <div class='page sort-page'>
        <header class='sort-header'>
            <TabBar :navList="navList" label="categoryName" @changeNav="navchange"/>
            <span @click="$router.push('/search')">
                <i class="icon iconfont icon-fangdajing"></i>
            </span>
        </header>
        <div class='sort-content'>
            <Scroll class='left-menu'>
                <TabBar :navList="leftmenu" label="categoryName" @changeNav="leftchange" ref="leftTar"/>
            </Scroll>
            <div class='right-content'>
                <div class='right-tab'>
                    <Scroll>
                        <TabBar :navList="[{'categoryName':'全部'}].concat(rightmenu)" label="categoryName" @changeNav="rightchange" ref="rightTar"/>
                    </Scroll>
                    <span class="sort" @click="visibility=true"></span>
                </div>
                <Scroll class="content-list" @pullingUp="pullingUp" :pullUpLoad="true" ref="scroll">
                    <Product :list="list" :rowNum="1" name="name"/>
                </Scroll>
            </div>
        </div>
        <Sorts :visibility.sync="visibility" @filterChange="filterChange"/>
        <Footer/>
    </div>
</template>
<script>
import TabBar from '@/components/tabbars';
import Footer from '@/components/FooterBar';
import Product from "@/components/product";
import Scroll from "@/components/scroll"
import Sorts from '@/components/sorts';
import axios from 'axios'
export default {
    data(){
        return {
            navList:[
            ],
            leftmenu:[
            ],
            rightmenu:[
            ],
            list:[],
            parentId:0,
            page:1,
            categoryId:0,
            visibility:false,
            filter:{volume:'DESC',price:'ASC'},
            categoryId:0
        }
    },
    components:{
        TabBar,
        Footer,
        Product,
        Scroll,
        Sorts
    },
    created() {
        this.$loading.show()
        this.$api.category.list().then(res => {
            this.$loading.hide()
            this.navList = res.data;
            this.leftmenu = res.data[0].children;
            this.rightmenu = res.data[0].children[0].children;
            this.parentId = this.leftmenu[0].categoryId
            this.getlistData(this.parentId)
        })
    },
    methods:{
        navchange(index,item){
            this.leftmenu = item.children;
            this.rightmenu = item.children[0].children;
            this.$refs.leftTar.activeIndex = 0;
            this.getlistData(item.categoryId)
            this.categoryId =item.categoryId
            this.$refs.rightTar.activeIndex = 0;
            this.list = []
        },
        leftchange(index,item){
            this.rightmenu = item.children;
            this.$refs.rightTar.activeIndex = 0;
            this.parentId = item.categoryId
            this.getlistData(item.categoryId)
            this.categoryId =item.categoryId
            this.list = []
        },
        rightchange(index,item){
            this.page = 1;
            this.list = []
            if(item.categoryName === '全部'){
                this.categoryId =this.parentId
                this.getlistData(this.parentId)
            }else{
                this.getlistData(item.categoryId)
                this.categoryId =item.categoryId
            }
        },
        getlistData(categoryId){
            this.categoryId = categoryId
            this.$loading.show()
            axios.get("/api/product/list",{params:{page:this.page,page_size:10,category_id:categoryId,filter :this.filter}}).then(res => {
                console.log(res.data)
                this.$loading.hide()
                this.list = this.list.concat(res.data)
                this.$refs.scroll.refresh()
            });
        },
        pullingUp(){
            this.page += 1
            this.$nextTick(()=>{
                this.getlistData(this.categoryId)
            })
        },
        filterChange(obj){
            console.log(obj);
            this.filter = obj;
            this.page = 1;
            this.list = []
            this.getlistData(this.categoryId);
            
        }
    }
}
</script>
<style lang='scss'>
.sort-header{
    position: relative;
    span{
        position: absolute;
        right:20px;
        top:10px;
    }
    a{
        &.active{
            color:#000;
            font-weight: 800;
        }
    }
}
.left-menu{
    width:100px;
    height:100%;
    background: #f6f6f6;
    flex-shrink:0;
    .tab-bar{
        height:100%;
        nav{
            width:100%;
            height:100%;
            flex-direction: column;
            .tab-line{width:0;height:0}
            a{
                width:100%;
                height:50px;
                line-height: 50px;
                text-align: center;
                margin-left:0;
                color:#999;
                &.active{
                    color:#000;
                    background: #fff;
                }
            }
        }
    }
}
.right-tab{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    nav{
        a{
            line-height: 45px;
            text-align: center;
            margin-left:0;
            color:#999;
            &.active{
                color:#000;
                background: #fff;
            }
        }
        .tab-line{
            width:0;
            height:0;
        }
    }
}
.left-menu .tab-bar nav a {
    width: 100%;
    text-align: center;
    margin: 0; 
    color: #999;
    text-decoration: none;
}
.right-tab .tab-bar nav{
    display: flex;
    align-items: center;
}
.right-tab .tab-bar nav a{
    height: 100%;
    text-decoration: none;
}
</style>

<style lang='scss' scoped>
.sort-page{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.sort-content{
    flex:1;
    overflow: auto;
    width:100%;
    display: flex;
    overflow: hidden;
    .right-content{
        flex:1;
        overflow: hidden;
        display:flex;
        flex-direction: column;
        .right-tab{
            position: relative;
            .sort{
                position: absolute;
                right: 0;
                top: 0;
                width: 40px;
                height: 40px;
                float: right;
                background: url(https://static.dmall.com/kayak-project/wxdmall/dist/wxdmall/view/sorts/images/filter.png) no-repeat #fff;
                background-size: 40px 40px;
            }
        }
        .content-list{
            width:100%;
            flex:1;
            overflow: hidden;
        }
    }
}
</style>