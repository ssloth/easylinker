<template>
  <div class="split-bar">
    <div class="title">{{title}}</div>
    <div class="aside-title">{{asideTitle}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "asideTitle"]
}
</script>

<style lang="scss" scoped>
.split-bar {
  margin: 8px 0;
  .title {
    position: relative;
    padding: 0 8px;
    color: #333333;
    font-size: 0.85em;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 20%;
      display: block;
      width: 3px;
      height: 70%;
      background: #97bbd8;
    }
  }
}
</style>
