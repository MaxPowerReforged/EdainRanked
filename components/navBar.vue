<template>
<div>
  <b-navbar id="navBar" toggleable="lg" type="dark" variant="info" sticky>

    <b-navbar-toggle class="BFME-btn btn-square" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav-button-container" class="d-flex justify-content-around w-100" align="center">
        <b-nav-item-dropdown class="BFME-btn" :text="$t('navBar.home.home')">
          <b-dropdown-item href="#">{{ $t('navBar.home.info') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.community') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.rules') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="BFME-btn" href="#">{{ $t('navBar.ranking') }}</b-nav-item>
        <b-nav-item class="BFME-btn" href="#">{{ $t('navBar.replayDb') }}</b-nav-item>
        <b-nav-item-dropdown class="BFME-btn" :text="$t('navBar.statistics.statistics')">
          <b-dropdown-item href="#">{{ $t('navBar.statistics.general') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.statistics.faction') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="BFME-btn" href="#">{{ $t('navBar.upload') }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown class="BFME-btn btn-square" :text="this.$i18n.locale" center>
        <b-dropdown-item href="./">En</b-dropdown-item>
        <b-dropdown-item href="./de">De</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown class="BFME-btn btn-square" right>
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

#navBar{
  background-image: url("~assets/images/navBar/background_tile.png");
  background-size: contain;
  background-color: black!important;
}

.BFME-btn{
  background-image: url("~assets/images/navBar/button_base.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  height: 55px;
  width: 190px;
}

.BFME-btn:hover{
  background-image: url("~assets/images/navBar/button_hover.svg");
}

.BFME-btn:active{
  background-image: url("~assets/images/navBar/button_flash.svg");
}

.btn-square{
  width: 55px;
  background-image: url("~assets/images/navBar/button_square_base.svg");
}

.btn-square:hover{
  background-image: url("~assets/images/navBar/button_square_hover.svg");
}

.btn-square:active{
  background-image: url("~assets/images/navBar/button_square_flash.svg");
}

</style>
