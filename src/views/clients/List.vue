<template>
  <div class="clients">
    <el-tabs
      v-model="activeName"
      v-loading="loading"
      type="card"
      @tab-click="handleTabChange"
    >
      <el-tab-pane
        label="MQTT"
        name="MQTT"
      />
      <el-tab-pane
        label="COAP"
        name="COAP"
      />
      <el-tab-pane
        label="HTTP"
        name="HTTP"
      />
    </el-tabs>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="状态"
        width="60"
      >
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
          >
            <el-tag
              :type="scope.row.onLine ? 'success':'error'"
              size="medium"
            >{{ scope.row.onLine | filterOnline }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="设备id"
        width="150"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
        width="180"
        prop="name"
      />
      <el-table-column
        label="描述"
        min-width="180"
        prop="info"
        show-overflow-tooltip
      />
      <el-table-column
        width="250"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDetail(scope.$index, scope.row)"
          >详细</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        class="pagination"
        :current-page.sync="query.page"
        background
        layout="prev, pager, next"
        :total="totalElements"
        @current-change="handleCurrentChange"
      />
      <el-button
        style="margin:3px"
        size="small"
        icon="el-icon-plus"
        @click="handleCreate"
      >添加设备</el-button>
    </div>
    <create
      :visible="createDialogdShow"
      :edit-data="editData"
      @onClose="onCreateColse"
    />
  </div>
</template>

<script>
import { getCurrentUserClient, deleteClient } from '@/api/client'
import Create from './Create'
const defaultQuery = {
  type: 'MQTT',
  page: 1,
  count: 10
}
export default {
  components: {
    Create
  },
  filters: {
    filterOnline: v => (v ? '在线' : '离线')
  },
  data() {
    return {
      query: Object.assign({}, defaultQuery),
      activeName: 'MQTT',
      totalElements: 0,
      tableData: [],
      createDialogdShow: false,
      editData: {},
      loading: false
    }
  },
  created() {
    this._getList()
  },
  methods: {
    handleEdit(index, row) {
      this.createDialogdShow = true
      this.editData = Object.assign({}, row)
    },
    handleDetail(index, row) {
      console.log(row)
      this.$router.push(`/client/detail?id=${row.id}&type=${this.activeName}`)
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteClient(row.id).then(res => {
            if (res.data.sate !== 1) {
              this.$message.error(res.data.message)
            }
            this._getList()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    handleCreate() {
      this.editData = {}
      this.createDialogdShow = true
    },
    handleCurrentChange(page) {
      this.query.page = page
      this._getList()
    },
    handleTabChange() {
      this.query.type = this.activeName
      this._getList()
    },
    onCreateColse(value) {
      if (value) {
        this._getList()
      }
      this.createDialogdShow = false
    },
    _getList() {
      const { type, page, count } = this.query
      this.loading = true
      getCurrentUserClient(type, page - 1, count)
        .then(res => {
          this.loading = false
          const data = res.data
          if (res.data.state === 1) {
            this.tableData = data.data.content
            this.totalElements = data.data.totalElements
          }
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: inline-block;
}
</style>
