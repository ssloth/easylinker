import { request } from '@/utils/request'

export function getClientInfo(id) {
  return request({
    method: 'get',
    url: `/client/${id}`
  })
}

export function getCurrentUserClient(token) {
  return request({
    method: 'get',
    url: `/client/0/10`,
    params: { token }
  })
}

export function createClient(name, info, topic, alc, group) {
  const data = { name, info, topic, alc, group }
  return request({
    method: 'get',
    url: `/client/0/10`,
    data
  })
}

export function getClientData(id) {
  return request({
    method: 'get',
    url: `/client/data/${id}/0/10`
  })
}

export function deleteClient(id) {
  return request({
    method: 'delete',
    url: `/client/${id}`
  })
}

export function upload(id, name, info, topic, alc, group) {
  const data = { id, name, info, topic, alc, group }
  return request({
    method: 'put',
    url: `/client`,
    data
  })
}
