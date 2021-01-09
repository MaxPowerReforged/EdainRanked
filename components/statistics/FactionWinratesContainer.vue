<template>
  <section id="faction-winrates-chart-container">
      <StatisticsChartsFactionWinrate
        :factionData="faction"
        :key="faction.id"
        v-for="faction in factionData"
        v-if="faction.name !== selectedFaction"/>
  </section>
</template>

<script>
import colors from '../../assets/scss/_colors.scss';

export default {
  props: ['selectedFaction'],
  data(){
    return {
      factionData: [
        {
          id: 1,
          name: 'Gondor',
          image: require('@/assets/images/factionIcons/charts/gondorChart.png'),
          wins: 4,
          loses: 4,
          colorPrimary: colors.gondorPrimary,
          colorSecondary: colors.gondorSecondary,
        },
        {
          id: 2,
          name: 'Rohan',
          image: require('@/assets/images/factionIcons/charts/rohanChart.png'),
          wins: 3,
          loses: 4,
          colorPrimary: colors.rohanPrimary,
          colorSecondary: colors.rohanSecondary,
        },
        {
          id: 3,
          name: 'Imladris',
          image: require('@/assets/images/factionIcons/charts/imladrisChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.imladrisPrimary,
          colorSecondary: colors.imladrisSecondary,
        },
        {
          id: 4,
          name: 'Lothlorien',
          image: require('@/assets/images/factionIcons/charts/lothlorienChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.lothlorienPrimary,
          colorSecondary: colors.lothlorienSecondary,
        },
        {
          id: 5,
          name: 'Erebor',
          image: require('@/assets/images/factionIcons/charts/ereborChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.ereborPrimary,
          colorSecondary: colors.ereborSecondary,
        },
        {
          id: 6,
          name: 'Iron Hills',
          image: require('@/assets/images/factionIcons/charts/ironHillsChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.ironHillsPrimary,
          colorSecondary: colors.ironHillsSecondary,
        },
        {
          id: 7,
          name: 'Ered Luin',
          image: require('@/assets/images/factionIcons/charts/eredLuinChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.eredLuinPrimary,
          colorSecondary: colors.eredLuinSecondary,
        },
        {
          id: 8,
          name: 'Mordor',
          image: require('@/assets/images/factionIcons/charts/mordorChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.mordorPrimary,
          colorSecondary: colors.mordorSecondary,
        },
        {
          id: 9,
          name: 'Isengard',
          image: require('@/assets/images/factionIcons/charts/isengardChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.isengardPrimary,
          colorSecondary: colors.isengardSecondary,
        },
        {
          id: 10,
          name: 'Angmar',
          image: require('@/assets/images/factionIcons/charts/angmarChart.png'),
          wins: 5,
          loses: 4,
          colorPrimary: colors.angmarPrimary,
          colorSecondary: colors.angmarSecondary,
        },
        {
          id: 11,
          name: 'Misty Mountains',
          image: require('@/assets/images/factionIcons/charts/mistyMountainsChart.png'),
          wins: 0,
          loses: 0,
          colorPrimary: colors.mistyMountainsPrimary,
          colorSecondary: colors.mistyMountainsSecondary,
        },
      ]
    }
  }
}
</script>

<style>
#faction-winrates-chart-container{
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
    align-items: baseline;
    width: 70%;
}
</style>