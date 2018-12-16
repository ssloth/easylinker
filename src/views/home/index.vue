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
                  :number="count.mqttTotal"
                  :text="'MQTT总量'"
                />
              </el-col>
              <el-col :span="7">
                <card-item
                  :number="count.mqttOnline"
                  :text="'MQTT在线'"
                />
              </el-col>
              <el-col :span="10">
                <card-item
                  :direction="'level'"
                  :number="count.http"
                  :text="'HTTP设备'"
                />
                <card-item
                  :direction="'level'"
                  :number="count.coap"
                  :text="'coap设备'"
                />
              </el-col>
            </el-row>
          </el-card>
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
import CardItem from './components/CardItem'
import LogList from './components/LogList'
import ServerStatus from './components/ServerStatus'
import { getServerInfo, getDeviceOverViewInfo } from '@/api/user'
export default {
  components: {
    UiSplitBar,
    CardItem,
    LogList,
    ServerStatus
  },
  data() {
    return {
      system: {
        cpu: 0,
        ram: 0,
        mem: 0
      },
      count: {
        mqttTotal: 0,
        mqttnline: 0,
        http: 0,
        coap: 0
      }
    }
  },
  created() {
    this._getServerInfo()
    this._getDeviceOverViewInfo()
  },
  methods: {
    _getServerInfo() {
      getServerInfo().then(res => {
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        // const {
        //   availableRAM,
        //   freeMemory,
        //   // maxMemory,
        //   totalMemory,
        //   totalRAM
        // } = res.data.data
        // this.system.cpu = parseInt(freeMemory / totalMemory)
        // this.system.ram = parseInt(availableRAM / totalRAM)
        // this.system.mem = parseInt(freeMemory / totalMemory)
      })
    },
    _getDeviceOverViewInfo() {
      getDeviceOverViewInfo().then(res => {
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        const data = res.data.data
        this.count.mqttTotal = data.mqtt.total
        this.count.mqttOnline = data.mqtt.online
        this.count.http = data.http
        this.count.coap = data.coap
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
