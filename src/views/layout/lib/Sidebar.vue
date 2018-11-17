<template>
  <el-menu
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="isCollapse"
    mode="vertical"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
  </el-menu>
</template>

<script>
import { SidebarItem } from "./SidebarItem";
import routers from '@/router/index';
export default {
  components: { SidebarItem },
  computed: {

  }
}
</script>

<style>
</style>
