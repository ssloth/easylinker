import request from '@/utils/request'

export function getSchedule() {
  return request({
    url: '/schedule/0/1',
    method: 'get'
  })
}

export function createTask(cronExpression, jobJson) {
  const data = { cronExpression, jobJson }
  return request({
    url: '/schedule',
    method: 'post',
    data
  })
}

export function deleteTask(id) {
  return request({
    url: `/schedule/${id}`,
    method: 'delete'
  })
}

export function restoreTask(id) {
  return request({
    url: `/schedule/${id}`,
    method: 'patc'
  })
}

export function pauseTask(id) {
  return request({
    url: `/schedule/${id}`,
    method: 'option'
  })
}
