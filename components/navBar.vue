<template>
<div>
  <b-navbar id="navBar" toggleable="lg" type="dark" variant="info" sticky>

    <b-navbar-toggle id="nav-button-toggle" class="BFME-btn btn-square" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav-button-container" class="d-flex justify-content-around w-100" align="center">
        <b-nav-item-dropdown menu-class="w-100" class="BFME-btn" :text="$t('navBar.home.home')">
          <b-dropdown-item :to="localePath('/')">{{ $t('navBar.home.main') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.info') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.community') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.home.rules') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="BFME-btn" :to="localePath('/ranking')">{{ $t('navBar.ranking') }}</b-nav-item>
        <b-nav-item class="BFME-btn" href="#">{{ $t('navBar.replayDb') }}</b-nav-item>
        <b-nav-item-dropdown menu-class="w-100" class="BFME-btn" :text="$t('navBar.statistics.statistics')">
          <b-dropdown-item href="#">{{ $t('navBar.statistics.general') }}</b-dropdown-item>
          <b-dropdown-item href="#">{{ $t('navBar.statistics.faction') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="BFME-btn" href="#">{{ $t('navBar.upload') }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav id="nav-small-buttons" class="ml-auto">

      <b-nav-item-dropdown class="BFME-btn btn-square" :text="this.$i18n.locale" center>
        <b-dropdown-item :to="switchLocalePath('En')">En</b-dropdown-item>
        <b-dropdown-item :to="switchLocalePath('De')">De</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown class="BFME-btn btn-square" right>
        <template #button-content>User</template>
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

<style lang="scss">

#navBar{
  background-image: url("~assets/images/navBar/background_tile.png");
  background-size: auto 71px;
  background-repeat: repeat-x;
  background-color: black!important;

  & a {
    display: flex;
    color: $primary;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  & :hover {
    color: $primary-darker;

    & > span {
      color: $primary-darker;
    }
    }

  & :active {
    color: $primary-brighter;

    & > span {
      color: $primary-brighter;
    }
  }

  @media (max-width: $breakpoint-main){
    display:flex!important;
    flex-direction: row!important;
    flex-wrap: nowrap;
    background-size: auto 35px;
    height: 35px;
    padding-top: 0;

    & #nav-button-toggle{
      align-self: flex-start;
      padding-top: 0;
      margin-top: 7px;
    }

    & #nav-small-buttons{
      align-self: flex-start;
      flex-direction: row;
      height: 35px;

      & li{
        padding-top: 0;
        margin-top: 7px;
      }
    }
  }
}

#nav-collapse{
    @media (max-width: $breakpoint-main){

      margin-top: 80px;
      background-image: url("~assets/images/navBar/mobile_background_frame.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom;

      & > ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
  }

}

.BFME-btn{
  background-image: url("~assets/images/navBar/button_base.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  height: 55px;
  width: 190px;

  @media (max-width: $breakpoint-main){
      height: 25px;
      width: 190px;

      margin: 20px 0;
  }
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
