<template>
  <div class="log-list">
    <log-item
      :key="key"
      v-for="(logItem,key) in logList"
      :date="logItem.date"
      :deviceId="logItem.deviceId"
      :event="logItem.event"
    ></log-item>
  </div>
</template>

<script>
import LogItem from "./lib/LogItem";
export default {
  name: "LogList",
  data() {
    return {
      logList: [
        {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "DISCONNECT"
        }, {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "CONNECT"
        }, {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "DISCONNECT"
        }, {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "DISCONNECT"
        }, {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "DISCONNECT"
        }, {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "DISCONNECT"
        }, {
          date: "2018-11-09 11:40:46",
          deviceId: "1534664156553",
          event: "DISCONNECT"
        },
      ]
    }
  },
  components: { LogItem }
}
</script>
