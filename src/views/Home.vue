<template>
  <div class="home">
    home
  </div>
</template>

<script>
import {getUser} from '../network/getdata'
export default {
  components:{
    
  },
  data(){
    return{
      message:''
    }
  },
  created(){
  this._getUser()
  },
  methods:{
    _getUser(){
      getUser().then(res=>{
        console.log(res)
      })
    }
    
  }

}
</script>

<style>

</style>