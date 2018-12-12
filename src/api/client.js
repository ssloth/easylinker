import request from '@/utils/request'
import { API_VERSION } from '../config/index'
const { API } = API_VERSION
/**
 * 获取设备信息
 * @param {*} id
 */
export function getClientInfo(id) {
  return request({
    method: 'get',
    url: `${API}/client/${id}`
  })
}

/**
 * 获取用户的设备列表
 */
export function getCurrentUserClient(page = 0, count = 10) {
  return request({
    method: 'get',
    url: `${API}/client/${page}/ß${count}`
  })
}

/**
 * 创建设备
 * @param {*} name
 * @param {*} info
 * @param {*} topic
 * @param {*} alc
 * @param {*} group
 */
export function createClient(name, info, topic, alc, group) {
  const data = { name, info, topic, alc, group }
  return request({
    method: 'post',
    url: `${API}/client`,
    data
  })
}

/**
 * 获取设备数据
 * @param {*} id
 */
export function getClientData(id, page = 0, count = 10) {
  return request({
    method: 'get',
    url: `${API}/client/data/${id}/${page}/${count}`
  })
}

/**
 * 删除设备
 * @param {*} id
 */
export function deleteClient(id) {
  return request({
    method: 'delete',
    url: `${API}/client/${id}`
  })
}

/**
 * 更改信息
 * @param {*} id
 * @param {*} name
 * @param {*} info
 * @param {*} topic
 * @param {*} alc
 * @param {*} group
 */
export function upload(id, name, info, topic, alc, group) {
  const data = { id, name, info, topic, alc, group }
  return request({
    method: 'put',
    url: `${API}/client`,
    data
  })
}
