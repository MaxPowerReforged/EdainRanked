<template>
  <div>
      <b-table
        responsive
        table-class="er-table"
        thead-class="er-table er-table-head"
        tbody-tr-class="er-table-row"
        :items="fetchReplays"
        :fields="fields">
        <!-- <template #cell(elo)="data">
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
        </template> -->
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
          { key: 'Replay_Name', label: $t('ranking.number'), class: "er-table-cell", sortable: true },
          { key: 'Winner', label: $t('ranking.player'), class: "er-table-cell" },
          { key: 'Winner_Faction', label: $t('ranking.elo'), class: "er-table-cell", sortable: true},
          { key: 'Loser', label: $t('ranking.winLose'), class: "er-table-cell" },
          { key: 'Loser_Faction', label: $t('ranking.games'), class: "er-table-cell" },
          { key: 'Host', label: $t('ranking.games'), class: "er-table-cell" },
          { key: 'Map', label: $t('ranking.games'), class: "er-table-cell" },
          { key: 'Game_Version', label: $t('ranking.games'), class: "er-table-cell" },
          { key: 'Replay_Event', label: $t('ranking.games'), class: "er-table-cell" },
          { key: 'Game_Date', label: $t('ranking.games'), class: "er-table-cell" },
          { key: 'Game_Description', label: $t('ranking.games'), class: "er-table-cell" },
        ]
      }
    },
    methods: {
      async fetchReplays(ctx) {
        return await this.$axios.$get('/display-replays');
      }
    }
}
</script>

<style>

</style>