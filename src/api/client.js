import request from '@/utils/request'
import { API_VERSION } from '../config/index'
const { API } = API_VERSION
/**
 * 获取设备信息
 * @param {*} id
 */
export function getClientInfo(type, id) {
  return request({
    method: 'get',
    url: `${API}/client/${type}/${id}`
  })
}

/**
 * 获取用户的设备列表
 */
export function getCurrentUserClient(type, page = 1, count = 10) {
  return request({
    method: 'get',
    url: `${API}/client/${type}/${page}/${count}`
  })
}

/**
 * 创建设备
 * @param {*} name
 * @param {*} info
 * @param {*} acls
 * @param {*} group
 * @param {*} type
 * @param {*} topic
 */
export function createClient(name, info, aclEntries, group, type, topic = 'x') {
  const data = { name, info, aclEntries, group, type, topic }
  return request({
    method: 'post',
    url: `${API}/client/`,
    data
  })
}

/**
 * 获取设备数据
 * @param {*} id
 */
export function getClientData(type, id, page = 1, count = 10) {
  return request({
    method: 'get',
    url: `${API}/client/data/${type}/${id}/${page}/${count}`
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
export function uploadClient(id, name, info, topic, aclEntries, type, group) {
  const data = { id, name, info, topic, aclEntries, type, group }
  return request({
    method: 'put',
    url: `${API}/client/`,
    data
  })
}
