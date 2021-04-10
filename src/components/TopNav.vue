<template>
  <div class="topnav">
    <div class="content"> 
      <Hamburger class="openbt"/>
      <search-box class="search" />
    </div>
    
  </div>
</template>

<script>
import Hamburger from './hamburger.vue'
import SearchBox from './SearchBox.vue'
export default {
    components:{
        Hamburger,
        SearchBox,
    }
}
</script>

<style scoped>
.openbt{
  margin: auto 0;
}
.topnav{
  height: 60px;
  /* background-color: aquamarine; */
  box-shadow: 0 3px 3px #ccc;
}
.content{
  display: flex;
  justify-content: space-between;
  height: 100%;
}

</style>