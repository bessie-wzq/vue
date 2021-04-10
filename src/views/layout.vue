<template>
  <el-container>
  <el-aside width="200px"><SiderBar class="siderbar"/></el-aside>
  <el-container>
    <el-header class="header"><TopNav /></el-header>
    <el-main class="pageview">
        <router-view  :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import TopNav from '../components/TopNav'
import SiderBar from '../components/SiderBar'

export default {
    components:{
    SiderBar,
    TopNav,
  }
}
</script>

<style scoped>
.pageview{
    height: 650px;
    border: 1px solid #ccc;
    margin: 50px;
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
