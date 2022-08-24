export const state = () => ({
  isAuth: false
})
export const getters = {
  isAuthorisation: state => state.isAuth
}
