<template>

  <el-form
    ref="ruleForm"
    :model="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      label="原密码"
      prop="oldPassword"
    >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item
      label="新密码"
      prop="password"
    >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item
      label="新密码"
      prop="phone"
    >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
      >提交更改</el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
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
