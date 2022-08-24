<template>
  <h1>{{ id }}</h1>
</template>
<script>
export default {
  name: 'UsersId',
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
