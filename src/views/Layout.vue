<template>
  <el-container>
  <el-aside width="200px"><SiderBar class="siderbar"/></el-aside>
  <el-container>
    <el-header class="header"><TopNav /></el-header>
    <el-main class="pageview">
      <Main />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import TopNav from '../components/TopNav'
import SiderBar from '../components/SiderBar'
import Main from '../components/Main'


export default {
    components:{
    SiderBar,
    TopNav,
    Main,
    
  }
}
</script>

<style scoped>
.pageview{
    height: 650px;
    border: 1px solid #ccc;
    margin: 30px;
}
.header{
  padding: 0;
}
.siderbar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;

}

</style>
