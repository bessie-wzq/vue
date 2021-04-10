
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home', 
    component:layout,
    children:[
      {
        path:'/home',
        component:()=>import('../views/Home')
      }
    ]
  },
  {
    path: '/dashbord', 
    component:layout,
    children:[
      {
        path:'/dashbord',
        name:'Dashbord',
        component:()=>import('../views/dashbord')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',  
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/',
    // name: 'Home', 
    redirect:'/login', 
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/layout',
    redirect:'/home',
    // name: 'Login',
    // component: () => import(/* webpackChunkName: "about" */ '../views/layout.vue'),
    // components:{
    //   default:siderbar
    // }

    
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
