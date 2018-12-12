<template>
  <el-dialog
    title="创建设备 "
    :visible="visible"
    width="50%"
    :before-close="handleClose"
  >
    <div class="form">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="设备名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="设备描述">
          <el-input v-model="form.info" />
        </el-form-item>
        <el-form-item label="添加规则">
          <el-tag
            v-for="(item,index) in form.acls"
            :key="index"
            closable
          >
            {{ item.acl | aclFilter }}
          </el-tag>
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="aclVisible = true"
          />
        </el-form-item>
      </el-form>
    </div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="handleClose">取 消</el-button>
      <el-button
        type="primary"
        @click="handleSubmit"
      >确 定</el-button>
    </span>
    <el-radio-group
      v-show="aclVisible"
      v-model="acl"
      @change="handleAclChange"
    >
      <el-radio :label="1">入</el-radio>
      <el-radio :label="2">出</el-radio>
      <el-radio :label="3">双向</el-radio>
    </el-radio-group>
  </el-dialog>

</template>

<script>
import { createClient } from '@/api/client'
import { ACL_MAP } from '@/config'
const defaultGroup = [
  {
    name: 'G',
    acl: 1
  }
]
export default {
  filters: {
    aclFilter(value) {
      return ACL_MAP[value]
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        name: '',
        info: '',
        acls: [],
        group: Object.assign([], defaultGroup)
      },
      acl: null,
      aclVisible: false
    }
  },
  methods: {
    handleSubmit() {
      createClient(this.form).then(res => {
        if (res.data.state !== 200) {
          return this.$message.error(res.data.message)
        }
        this.$message.success('创建成功！')
      })
    },
    handleClose() {
      this.$emit('onClose', false)
    },
    handleAddAcl(id) {

    },
    handleAclChange(id) {
      this.form.acls.push({
        acl: id
      })
      this.acl = null
      this.aclVisible = false
    }
  }
}
</script>

<style>
</style>
