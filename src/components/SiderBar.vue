<template>
    <el-row >
      <el-col  class="content">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo "
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-submenu index="1" class="home">
            <template slot="title">
              <span>首頁</span>
            </template>
          </el-submenu>
          <el-menu-item index="/home">
            <span slot="title">任務管理</span>
          </el-menu-item>
          <el-menu-item index="/dashbord">
            <span slot="title">日志</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">文檔</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">設置</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">修改密碼</span>
          </el-menu-item>

          <el-menu-item index="5">
            <span slot="title">文檔</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">文檔</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
  height: 100% 
}
.el-menu-vertical-demo{
  height: 100%;
}
.home{
  margin-top: 30px;
}
</style>