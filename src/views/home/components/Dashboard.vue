
<template>
  <div class="active-client">
    <el-card
      body-style="padding:10px"
      shadow="never"
    >
      <div class="header">
        <span>设备数据</span>
      </div>
      <div class="echars-wrapper">
        <div
          ref="echarts"
          class="echarts"
        />
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.active-client {
  .echars-wrapper {
    width: 100%;
    height: 350px;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<script>
import echarts from 'echarts'
import { getClientChartsData } from '@/api/charts'

const defaultOption = {
  tooltip: {
    trigger: 'axis',
    position: function(pt) {
      return [pt[0], '10%']
    }
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: null
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10,
      handleIcon:
        'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }
  ],
  grid: {
    top: 30,
    x: 30,
    x2: 0,
    y2: 60
  },
  series: [
    {
      name: '模拟数据',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#e883ae'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#E684AE'
          },
          {
            offset: 0.5,
            color: '#79CBCA'
          },
          {
            offset: 1,
            color: '#77A1D3'
          }
        ])
      },
      data: null
    }
  ]
}

export default {
  data() {
    return {
      echarts: null,
      option: Object.assign({}, defaultOption)
    }
  },
  mounted() {
    this._initCharts()
    this._getData()
  },
  methods: {
    _initCharts() {
      this.echarts = echarts.init(this.$refs.echarts)
    },
    _getData() {
      getClientChartsData().then(res => {
        var base = +new Date(1968, 9, 3)
        var oneDay = 24 * 3600 * 1000
        var dateq = []
        var dataq = [Math.random() * 300]
        for (var i = 1; i < 20000; i++) {
          var now = new Date((base += oneDay))
          dateq.push(
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
          )
          dataq.push(Math.round((Math.random() - 0.5) * 20 + dataq[i - 1]))
        }
        const { data, date } = res.data
        this.option.xAxis.data = date
        this.option.series[0].data = data
        this.echarts.setOption(this.option)
      })
    }
  }
}
</script>

