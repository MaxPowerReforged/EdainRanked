<template>
  <b-modal 
    id="register-modal"
    centered title="Register"
    content-class="BFME-modal"
    header-class="BFME-modal-borderless"
    footer-class="BFME-modal-borderless"
    dialog-class="BFME-modal-dialog">
    <template #modal-header>
      <h3>Register</h3>
    </template>

    <b-form-input type="text" placeholder="username"></b-form-input>
    <b-form-input type="email" placeholder="email"></b-form-input>
    <b-form-input type="password" placeholder="password"></b-form-input>

    <template #modal-footer>
      <b-button class="BFME-btn">Register</b-button>
      <p @click="openLoginModal">Already registered? Login!</p>
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
    openLoginModal() {
      this.$bvModal.hide('register-modal')
      this.$bvModal.show('login-modal')
    }
  }
}
</script>

<style lang="scss">

.BFME-modal{
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  background-image: url("~assets/images/modals/background_register.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 320px;
	height: 430px;
}

.BFME-modal-borderless{
  border: none;
}

.BFME-modal-dialog{
  display: flex;
  justify-content: center;
}

</style>