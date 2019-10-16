import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserData from '@/components/UserData'
import LeftNavigator from '@/components/LeftNavigator'
import Login from '@/components/Login'
import PatientData from '@/components/PatientData'
import Patient1 from '@/components/Patient1'
import Test from '@/components/Test'
import PatientEventData from '@/components/PatientEventData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }

    },
    {
      path: '/UserData',
      name: 'UserData',
      component: UserData
    },
    {
      path: '/LeftNavigator',
      name: 'LeftNavigator',
      component: LeftNavigator
    },
    {
      path: '/PatientData',
      name: 'PatientData',
      component: PatientData
    },
    {
      path: '/Patient1',
      name: 'Patient1',
      component: Patient1
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/PatientEventData',
      name: 'PatientEventData',
      component: PatientEventData
    }
  ]
})
