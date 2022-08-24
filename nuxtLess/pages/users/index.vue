<template>
  <div>
    <h1>Users</h1>
    <div v-for="user in users" :key="user.name">
      <p>Name - {{ user.name }}, age - {{ user.age }}</p>
      <nuxt-link :to="`/users/${user.name}`">
        Перейти к пользователю {{ user.name }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UsersPage',
  computed: {
    ...mapGetters({
      users: 'users/getUsers'
    })
  }
}
</script>
