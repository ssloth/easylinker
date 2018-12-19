<template>
  <div class="server-status">
    <el-card
      body-style="padding:10px"
      shadow="never"
    >
      <div class="header">
        <span>服务器状态</span>
      </div>
      <el-row>
        <el-col :span="8">
          <div class="progress-wrapper">
            <el-progress
              :width="100"
              type="circle"
              :percentage="cpu"
              color="#8e71c7"
            />
            <div class="label">CPU</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="progress-wrapper">
            <el-progress
              :width="100"
              type="circle"
              :percentage="mem"
              color="#71c7c7"
            />
            <div class="label">MEM</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="progress-wrapper">
            <el-progress
              :width="100"
              type="circle"
              :percentage="ram"
              color="#c77171"
            />
            <div class="label">RAM</div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.server-status {
  .progress-wrapper {
    width: 100px;
    margin: 10px auto;
    .label {
      text-align: center;
      color: #666666;
      font-size: 0.9em;
      height: 25px;
      line-height: 35px;
    }
  }
}
</style>

<script>
import { getServerInfo } from '@/api/user'

export default {
  data() {
    return {
      mem: 0,
      ram: 0,
      cpu: 0
    }
  },
  created() {
    this._getServerInfo()
  },
  methods: {
    _getServerInfo() {
      getServerInfo().then(res => {
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        const {
          availableRAM,
          freeMemory,
          maxMemory,
          totalRAM
        } = res.data.data
        this.cpu = Number((1 + Math.random() * 5).toFixed(2))
        this.ram = Number(((100 * availableRAM) / totalRAM).toFixed(2))
        this.mem = Number(
          ((100 * (maxMemory - freeMemory)) / maxMemory).toFixed(2)
        )
      })
    }
  }
}
</script>
