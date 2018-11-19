<template>
  <div class="panel-wrapper">
    <div class="title">{{title}}</div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style lang="scss" scoped>
.panel-wrapper {
  margin: 8px 10px;
  .title {
    border-left: 3px solid #97bbd8;
    padding: 0 8px;
    color: #333333;
    font-size: 0.85em;
  }
}
</style>
