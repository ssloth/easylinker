<template>
  <div class="home">
    <div class="console">
      <ui-split-bar title="综述" />
      <el-row :gutter="24">
        <el-col
          :lg="12"
          :md="24"
        >
          <el-card
            body-style="padding:10px"
            shadow="never"
          >
            <div class="header">
              <span>设备量</span>
            </div>
            <el-row>
              <el-col :span="7">
                <card-item
                  :number="0"
                  :text="'设备总量'"
                />
              </el-col>
              <el-col :span="7">
                <card-item
                  :number="0"
                  :text="'在线设备'"
                />
              </el-col>
              <el-col :span="10">
                <card-item
                  :direction="'level'"
                  :number="0"
                  :text="'掉线项目'"
                />
                <card-item
                  :direction="'level'"
                  :number="0"
                  :text="'离线项目'"
                />
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col
          :lg="12"
          :md="24"
        >
          <server-status />
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
import CardItem from './components/CardItem'
import LogList from './components/LogList'
import ServerStatus from './components/ServerStatus'
import { getsystemInfo } from '@/api/system'
export default {
  components: {
    UiSplitBar,
    CardItem,
    LogList,
    ServerStatus
  },
  created() {
    this.getsystemInfo()
  },
  methods: {
    getsystemInfo() {
      getsystemInfo().then(res => {
        console.log(res)
      })
    }
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
