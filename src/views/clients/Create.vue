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
        <el-form-item label="设备类型">
          <el-select
            v-model="form.type"
            style="width:100%"
            clearable
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="添加规则">
          <el-tag
            v-for="(item,index) in form.acls"
            :key="index"
            style="margin:3px"
            closable
            :disable-transitions="false"
            @close="handleTagRemove(index)"
          >{{ item.acl | aclFilter }}</el-tag>
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
import { createClient, uploadClient } from '@/api/client'
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
    },
    editData: {
      type: Object,
      default: _ => ({})
    }
  },
  data() {
    return {
      form: {
        name: '',
        info: '',
        topic: '',
        type: '',
        acls: [],
        group: Object.assign([], defaultGroup)
      },
      acl: null,
      aclVisible: false
    }
  },
  watch: {
    editData() {
      this.form = Object.assign(this.form, this.editData)
    }
  },
  created() {
    this.options = [
      'MQTT', 'HTTP', 'COAP', 'UDP', 'TCP'
    ]
  },
  methods: {
    handleSubmit() {
      const { id } = this.form
      if (id) {
        this._createClient()
      } else {
        this._uploadClient()
      }
    },
    handleClose() {
      this.$emit('onClose', false)
    },
    handleTagRemove(index) {
      this.form.acls.splice(index, 1)
    },
    handleAclChange(id) {
      this.form.acls.push({
        acl: id
      })
      this.acl = null
      this.aclVisible = false
    },
    _createClient() {
      const { name, info, acls, group, type } = this.form
      createClient(name, info, acls, group, type).then(res => {
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        this.form = {
          name: '',
          info: '',
          acls: [],
          topic: '',
          group: Object.assign([], defaultGroup)
        }
        this.$message.success('创建成功！')
        this.$emit('onClose', true)
      })
    },
    _uploadClient() {
      const { id, name, info, topic, aclEntries, type, group } = this.form
      uploadClient(id, name, info, topic, aclEntries, type, group).then(res => {
        if (res.data.state !== 1) {
          return this.$message.error(res.data.message)
        }
        this.form = {
          name: '',
          info: '',
          acls: [],
          topic: '',
          group: Object.assign([], defaultGroup)
        }
        this.$message.success('更新成功！')
        this.$emit('onClose', true)
      })
    }
  }
}
</script>

<style>
</style>
