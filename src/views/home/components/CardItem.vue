<template>
  <div class="card-item" :class="[isLevel?'level':'vertical']">
    <template v-if="!isLevel">
      <div class="number">{{number}}</div>
      <div class="text">{{text}}</div>
    </template>
    <template v-else>
      <div class="text">{{text}}</div>
      <div class="number">{{number}}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLevel: function () { return this.direction == "level" }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  margin: 5px;
  background: #f8f8f8;
  text-align: center;
  border: 1px solid #ffffff;
  font-size: 0.9em;

  &:hover {
    background: #ffffff;
    border: 1px solid #7cd4e4;
  }
  .number {
    color: #aaaaaa;
  }
  .text {
    color: #666666;
  }

  &.vertical {
    .text {
      height: 60px;
      line-height: 60px;
    }
    .number {
      font-size: 2em;
      height: 75px;
      line-height: 75px;
    }
  }

  &.level {
    display: flex;
    height: 65px;
    line-height: 60px;
    .number {
      flex: 3;
    }
    .text {
      font-size: 0.9em;
      flex: 5;
    }
  }
}

.level {
}
</style>
