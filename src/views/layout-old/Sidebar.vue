<template>
  <el-menu
    class="el-menu"
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="isCollapse"
    mode="vertical"
    background-color="#222229"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <el-menu-item
      :disabled="true"
      index="0"
    >
      <div
        slot="title"
        class="logo"
      >EasyLinker</div>
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
import SidebarItem from './components/SidebarItem'
import { mapGetters } from 'vuex'
import { constantRouterMap } from '@/router'
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created() {
    this.constantRouterMap = constantRouterMap
  }
}
</script>
