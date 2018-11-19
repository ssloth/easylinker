<template>
  <div class="home">
    <div class="console">
      <ui-split-bar :title="'综述'"></ui-split-bar>
      <el-row :gutter="20">
        <el-col :lg="12" :md="24">
          <el-card body-style="padding:10px" shadow="never">
            <div class="header">
              <span>设备量</span>
            </div>
            <el-row>
              <el-col :span="7">
                <card-item :number="'0'" :text="'设备总量'"></card-item>
              </el-col>
              <el-col :span="7">
                <card-item :number="'0'" :text="'在线设备'"></card-item>
              </el-col>
              <el-col :span="10">
                <card-item :direction="'level'" :number="'0'" :text="'掉线项目'"></card-item>
                <card-item :direction="'level'" :number="'0'" :text="'离线项目'"></card-item>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="12" :md="24">
          <server-status></server-status>
        </el-col>
      </el-row>
    </div>
    <div class="aside">
      <ui-split-bar :title="'日志'"></ui-split-bar>
      <el-card body-style="padding:10px" shadow="never">
        <log-list :data="'data'"></log-list>
      </el-card>
    </div>
  </div>
</template>

<script>
import UiSplitBar from "@/components/UI/Split/SplitBar";
import CardItem from "./CardItem";
import LogList from "./LogList";
import ServerStatus from "./ServerStatus";
export default {
  components: { UiSplitBar, CardItem, LogList, ServerStatus }
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

