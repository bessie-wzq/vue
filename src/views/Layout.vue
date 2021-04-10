<template>
  <div>
    <sider-bar class="siderbar"/>
    <div class="right">
        <TopNav class="top"/>
    </div>
    
  </div>
</template>

<script>
import SiderBar from '../components/SiderBar'
import TopNav from '../components/TopNav'
export default {
  components:{
    SiderBar,
    TopNav,
  }
}
</script>

<style scoped>
.siderbar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;

}
.right{
    position: relative;
    /* left: 200px; */
    /* margin-top: 15px; */
    margin-left: 200px;
}

</style>