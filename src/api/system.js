import request from '@/utils/request'
/**
 * 获取系统信息
 * @param {*} token
 */
export function getsystemInfo() {
  return new Promise((resolve, rejects) => {
    request({
      url: '/actuator/info',
      method: 'get'
    }).then(res => {
      resolve(res)
    })
  })
}
