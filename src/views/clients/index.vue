<template>
  <div class="group">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCurrentUserClient } from '@/api/client'
const defaultQuery = {
  page: 0,
  count: 10
}
export default {
  data() {
    return {
      query: Object.assign({}, defaultQuery),
      tableData: []
    }
  },
  created() {
    this._getList()
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    _getList() {
      let { page, count } = this.query
      getCurrentUserClient(page, count).then(res => {
        let data = res.data
        if (res.data.state === 1) {
          this.tableData = data.content
        }
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
