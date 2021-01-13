<template>
  <div id="table-container">
      <b-form-input
        v-model="filter"
        type="search"
        id="filterInput"
        placeholder="Type to Search"
      ></b-form-input>
      <b-table
        responsive
        table-class="er-table"
        thead-class="er-table er-table-head"
        tbody-tr-class="er-table-row"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        @filtered="onFiltered">
        <template #cell(Replay_Name)="data">
          <a :href="data.item.Replay_Link">{{ data.item.Replay_Name }}</a>
        </template>
        <template #cell(Winner_Faction)="data">
          {{ data.item.Winner_Faction }}
          <span v-if="data.item.Winner_Random === 0"> (P)</span>
        </template>
        <template #cell(Loser_Faction)="data">
          {{ data.item.Loser_Faction }}
          <span v-if="data.item.Loser_Random === 0"> (P)</span>
        </template>
        <template #cell(Game_Date)="data">
          {{ dateFormatter(data.item.Game_Date) }}
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'navBar',
    data() {
      const $t = this.$t.bind(this);
      return {
        fields: [
          { key: 'Replay_Name', label: $t('replays.table.file'), class: "er-table-cell", sortable: true },
          { key: 'Winner', label: $t('replays.table.winner'), class: "er-table-cell" },
          { key: 'Winner_Faction', label: $t('replays.table.winnerFaction'), class: "er-table-cell", sortable: true},
          { key: 'Loser', label: $t('replays.table.loser'), class: "er-table-cell" },
          { key: 'Loser_Faction', label: $t('replays.table.loserFaction'), class: "er-table-cell" },
          { key: 'Host', label: $t('replays.table.host'), class: "er-table-cell" },
          { key: 'Map', label: $t('replays.table.map'), class: "er-table-cell" },
          { key: 'Game_Version', label: $t('replays.table.version'), class: "er-table-cell" },
          { key: 'Replay_Event', label: $t('replays.table.event'), class: "er-table-cell" },
          { key: 'Game_Date', label: $t('replays.table.date'), class: "er-table-cell" },
          { key: 'Game_Description', label: $t('replays.table.description'), class: "er-table-cell" },
        ],
        currentPage: 1,
        perPage: 10,
        totalRows: 0,
        filter: null
      }
    },
    async mounted() {
      let replays = await this.fetchReplays();
      this.totalRows = this.allReplays().length;
    },
    computed: {
      items(){
        return this.allReplays();
      },
    },
    methods: {
      ...mapGetters('replays', ['allReplays']),
      ...mapActions('replays', ['fetchReplays']),

      dateFormatter(date) {
        return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
    }
}
</script>

<style lang="scss">

#filterInput{
  width: 20%;
  align-self: flex-end;
  margin: 20px 0;

  @media (max-width: $breakpoint-main){
    width: 45%;
  }
}

</style>