<template>
  <div id="app">
    <!-- 其他页 -->
    <el-container >
      <el-header>
        <!-- 导航栏 -->
          <header-nav></header-nav>
      </el-header>
    <el-container>
      <el-aside width="250px">
        <!-- 侧边栏 -->
          <left></left>
      </el-aside>
      <el-main>
        <!-- Body -->
         <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
 
    <!-- Login -->
    <!--
    <router-view ></router-view>
    -->
   </div>
</template>
 
<script>
/*
import left from './components/LeftNavigator.vue';
 
export default{
    components: {
        left: left
      }
}
 */
</script>
 