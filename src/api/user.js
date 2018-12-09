import request from '@/utils/request'

/**
 * 登陆
 * @param {*} loginParam
 * @param {*} password
 */
export function loginByUsername(loginParam, password) {
  const data = {
    loginParam,
    password
  }
  return request({
    url: '/userLogin',
    method: 'post',
    data
  })
}

/**
 * 注册
 * @param {*} username
 * @param {*} password
 * @param {*} passwordRetry
 * @param {*} emailmphone
 */
export function register(username, password, passwordRetry, emailmphone) {
  const data = { username, password, passwordRetry, emailmphone }
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

/**
 * 更改信息
 * @param {*} username
 * @param {*} password
 * @param {*} passwordRetry
 * @param {*} emailmphone
 */
export function update(username, password, passwordRetry, emailmphone) {
  const data = { username, password, passwordRetry, emailmphone }
  return request({
    url: '/user',
    method: 'put',
    data
  })
}

/**
 * 重置密码
 * @param {*} password
 * @param {*} passwordRetry
 * @param {*} oldPassword
 */
export function resetPassword(password, passwordRetry, oldPassword) {
  const data = { password, passwordRetry, oldPassword }
  return request({
    url: '/user/resetPassword',
    method: 'put',
    data
  })
}

/**
 * 登出
 */
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

/**
 * 获取用户信息
 * @param {*} token
 */
export function getUserInfo(token) {
  return request({
    url: '/api/user',
    method: 'get',
    params: { token }
  })
}

/**
 * 激活码
 * @param {*} phone
 * @param {*} code
 */
export function active(phone, code) {
  const data = { phone, code }
  return request({
    url: '/user/active/',
    method: 'post',
    data
  })
}
