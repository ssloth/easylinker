<template>
  <div class="log-list">
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      :cell-style="{padding:'5px 0'}"
    >
      <el-table-column
        width="250"
        label="操作"
        style="padding:0;margin:0"
      >
        <template slot-scope="scope">
          <log-item
            :date="scope.row.createTime | filterDate"
            :info="scope.row.info"
            :event="scope.row.cause"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      :current-page.sync="query.page"
      layout="prev, pager, next"
      :total="totalElements"
      small
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import LogItem from './LogItem'
import { getLogs } from '@/api/user'
import { parseTime } from '@/utils'
const defaultQuery = {
  type: 'MQTT',
  page: 1
}
export default {
  name: 'LogList',
  components: { LogItem },
  filters: {
    filterDate(value) {
      return parseTime(value)
    }
  },
  data() {
    return {
      query: Object.assign({}, defaultQuery),
      totalElements: 0,
      tableData: []
    }
  },
  created() {
    this._getList()
  },
  methods: {
    handleCurrentChange(page) {
      this.query.page = page
      this._getList()
    },
    _getList() {
      this.loading = true
      const { page, count } = this.query
      getLogs(page - 1, count).then(res => {
        this.loading = false
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        const data = res.data.data
        this.tableData = data.content
        this.totalElements = data.totalElements
      })
    }
  }
}
</script>
