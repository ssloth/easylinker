import request from '@/utils/request'
import { API_VERSION } from '../config/index'
const { API } = API_VERSION
/**
 * 登陆
 * @param {*} loginParam
 * @param {*} password
 */
export function LoginByloginParam(loginParam, password) {
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
    url: `${API}/user`,
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
    url: `${API}/user/resetPassword`,
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
export function getUserInfo() {
  return request({
    url: `${API}/user`,
    method: 'get'
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

/**
 * 获取设备数目概览信息
 */
export function getDeviceOverViewInfo() {
  return request({
    url: `${API}/user/deviceOverViewInfo`,
    method: 'get'
  })
}

/**
 * 获取系统信息
 */
export function getServerInfo() {
  return request({
    url: `${API}/user/serverInfo`,
    method: 'get'
  })
}

/**
 * 获取系统信息
 */
export function getLogs(page = 1, count = 10) {
  return request({
    url: `${API}/user/getLog/${page}/${count}`,
    method: 'get'
  })
}
