<template>
  <b-modal 
    id="login-modal"
    centered title="Login"
    content-class="BFME-modal"
    header-class="BFME-modal-borderless"
    footer-class="BFME-modal-borderless"
    dialog-class="BFME-modal-dialog">
    <template #modal-header>
      <h3>Login</h3>
    </template>

    <b-form-input type="text" placeholder="username"></b-form-input>
    <b-form-input type="password" placeholder="password"></b-form-input>

    <template #modal-footer>
      <b-button class="BFME-btn">Login</b-button>
      <p @click="openRegisterModal">Don't have an user yet? Register!</p>
    </template>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    }
  },
  methods: {
    openRegisterModal() {
      this.$bvModal.hide('login-modal')
      this.$bvModal.show('register-modal')
    }
  }
}
</script>

<style lang="scss">

</style>