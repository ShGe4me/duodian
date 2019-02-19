import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        toduList:[]
    },
    getters:{
        toduList(state){
            return state.toduList.filter((item) => {
                return item.type === false
            })
        },
        doneList(state){
            return state.toduList.filter((item) => {
                return item.type === true
            })
        },
        toduCount(state){
            let count = 0;
            state.toduList.forEach((item)=>{
                !item.type ? ++count :count
            })
            return count
        },
        doneCount(state){
            let count = 0;
            state.toduList.forEach((item)=>{
                item.type ? ++count :count
            })
            return count
        }
    },
    mutations:{
        SET_TODULIST(state,payload){
            state.toduList.push({
                type:false,
                text:payload.text,
                id:state.toduList.length
            })
        },
        SET_TODULIST_TYPE(state,payload){
            state.toduList.forEach((item)=>{
                item.id === payload.id ? item.type = payload.type :item.type
            })
        },
        DEL_TODULIST(state,payload){
            state.toduList.forEach((item,index)=>{
                item.id === payload.id ? state.toduList.splice(index,1) : null
            })
        },
        CHANGE_TODULIST_TEXT(state,payload){
            state.toduList.map((item,index)=>{
                item.id === payload.id ? item.text = payload.Changetext : item.text
                return item
            })
        }
    },
    actions:{
        
    },
    modules:{

    }
})
export default store