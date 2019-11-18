import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserData from '@/components/UserData'
import LeftNavigator from '@/components/LeftNavigator'
import Login from '@/components/Login'
import PatientData from '@/components/PatientData'
import PatientEventData from '@/components/PatientEventData'
import Params from '@/components/Params'
import SleepCharts from '@/components/SleepCharts'
import SleepBarCharts from '@/components/SleepBarCharts'
import ActivityCalendar from '@/components/ActivityCalendar'
import CalendarHeatmap from '@/components/CalendarHeatmap'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },

    {
      path: '/UserData',
      name: 'UserData',
      component: UserData,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/LeftNavigator',
      name: 'LeftNavigator',
      component: LeftNavigator
    },
    {
      path: '/PatientEventData/:pid/:first_name/:last_name',
      name: 'PatientEventData',
      component: PatientEventData,
      meta: {
        keepAlive: true
      }
    },

    {
      path: '/SleepCharts/:pid/:first_name/:last_name',
      name: 'SleepCharts',
      component: SleepCharts,
      meta: {
        keepAlive: true
      }
    },

    {
      path: '/SleepBarCharts/:pid/:first_name/:last_name',
      name: 'SleepBarCharts',
      component: SleepBarCharts,
      meta: {
        keepAlive: true
      }
    },

    {
      path: '/PatientData',
      name: 'PatientData',
      component: PatientData,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Params/:pid',
      name: 'Params',
      component: Params,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/ActivityCalendar',
      name: 'ActivityCalendar',
      component: ActivityCalendar,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/CalendarHeatmap/:pid',
      name: 'CalendarHeatmap',
      component: CalendarHeatmap,
      meta: {
        keepAlive: true
      }
    }


  ]
})
