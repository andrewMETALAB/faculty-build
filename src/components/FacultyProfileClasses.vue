<template>
    <div>
        <ProfileBanner></ProfileBanner>
        <ProfileClasses></ProfileClasses>
    </div>
</template>
<script>

import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import ProfileBanner from '@/components/ProfileBanner'
import Home from '@/components/Home'
import SearchPage from '@/components/SearchPage'
import SearchByDept from '@/components/SearchByDept'
import DepartmentFaculty from '@/components/DepartmentFaculty'
import ProfileHome from '@/components/ProfileHome'
import ProfileClasses from '@/components/ProfileClasses'



export default {
    name: 'FacultyProfileClasses',
    components:{
    HeaderComponent, FooterComponent, ProfileBanner, Home, SearchPage, SearchByDept, DepartmentFaculty, ProfileHome, ProfileClasses
  }
}
</script>
