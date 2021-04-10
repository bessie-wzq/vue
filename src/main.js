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

router.beforeEach((to,from,next)=>{
  const islogin=localStorage.getItem('token')=='Imlogin'
  if(islogin){
    next()
  }
  else{
    if(to.path!=='/login'){
      next('/login')
    }
    else{
      next()
    }
  }
})