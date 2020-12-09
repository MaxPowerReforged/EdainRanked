<template>
<main>
  <h1>Ranking</h1>
  <TheRankingTable id="rankingTable" />
</main>
</template>

<script>
import TheRankingTable from '../components/TheRankingTable'

export default {
  components: {
    TheRankingTable
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