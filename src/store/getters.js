export const getters = {
  roles: state => state.user.roles,
  clients: state => state.client.list,
  token: state => state.user.token
}
