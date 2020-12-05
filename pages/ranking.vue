<template>
<main>
  <h1>Ranking</h1>
  <rankTable id="rankingTable" />
</main>
</template>

<script>
import rankTable from '../components/rankTable'

export default {
  components: {
    rankTable
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