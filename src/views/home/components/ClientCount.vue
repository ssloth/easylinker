<template>
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
          :number="http"
          :text="'http'"
        />
      </el-col>
      <el-col :span="7">
        <card-item
          :number="coap"
          :text="'coap'"
        />
      </el-col>
      <el-col :span="10">
        <card-item
          :direction="'level'"
          :number="mqttTotal"
          :text="'MQTT总量'"
        />
        <card-item
          :direction="'level'"
          :number="mqttnOnline"
          :text="'MQTT在线'"
        />
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import CardItem from './CardItem'
import { getDeviceOverViewInfo } from '@/api/user'

export default {
  components: {
    CardItem
  },
  data() {
    return {
      mqttTotal: 0,
      mqttnOnline: 0,
      http: 0,
      coap: 0
    }
  },
  created() {
    this._getDeviceOverViewInfo()
  },
  methods: {
    _getDeviceOverViewInfo() {
      getDeviceOverViewInfo().then(res => {
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        const data = res.data.data
        this.mqttTotal = data.mqtt.total
        this.mqttOnline = data.mqtt.online
        this.http = data.http
        this.coap = data.coap
      })
    }
  }
}
</script>

<style>
</style>
