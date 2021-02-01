<template>
  <b-modal
    id="login-modal"
    centered
    title="Login"
    content-class="BFME-modal"
    header-class="BFME-modal-borderless"
    footer-class="BFME-modal-borderless"
    dialog-class="BFME-modal-dialog"
  >
    <template #modal-header>
      <h3>Login</h3>
    </template>

    <b-form-input
      v-model="name"
      type="text"
      placeholder="username"
    ></b-form-input>
    <b-form-input
      v-model="password"
      type="password"
      placeholder="password"
    ></b-form-input>

    <template #modal-footer>
      <b-button class="BFME-btn" @click="authenticateUser({ name, password })"
        >Login</b-button
      >
      <p @click="openRegisterModal">Don't have an user yet? Register!</p>
    </template>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("auth", ["authenticateUser"]),
    openRegisterModal() {
      this.$bvModal.hide("login-modal");
      this.$bvModal.show("register-modal");
    }
  }
};
</script>

<style lang="scss"></style>
