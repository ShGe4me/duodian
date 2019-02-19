import Vuex from 'vuex'
import Vue from 'vue'
import posi from './posi/posi'
import cart from './cart'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        user:{},
        location:JSON.parse(window.localStorage.getItem('location'))
    },
    getters:{

    },
    mutations:{
        SET_USER(state,payload){
            state.user = payload
        },
        SET_LOCATION(state,payload){
            state.location = payload
        }
    },
    actions:{
        SetUser(state,payload){
            console.log(payload)
            state.commit('SET_USER',payload)
        },
        SetLocation(state,payload){
            state.commit('SET_LOCATION',payload)
        }
    },
    modules:{
        posi,
        cart
    }
})

export default store