<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" sticky>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav-button-container" class="d-flex justify-content-around w-100" align="center" fill>
        <b-nav-item-dropdown :text="$t('navBar.home.home')">
          <b-dropdown-item href="#">{{ $t('navBar.home.info') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.community') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.rules') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">{{ $t('navBar.ranking') }}</b-nav-item>
        <b-nav-item href="#">{{ $t('navBar.replayDb') }}</b-nav-item>
        <b-nav-item-dropdown :text="$t('navBar.statistics.statistics')">
          <b-dropdown-item href="#">{{ $t('navBar.statistics.general') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.statistics.faction') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">{{ $t('navBar.upload') }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown :text="this.$i18n.locale" center>
        <b-dropdown-item href="./">En</b-dropdown-item>
        <b-dropdown-item href="./de">De</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <template #button-content>
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>

</style>
