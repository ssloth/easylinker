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
              :percentage="80"
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
              :percentage="10"
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
              :percentage="50"
              color="#c77171"
            />
            <div class="label">NET</div>
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
export default {

}
</script>
