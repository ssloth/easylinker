<template>

  <el-form
    ref="ruleForm"
    :model="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      label="邮箱"
      prop="email"
    >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item
      label="短信"
      prop="phone"
    >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
      >保存设置</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: null,
        phone: null
      }
    }
  },
  methods: {
    submitForm(formName) {},
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
</style>
