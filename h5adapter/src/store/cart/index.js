import axios from 'axios';
const cart = {
    namespaced:true,
    state:{
        cartList:[],
        price:0
    },
    getters:{
        count(state){
            let count = 0;
            let Bool = false;
            let aa = [];
            state.cartList.forEach((item) => {
                aa.push({id:item.categoryId,num:item.num}) 
                if(item.active*1){
                    count += item.num
                    Bool = true
                }else{
                    count
                    Bool = false
                }
            })
            return {count,Bool,aa}
        }
    },
    mutations:{
        SET_CART_LIST (state,payload){
            state.cartList = payload.list;
            state.price = payload.price;
        }
    },
    actions:{
        getcartlist (state) {
            axios.get('/api/cart/list').then(res=>{
                state.commit('SET_CART_LIST',res)
            })
        }
    },
    modules:{
        
    }
}
export default cart;