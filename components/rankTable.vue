<template>
  <div>
      <b-table
        responsive
        table-class="er-table"
        thead-class="er-table er-table-head"
        tbody-tr-class="er-table-row"
        :items="fetchRanking"
        :fields="fields">
        <template #cell(index)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(elo)="data">
          <div v-if="data.item.Player_Status !== 'Unranked'">
            {{ data.item.Current_ELO }}
          </div>
          <div v-else>
            Unranked
          </div>
        </template>
        <template #cell(winLose)="data">
          {{ data.item.Won_Games }} / {{ data.item.Lost_Games }}
        </template>
        <template #cell(games)="data">
          {{ data.item.Won_Games + data.item.Lost_Games }}
        </template>
      </b-table>
  </div>
</template>

<script>
export default {
    name: 'navBar',
    data() {
      const $t = this.$t.bind(this);
      return {
        fields: [
          { key: 'index', label: $t('ranking.number'), class: "er-table-cell", sortable: true },
          { key: 'Player_Name', label: $t('ranking.player'), class: "er-table-cell" },
          { key: 'elo', label: $t('ranking.elo'), class: "er-table-cell", sortable: true},
          { key: 'winLose', label: $t('ranking.winLose'), class: "er-table-cell" },
          { key: 'games', label: $t('ranking.games'), class: "er-table-cell" },
        ]
      }
    },
    methods: {
      async fetchRanking(ctx) {
        return await fetch('https://crehw12bu8.execute-api.eu-central-1.amazonaws.com/Beta/display-ranking')
          .then(response=>response.json());
      }
    }
}
</script>

<style>

</style>