<template>
  <div class="log-item">
    <div class="date">{{date}}</div>
    <span :class="status" class="log-text">
      [
      <span>{{event}}</span>
      ]
    </span>
    <span class="device-id">{{deviceId}}</span>
  </div>
</template>

<script>
export default {
  name: "LogItem",
  props: ["date", "deviceId", "event"],
  computed: {
    status: function () {
      return this.event == "DISCONNECT" ? "disconnent" : "connect";
    }
  }
}
</script>

<style lang="scss" scoped>
.log-item {
  margin-bottom: 10px;
  .date {
    font-size: 0.9em;
    color: #999999;
  }
  .device-id {
    color: #255555;
  }
  .log-text {
    font-size: 0.96em;
    text-align: center;

    span {
      display: inline-block;
      width: 88px;
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


