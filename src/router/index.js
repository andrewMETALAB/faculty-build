import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classes from '@/components/Classes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes
    }
  ]
})
