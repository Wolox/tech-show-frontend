<template>
  <form @submit.prevent="login">
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email">
    <span v-if="email && !$v.email.email">El email no es valido</span>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { login } from '../service/AuthService'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  methods: {
    login () {
      login(this.email, this.password).then(response => {
        localStorage.setItem('authToken', response.data.token)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
