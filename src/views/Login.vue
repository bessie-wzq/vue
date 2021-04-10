<template>
 
    <div class="login">
      <el-form  status-icon  label-width="100px" class="demo-ruleForm">
         <el-form-item label="用戶" >
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="login()">登錄</el-button>
          <el-button >注冊</el-button>
        </el-form-item>
      </el-form>
    </div>
    

</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      if(this.username=='admin'&&this.password=='admin'){
        localStorage.setItem('islogin','true')
          this.$store.commit("loginSuccess");
          let redirect = this.$route.query.redirect; //获取redirect
          if(redirect != undefined){
              this.$router.replace({name:redirect})
          }else{
              // this.$router.replace("/")
          this.$router.push('/home').catch(()=>{})

          }
      }
      else{
        alert('login failed')
      }
    }
  }
}
</script>

<style scoped>
 

  .login{
    position: absolute;
    top: 300px;
    left: 45%;
  }
</style>

