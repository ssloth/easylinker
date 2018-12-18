import { LoginByloginParam, logout, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    id: '',
    username: '',
    phone: '',
    email: '',
    token: getToken(),
    role: []
  },

  mutations: {
    SET_ID: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, role) => {
      state.role = role
    },
    SET_EMAIL: (state, eamil) => {
      state.eamil = eamil
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_PHONE: (state, phone) => {
      state.avatar = phone
    }
  },

  actions: {
    // 用户名登录
    LoginByloginParam({ commit }, userInfo) {
      const loginParam = userInfo.loginParam.trim()
      return new Promise((resolve, reject) => {
        LoginByloginParam(loginParam, userInfo.password)
          .then(response => {
            const data = response.data
            if (data.state === 1) {
              commit('SET_TOKEN', data.token)
              setToken(response.data.token)
            }
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(response => {
            if (!response.data) {
              reject('error')
            }
            const data = response.data.data
            if (data.roles && data.roles.length > 0) {
              commit('SET_ROLES', data.roles)
            } else {
              reject('getInfo: roles must be a non-null array !')
            }
            commit('SET_USERNAME', data.username)
            commit('SET_PHONE', data.phone)
            commit('SET_EMAIL', data.email)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    }
  }
}

export default user
