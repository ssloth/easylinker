<template>
  <div class="log-item">
    <span
      :class="status"
      class="log-text"
    >
      [
      <span>{{ event }}</span>
      ]
    </span>
    <span class="date">{{ date }}</span>
    <div class="info">{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: 'LogItem',
  // eslint-disable-next-line
  props: ['date', 'info', 'event'],
  computed: {
    status() {
      return this.event === '设备下线' ? 'disconnent' : 'connect'
    }
  }
}
</script>

<style lang="scss" scoped>
.log-item {
  .date {
    font-size: 0.9em;
    color: #999999;
  }
  .info{
    font-size: 0.8em;
    color: #344454;
  }
  .log-text {
    font-size: 0.96em;
    text-align: center;

    span {
      display: inline-block;
      width: 50px;
      text-align: center;
      font-size: 0.88em;
    }

    &.disconnent {
      color: #b55b5b;
    }

    &.connect {
      color: #5bb563;
    }
  }
}
</style>

