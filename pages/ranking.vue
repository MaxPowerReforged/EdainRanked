<template>
<main>
  <h1>Ranking</h1>
  <TheRankingTable id="rankingTable" />
</main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  mounted() {
    this.fetchRanking();
  },
  methods: {
    ...mapActions('ranking', ['fetchRanking'])
  }

}
</script>

<style lang="scss">

#rankingTable{
  width: 60%;

  @media (max-width: $breakpoint-main){
    width: 90%;
  }
}

</style>