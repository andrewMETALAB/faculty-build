<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'

export default {
  name: 'App',
  components:{
    HeaderComponent
  }
}
</script>

<style>


</style>
