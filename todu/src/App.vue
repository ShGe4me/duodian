<template>
    <div id="app">
            <div class="inp">
                <input type="text" v-model="text" @keyup.enter="addTodu">
            </div>
            <div class="flex"><h1>未完成</h1><span>{{toduCount}}</span></div>
            <div class="todo">
                <ul class="toduList">
                    <li v-for="(item,index) in toduList" :key="index">
                        <input type="checkbox" :checked='item.type' @change="changeCheck(item.id,'todu')">
                        <p @click="changeFlag(index,'todu')"  v-if="!(index === toduind)">{{item.text}}</p>
                        <p v-show="(index === ind)" ><input type="text" @blur="changeText(item.id,index,'todu')"  ref='inp'/> </p>
                        <span @click="del(item.id)">删除</span>
                    </li>
                </ul>
            </div>
            <div class="flex"><h1>已完成</h1><span>{{doneCount}}</span></div>
            <div class="done">
                
                <ol class="doneList">
                    <li v-for="(item,index) in doneList" :key="index">
                        <input type="checkbox" :checked='item.type' @change="changeCheck(item.id,'done')">
                        <p @click="changeFlag(index,'done')"  v-if="!(index === doneind)">{{item.text}}</p>
                        <p v-show="(index === doneind)" ><input type="text" @blur="changeText(item.id,index,'todo')"  ref='doneinp'/> </p>
                        <span @click="del(item.id)">删除</span>
                    </li>
                </ol>
            </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
    name: "App",
    data() {
        return {
            text:"",
            changeType:false,
            toduind:null,
            inputText:'',
            doneind:null
        };
    },
    computed:{
        ...mapGetters(['toduList','doneList','toduCount','doneCount'])
    },
    methods:{
        addTodu(){
            this.$store.commit('SET_TODULIST',{
                text:this.text
            })
        },
        changeCheck(id,type){
            if(type === 'todu'){
                    this.$store.commit('SET_TODULIST_TYPE',{
                    id,
                    type:true
                })
            }else{
                this.$store.commit('SET_TODULIST_TYPE',{
                id,
                type:false
                })
            }
        },
        del(id){
            this.$store.commit('DEL_TODULIST',{
                id
            })
        },
        changeFlag(index,type){
            if(type === 'todu'){
                this.toduind = index
            }  else{
                this.doneind = index
            }
        },
        changeText(id,index,type){
            if(type === 'todu'){
                this.$store.commit('CHANGE_TODULIST_TEXT',{
                id,
                Changetext:this.$refs.inp[index].value
            })
                this.toduind = null;
            }else{
                 this.$store.commit('CHANGE_TODULIST_TEXT',{
                id,
                Changetext:this.$refs.doneinp[index].value
            })
                this.doneind = null;
            }
            
        }

    }
};
</script>

<style scoped>
#app{
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;
    
}
.inp{
    width: 100%;
    height: 30px;
    
}
.inp input{
    width: 100%;
    height: 100%;
    outline: none;
}
.todo,.done{
    width: 100%;
}
.toduList{
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
}
.toduList li{
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
   
}
.toduList li  p{
        flex:2;
        text-align: left;
    }
.doneList{
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
}
.doneList li{
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
}
.doneList li p{
        flex:2;
        text-align: left;
    }
.flex{
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
}
.flex span{
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: pink;
    color: #eee;
    border-radius: 50%;
}
</style>
