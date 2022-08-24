export default function ({ store, redirect }) {
  const auth = store.getters['auth/isAuthorisation']
  if (!auth) {
    redirect('/')
  }
}
