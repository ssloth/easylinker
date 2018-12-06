import request from '@/utils/request'

export function loginByUsername(loginParam, password) {
  const data = {
    loginParam,
    password
  }
  return request({
    url: '/api/userLogin',
    method: 'post',
    data
  })
}

export function register(username, password, passwordRetry, emailmphone) {
  const data = { username, password, passwordRetry, emailmphone }
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

export function update(username, password, passwordRetry, emailmphone) {
  const data = { username, password, passwordRetry, emailmphone }
  return request({
    url: '/user',
    method: 'put',
    data
  })
}

export function resetPassword(password, passwordRetry, oldPassword) {
  const data = { password, passwordRetry, oldPassword }
  return request({
    url: '/user/resetPassword',
    method: 'put',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/user',
    method: 'get',
    params: { token }
  })
}

export function active(phone, code) {
  const data = { phone, code }
  return request({
    url: '/user/active/',
    method: 'post',
    data
  })
}
