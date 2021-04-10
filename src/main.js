import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let islogin=localStorage.getItem("islogin")
if(islogin){
  store.commit("loginSuccess")
}
router.beforeEach((to,from,next)=>{
  // const islogin=localStorage.getItem('token')=='Imlogin'
  // if(islogin){
  //   next()
  // }
  // else{
  //   if(to.path!=='/login'){
  //     next('/login')
  //   }
  //   else{
  //     next()
  //   }
  // }

  let logined=store.state.islogin
  if(to.name=='Login'){
    if(!logined){
      next()
    }else{
      router.replace('/home')
    }
  }else{
    if(!logined){
      router.replace({path:'login',query:{redirect:to.name}});
    }else{
      next()
    }
  }
})