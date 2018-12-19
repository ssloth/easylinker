// import request from '@/utils/request'

export function getClientChartsData() {
  var date = []
  var data = [Math.random() * 300]
  var base = +new Date(1968, 9, 3)
  var oneDay = 24 * 3600 * 1000
  for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay)
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
  }
  return new Promise((resolve, rejects) => {
    setTimeout(_ => resolve({
      data:
        { data, date }
    }), 500)
  })
}
