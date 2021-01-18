<template>
  <b-modal 
    id="upload-modal"
    centered title="Upload replay"
    content-class="BFME-modal"
    header-class="BFME-modal-borderless"
    footer-class="BFME-modal-borderless"
    dialog-class="BFME-modal-dialog">
    <template #modal-header>
      <h3>Upload Replay</h3>
    </template>

    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Browse a replay file or drop it here..."
      drop-placeholder="Drop replay here..."
      accept=".BFME2REPLAY"
    ></b-form-file>
    <b-form id="winner-form" inline>
      <b-form-input id="winner-name" list="winner-name-list" v-model="winnerName" placeholder="Winner Name"></b-form-input>
      <b-form-datalist id="winner-name-list" :options="playerList"></b-form-datalist>
      <b-form-select v-model="winnerFaction" :options="factionList" >
        <template #first>
          <b-form-select-option :value="null" disabled>Winner Faction</b-form-select-option>
        </template>
      </b-form-select>
      <b-form-checkbox v-model="isWinnerRandom" value="true" unchecked-value="false">Random</b-form-checkbox>
    </b-form>

    <b-form id="loser-form" inline>
      <b-form-input id="loser-name" list="loser-name-list" v-model="loserName" placeholder="Loser Name"></b-form-input>
      <b-form-datalist id="loser-name-list" :options="playerList"></b-form-datalist>
      <b-form-select v-model="loserFaction" :options="factionList" >
        <template #first>
          <b-form-select-option :value="null" disabled>Loser Faction</b-form-select-option>
        </template>
      </b-form-select>
      <b-form-checkbox v-model="isLoserRandom" value="true" unchecked-value="false">Random</b-form-checkbox>
    </b-form>
    <b-form inline>
      <b-form-select v-model="host" :options="hostOptions" >
        <template #first>
          <b-form-select-option :value="null" disabled>Host</b-form-select-option>
        </template>
      </b-form-select>

      <b-form-select v-model="map" :options="mapList" >
        <template #first>
          <b-form-select-option :value="null" disabled>Map</b-form-select-option>
        </template>
      </b-form-select>

      <b-form-select v-model="event" :options="eventList" >
        <template #first>
          <b-form-select-option :value="null" disabled>Event</b-form-select-option>
        </template>
      </b-form-select>

    </b-form>

    <b-form-textarea v-model="description" placeholder="Enter description (optional)"></b-form-textarea>

    <template #modal-footer>
      <b-button class="BFME-btn">Submit</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      playerList: ['MaxPower', 'JoJo', 'IIIIII'],
      factionList: ['Gondor', 'Rohan', 'Imladris'],
      hostOptions: ['Neutral', 'Winner', 'Loser'],
      mapList: ['Fords of Isen II', 'Iron Hills', 'Morgai'],
      eventList: ['Ladder'],
      winnerName: '',
      loserName: '',
      isWinnerRandom: true,
      isLoserRandom: true,
      winnerFaction: null,
      loserFaction: null,
      host: null,
      map: null,
      event: null,
      description: '',
    }
  }
}
</script>

<style>

</style>