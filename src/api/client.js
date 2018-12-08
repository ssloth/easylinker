import request from '@/utils/request'
import { API_VERSION } from '../config/index'
const { API } = API_VERSION
export function getClientInfo(id) {
  return request({
    method: 'get',
    url: `${API}/client/${id}`
  })
}

export function getCurrentUserClient() {
  return request({
    method: 'get',
    url: `${API}/client/0/10`,
  })
}

export function createClient(name, info, topic, alc, group) {
  const data = { name, info, topic, alc, group }
  return request({
    method: 'get',
    url: `${API}/client/0/10`,
    data
  })
}

export function getClientData(id) {
  return request({
    method: 'get',
    url: `${API}/client/data/${id}/0/10`
  })
}

export function deleteClient(id) {
  return request({
    method: 'delete',
    url: `${API}/client/${id}`
  })
}

export function upload(id, name, info, topic, alc, group) {
  const data = { id, name, info, topic, alc, group }
  return request({
    method: 'put',
    url: `${API}/client`,
    data
  })
}
