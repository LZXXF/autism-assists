import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserData from '@/components/UserData'
import LeftNavigator from '@/components/LeftNavigator'
import Login from '@/components/Login'
import PatientData from '@/components/PatientData'
import Patient1 from '@/components/Patient1'
import Test from '@/components/Test'
import PatientEventData1 from '@/components/PatientEventData1'
import PatientDataTest from '@/components/PatientDataTest'
import Params from '@/components/Params'

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
      path: '/PatientData',
      name: 'PatientData',
      component: PatientData,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Patient1',
      name: 'Patient1',
      component: Patient1,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/PatientEventData1/:pid/:first_name/:last_name',
      name: 'PatientEventData1',
      component: PatientEventData1,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/PatientDataTest',
      name: 'PatientDataTest',
      component: PatientDataTest,
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
    }
  ]
})
