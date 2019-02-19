import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const Routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/view/home')
    },
    {
      path: '/sorts',
      name: 'sorts',
      component: () => import('@/view/sorts')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/view/cart')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/view/my')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('@/view/location')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/view/address')
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: () => import('@/view/addAddress')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/view/search'),
      meta:{
        title:'搜索页'
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/view/detail'),
    },
    {
      path: '/addOrder',
      name: 'addOrder',
      component: () => import('@/view/createOrder'),
    }
  ]
})
  const LoginPathArr = ['/cart','/my']
  const gpsPath = ['/location', '/selectlocation']
  Routers.beforeEach((to,from,next)=>{
    if (gpsPath.indexOf(to.path) === -1) {
        if (!window.localStorage.getItem('location')) {
            next(`/location?callback=${to.path}`)
        } else {
            if(LoginPathArr.indexOf(to.path) !== -1){
            Vue.prototype.$path = to.path;
                if(!document.cookie){
                    next('/login')
                }else{
                    next()
                }
            }else{
                next()
            }
        }
    } else {
        next()
    }
  })
  Routers.afterEach((to,from)=>{

  })
  
export default Routers;
