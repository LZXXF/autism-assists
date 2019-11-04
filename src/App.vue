<template>
  <div id="app">
    <el-container v-if="$route.meta.keepAlive">
      <el-container>
        <el-aside>
          <!-- 侧边栏 -->
          <keep-alive>
            <div class="sidenav">
              <a href="#dashboard">Dashboard</a>
              <a href="#organizations">Organizations</a>
              <a href="#/UserData">Users</a>
              <a href="#/PatientData">Patients</a>
              <a href="#settings">Settings</a>
            </div>
          </keep-alive>
        </el-aside>
        <el-main>
          <!-- Body -->
           <router-view class="main"></router-view>
        </el-main>
      </el-container>
    </el-container>
 
    <!-- Login -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
   </div>
</template>
 
<script>
import LeftNavigator from './components/LeftNavigator.vue';
 
export default{
    components: {
        left: LeftNavigator
      }
}

</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
 