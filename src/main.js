// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/Login.css'
//import './assets/github_contribution'
import './assets/github_contribution_graph.css'
import VCharts from 'v-charts'
//import Element from 'element-ui'
//import 'elment-ui/lib/theme-chalk/index.css'
import VueCalendarHeatmap from 'vue-calendar-heatmap'


Vue.use(BootstrapVue)

Vue.use(VueAxios, axios)

Vue.use(VCharts)

Vue.use(VueCalendarHeatmap)


//Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
