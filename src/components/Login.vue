<template>
  <div id = "app">
    <div id="logreg-forms">
      <h1 id = "signin" class="h3 mb-3 font-weight-normal" style="text-align: center"> Sign in</h1>
        <form class="form-signin">
          <input type="email" id="inputEmail" class="form-control" v-model="input.username" placeholder="Email address" required="" autofocus="">
          <input type="password" id="inputPassword" class="form-control" v-model="input.password" placeholder="Password" required="">
          <button class="btn btn-success btn-block" type="submit" v-on:click="login()"><i class="fas fa-sign-in-alt"></i> Sign in</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === 'test@apple.com' && this.input.password === 'Apple1234!') {
          this.$router.push('PatientData')
        } else {
          this.input.username = ''
          this.input.password = ''
          this.$router.push('Login')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>
