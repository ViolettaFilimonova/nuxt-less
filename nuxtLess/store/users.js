export const state = () => ({
  users: [
    { name: 'Violetta', age: 23 },
    { name: 'Misha', age: 23 }
  ]
})
export const getters = {
  getUsers: state => state.users
}
