
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home', 
    component:Layout,
    children:[
      {
        path:'/home',
        component:()=>import('../views/Home')
      }
    ]
  },
  {
    path: '/schedul', 
    component:Layout,
    children:[
      {
        path:'/schedul',
        name:'Schedul',
        component:()=>import('../views/Schedul')
      }
    ]
  },
  // {
  //   path: '/task', 
  //   component:Layout,
  //   children:[
  //     {
  //       path:'/task',
  //       name:'Task',
  //       component:()=>import('../views/Task')
  //     }
  //   ]
  // },
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
  {
    path:'*',
    redirect:'/'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
