const posi = {
    namespaced:true,
    state:{
        gps_address:'',
        gps_location:JSON.parse(window.localStorage.getItem('location')) && JSON.parse(window.localStorage.getItem('location')),
        placeSearch:[]
    },
    getters:{},
    mutations:{
        SETGPS (state,payload){
            state.gps_address = payload.addressComponent.street+'-'+payload.addressComponent.neighborhood
            state.gps_location = payload;
            window.localStorage.setItem('location',JSON.stringify(payload))
        },
        GETADDRESS (state,payload){
            state.placeSearch = payload;
        },
        SETADDRESS(state,payload){
            state.gps_address = payload;
        }
    },
    actions:{
        // get_gps_location(context,payload){
        //     context.commit('SETGPS',payload)
        //     console.log(payload,'payload')
        // }
    },
    modules:{
        
    }
}
export default posi;