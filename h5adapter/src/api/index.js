import axios from 'axios';
axios.interceptors.response.use(function(response){
    //对相应数据做点什么
    return response.data
},function(error){
    //对响应错误做点什么
    return Promise.reject(error)
})
const api = {
    home: {
        banner : (data_type=0) => axios.get('/api/home/banner',{
            params:{
                data_type
            }
        }),
        menu:(data_type=0) => axios.get('/api/home/menu',{
            params:{
                data_type
            }
        })
    },
    category : {
        list : () => axios.get('/api/category')
    }
}

export default {
    install : (Vue) => {
        Vue.prototype.$api = api
    }
}