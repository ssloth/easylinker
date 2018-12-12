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
            max-height="450"
          >
            <el-table-column
              label="时间"
              width="150"
              prop="date"
            />
            <el-table-column
              label="数据"
              min-width="80"
              prop="data"
              show-overflow-tooltip
            />
            <el-table-column
              fixed="right"
              label="操作"
              width="100"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click.native.prevent="handleCopy(scope.row,this)"
                >
                  复制
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClientInfo, getClientData } from '@/api/client'
const defaultQuery = {
  page: 0,
  count: 10
}
export default {
  data() {
    return {
      detail: [],
      tableData: [],
      query: Object.assign({}, defaultQuery),
      pageable: {}
    }
  },
  created() {
    this._getDetail()
    this._getData()
  },
  methods: {
    handleCopy(row, e) {
      const input = document.createElement('input').value = row.data
      input.select()
      console.log(input.value, e)
      input.execCommand('Copy')
    },
    _getDetail() {
      const id = this.$route.query.id
      getClientInfo(id).then(res => {
        const data = res.data
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
      getClientData(id, page, count).then(res => {
        // const data = res.data.content
        const data = [{ date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }, { date: '2018-9-12 12:20:21', data: `{"data":{"content":[],"pageable":{"sort":{"sorted":true,"unsorted":false,"empty":false},"pageSize":10,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":0,"totalElements":0,"last":true,"first":true,"sort":{"sorted":true,"unsorted":false,"empty":false},"numberOfElements":0,"size":10,"number":0,"empty":true},"state":1,"message":"查询成功!"}` }]
        this.tableData = data
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
