<template>
<article  class="faction-chart-card">
  <div class="faction-pie-chart-container">
    <img class="faction-icon-chart" :src="factionData.image" alt="">
    <highcharts :options="chartOptions"></highcharts>
  </div>
  <span class="faction-label">vs {{ factionData.name }}: <br>{{ factionData.wins }}/{{ factionData.loses }}</span>
</article>
</template>

<script>
import colors from '../../../assets/scss/_colors.scss';

export default {
  props: ['factionData'],
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'pie',
          backgroundColor: 'transparent',
          width: 185,
          height: 200,
        },
        colors: [colors.chart1, colors.chart2, colors.chart3, colors.chart4, colors.chart5, colors.chart6, colors.chart7, colors.chart8, colors.chart9, colors.chart10],
        plotOptions: {
          pie: {
            borderColor: 'black',
            dataLabels: false,
            borderWidth: 0,
            allowPointSelect: false,
            animation: false,
          },
          series: {
            enableMouseTracking: false,
          }
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: '',
        },
        series: [{
          data: [
            {
              y: this.factionData.wins,
              color: this.factionData.colorPrimary,
            },
            {
              y: this.factionData.loses,
              color: this.factionData.colorSecondary,
            },
          ]
        }],
        credits: {
          enabled: false
        },
      }
    }
  }
}
</script>

<style scoped>

.faction-chart-card{
  display:inline-flex;
	width: 185px;
	height: 250px;
	flex-direction: column;
}

.faction-pie-chart-container{
	display: flex;
	width: 100%;
	height: 185px;
	position: relative;
	justify-content: center;
	text-align: center;
	align-items: center;
}

.faction-icon-chart{
	position: absolute;
	margin: auto;
	height: 145px;
	width: 145px;
  z-index: 100;
  margin-top: -5px;
}

.faction-label{
  text-align: center;
}

</style>