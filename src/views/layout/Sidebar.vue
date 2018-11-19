<template>
  <el-menu
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="isCollapse"
    mode="vertical"
    background-color="#222229"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <el-menu-item :disabled="true" index="0">
      <div class="logo" slot="title">EasyLinker</div>
    </el-menu-item>
    <sidebar-item
      v-for="route in constantRouterMap"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script>
import SidebarItem from "./lib/SidebarItem";
import { mapGetters } from 'vuex';
import { constantRouterMap } from "@/router";
export default {
  data() {
    return {}
  },
  created() {
    this.constantRouterMap = constantRouterMap;
  },
  name: "Sidebar",
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      // return !this.sidebar.opened
    }
  }
}
</script>

<style scoped>
.logo {
  text-align: center;
}
</style>
