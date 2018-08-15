<template>
  <div id="app">

    <!-- ******** HOME using ROUTER ******** -->

    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>






    <!-- ******** LANDING PAGE ******** -->

    <!-- <HeaderComponent></HeaderComponent>
    <Home></Home>
    <FooterComponent></FooterComponent> -->






    <!-- ******** SEARCH PAGE ******** -->

    <!-- <HeaderComponent></HeaderComponent>
    <SearchPage></SearchPage>
    <FooterComponent></FooterComponent> -->






    <!-- ******** SEARCH BY DEPARTMENT ******** -->

    <!-- <HeaderComponent></HeaderComponent>
    <SearchByDept></SearchByDept>
    <FooterComponent></FooterComponent> -->







    <!-- ***** DEPARTMENT FACULTY PAGE ****** -->

    <!-- <HeaderComponent></HeaderComponent>
    <DepartmentFaculty></DepartmentFaculty>
    <FooterComponent></FooterComponent> -->







    <!-- ******** FACULTY PROFILE ******** -->

    <!-- <HeaderComponent></HeaderComponent>
    <ProfileBanner></ProfileBanner>
    <router-view/>
    <FooterComponent></FooterComponent> -->




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



export default {
  name: 'App',
  components:{
    HeaderComponent, FooterComponent, ProfileBanner, Home, SearchPage, SearchByDept, DepartmentFaculty
  }
}
</script>

<style>



</style>
