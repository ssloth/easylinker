<template>
  <div class="home">
    <div class="console">
      <ui-split-bar title="综述" />
      <el-row :gutter="24">
        <el-col
          :lg="12"
          :md="24"
        >
          <client-count />
        </el-col>
        <el-col
          :lg="12"
          :md="24"
        >
          <server-status
            :cpu="system.cpu"
            :ram="system.ram"
            :mem="system.mem"
          />
        </el-col>
      </el-row>
    </div>
    <div class="aside">
      <ui-split-bar title="日志" />
      <el-card
        body-style="padding:10px"
        shadow="never"
      >
        <log-list :data="'data'" />
      </el-card>
    </div>
  </div>
</template>

<script>
import UiSplitBar from '@/components/UI/Split/SplitBar'
import LogList from './components/LogList'
import ServerStatus from './components/ServerStatus'
import ClientCount from './components/ClientCount'
export default {
  components: {
    UiSplitBar,
    ClientCount,
    LogList,
    ServerStatus
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  .console {
    flex: 1;
    margin: 0 10px;
    .header {
      height: 25px;
      line-height: 25px;
      color: #555555;
      font-size: 0.9em;
    }
  }
  .aside {
    flex: 0 0 300px;
  }
}
</style>
