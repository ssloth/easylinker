<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AppMain from "./AppMain";
export default {
  name: 'Layout',
  components: {
    Sidebar, Navbar, AppMain
  }
}
</script>

<style>
</style>
