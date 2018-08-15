import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProfileHome from '@/components/ProfileHome'
import ProfileClasses from '@/components/ProfileClasses'
import SearchPage from '@/components/SearchPage'
import SearchByDept from '@/components/SearchByDept'
import DepartmentFaculty from '@/components/DepartmentFaculty'
import FacultyProfile from '@/components/FacultyProfile'
import FacultyProfileClasses from '@/components/FacultyProfileClasses'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/SearchPage',
      name: '/SearchPage',
      component: SearchPage
    },
    {
      path:'/SearchByDept',
      name: '/SearchByDept',
      component: SearchByDept
    },
    {
      path:'/DepartmentFaculty',
      name: '/DepartmentFaculty',
      component: DepartmentFaculty
    },
    {
      path:'/FacultyProfile',
      name: '/FacultyProfile',
      component: FacultyProfile,
      children: [ {
        path: 'ProfileHome',
        name: 'ProfileHome',
        component: ProfileHome
      },
      {
        path: 'ProfileClasses',
        name: 'ProfileClasses',
        component: ProfileClasses
      }]
    },
    {
      path:'/FacultyProfileClasses',
      name: '/FacultyProfileClasses',
      component: FacultyProfileClasses
    },
  ]
})
