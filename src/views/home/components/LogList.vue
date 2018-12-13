<template>
  <div class="log-list">
    <log-item
      v-for="(logItem,key) in logList"
      :key="key"
      :date="logItem.date"
      :device-id="logItem.deviceId"
      :event="logItem.event"
    />
  </div>
</template>

<script>
import LogItem from './LogItem'
export default {
  name: 'LogList',
  components: { LogItem },
  data() {
    return {
      logList: [
        {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'DISCONNECT'
        }, {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'CONNECT'
        }, {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'DISCONNECT'
        }, {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'DISCONNECT'
        }, {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'DISCONNECT'
        }, {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'DISCONNECT'
        }, {
          date: '2018-11-09 11:40:46',
          deviceId: '1534664156553',
          event: 'DISCONNECT'
        }
      ]
    }
  }
}
</script>
