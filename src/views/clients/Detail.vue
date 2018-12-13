<template>
  <div class="client-detail">
    <el-row :gutter="20">
      <el-col
        :lg="8"
        md:="24"
      >
        <el-card
          body-style="padding:10px"
          shadow="never"
        >
          <div class="title">
            设备信息
          </div>
          <ul class="info-list">
            <li
              v-for="(item,index) in detail"
              :key="index"
            >
              <span class="text-muted"> {{ item[0] }}：</span>
              <span class="text"> {{ item[1] }} </span>
            </li>
          </ul>
        </el-card>

        <el-card
          style="margin-top:20px"
          shadow="never"
        >
          <div class="title">
            设备操作
          </div>
        </el-card>
      </el-col>
      <el-col
        :lg="16"
        md:="24"
      >
        <el-card
          body-style="padding:10px"
          shadow="never"
        >
          <el-table
            :data="tableData"
            style="width: 100%"
            :max-height="tableHeight"
          >
            <el-table-column
              label="时间"
              width="110"
              prop="createTime"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.createTime | filtersDate }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="信息"
              width="100"
              prop="info"
            />
            <el-table-column
              label="数据"
              min-width="180"
              prop="data"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <span>{{ scope.row.data | filtersData }}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100"
            >
              <template slot-scope="scope">
                <!-- <el-button
                  type="text"
                  size="small"
                  @click.native.prevent="handleView(scope.row)"
                >
                  查看
                </el-button> -->
                <el-button
                  :class="'hook-copy-'+scope.row.id"
                  type="text"
                  size="small"
                  :data-clipboard-text="scope.row.data | filtersData"
                  @click.native.prevent="handleCopy(scope.row)"
                >
                  复制
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="pagination"
            :current-page.sync="query.page"
            background
            layout="prev, pager, next"
            :total="totalElements"
            @current-change="handleCurrentChange"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClientInfo, getClientData } from '@/api/client'
import { parseTime } from '@/utils'
import Clipboard from 'clipboard'
const defaultQuery = {
  page: 1,
  count: 10
}
export default {
  filters: {
    filtersData(value) {
      return JSON.stringify(value)
    },
    filtersDate(value) {
      return parseTime(new Date(value))
    }
  },
  data() {
    return {
      id: null,
      detail: [],
      tableData: [],
      query: Object.assign({}, defaultQuery),
      totalElements: 0
    }
  },
  computed: {
    tableHeight() {
      return window.screen.height - 250
    }
  },
  watch: {
    $route() {
      this._getDetail()
      this._getData()
    }
  },
  created() {
    this._getDetail()
    this._getData()
  },
  methods: {
    handleCopy(row) {
      const clipboard = new Clipboard('.hook-copy-' + row.id)
      clipboard.on('success', e => {
        this.$message.success('已复制到剪贴板！')
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        console.log('该浏览器不支持自动复制')
        clipboard.destroy()
      })
    },
    handleView(row) {

    },
    handleCurrentChange(page){
      this.query.page = page
      console.log('1')
      this._getData()
    },
    _getDetail() {
      const id = this.$route.query.id
      getClientInfo(id).then(res => {
        const data = res.data
        this.detail = []
        if (res.data.state === 1) {
          const ret = data.data
          this.detail.push(['设备Id', ret.id])
          this.detail.push(['名称', ret.name])
          this.detail.push(['描述', ret.info])
          this.detail.push(['数据量', ret.id])
        }
      }).catch(e => console.log(e))
    },
    _getData() {
      const id = this.$route.query.id
      const { page, count } = this.query
      getClientData(id, page - 1, count).then(res => {
        const { content, totalElements } = res.data.data
        this.tableData = content
        this.totalElements = totalElements
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.client-detail {
  padding: 10px;
  .info-list {
    li {
      line-height: 35px;
      height: 35px;
      border-bottom: 1px solid #eeeeee;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

.text-muted {
  font-size: 0.85em;
  color: #999999;
}

.text {
  font-size: 0.85em;
  color: #555555;
}

.pagination {
  display: inline-block;
}
</style>
