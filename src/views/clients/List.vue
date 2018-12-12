<template>
  <div class="clients">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="状态"
        width="80"
      >
        <template slot-scope="scope">
          <el-popover
            trigger="hover"
            placement="top"
          >
            <p>{{ scope.row.onLine | filterOnline }}</p>
            <div
              slot="reference"
              class="name-wrapper"
            >
              <el-tag
                :type="scope.row.onLine ? 'success':'error'"
                size="medium"
              >{{ scope.row.onLine | filterOnline }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="设备id"
        width="300"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.clientId }}</span>
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
  page: 0,
  count: 10
}
export default {
  components: {
    Create
  },
  filters: {
    filterOnline: v => v ? '在线' : '离线'
  },
  data() {
    return {
      query: Object.assign({}, defaultQuery),
      totalElements: 0,
      tableData: [],
      createDialogdShow: false,
      editData: {}
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
      this.$router.push(`/client/detail?id=${row.id}`)
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteClient(row.id).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
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
    onCreateColse() {
      this.createDialogdShow = false
    },
    _getList() {
      const { page, count } = this.query
      getCurrentUserClient(page, count).then(res => {
        const data = res.data
        if (res.data.state === 1) {
          this.tableData = data.data.content
          this.totalElements = data.data.totalElements
        }
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: inline-block;
}
</style>
