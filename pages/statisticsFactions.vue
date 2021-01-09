<template>
  <main>
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selectedFaction"
        :options="selectableFactions"
        buttons
      ></b-form-radio-group>
      <section id="faction-charts">
          <StatisticsFactionWinratesContainer :selectedFaction="selectedFaction"/>
      </section>
      <StatisticsFilters/>
  </main>
</template>

<script>
export default {
  data(){
    return {
      selectedFaction: 'Gondor',
      selectableFactions: ['Gondor', 'Rohan', 'Imladris', 'Lothlorien', 'Erebor', 'Iron Hills', 'Ered Luin', 'Mordor', 'Isengard', 'Angmar']
    }//TODO get faction list from incoming data?
  },
}
</script>

<style lang="scss">
#faction-charts{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-group > label.btn.btn-secondary{
  background-color: transparent!important;
  outline: none;
  border: none;
  margin: 15px 5px;
}

.btn-group > label.btn.btn-secondary.active{
  text-shadow: 0 0 4px brown, 0 0 7px $mordor-primary;
}

.btn-group > label.btn.btn-secondary > span{
  color: $primary-darker!important;
}

.btn-group > label.btn.btn-secondary:hover > span{
  color: $primary-brighter!important;
}

.btn-group > label.btn.btn-secondary.active > span{
  color: white !important;
}

</style>
