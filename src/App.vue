<template>
  <div id="app">

    <!-- ******** LANDING PAGE ******** -->

    <!-- <HeaderComponent></HeaderComponent>
    <LandingPage></LandingPage>
    <FooterComponent></FooterComponent> -->


    <!-- ******** FACULTY PROFILE ******** -->

    <HeaderComponent></HeaderComponent>
    <ProfileBanner></ProfileBanner>
    <router-view/>
    <FooterComponent></FooterComponent>




  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'
import ProfileBanner from '@/components/ProfileBanner'
import LandingPage from '@/components/LandingPage'

export default {
  name: 'App',
  components:{
    HeaderComponent, FooterComponent, ProfileBanner, LandingPage
  }
}
</script>

<style>


</style>
