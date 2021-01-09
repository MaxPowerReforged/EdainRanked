<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import colors from '../../../assets/scss/_colors.scss';

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'pie',
          backgroundColor: 'transparent',
          width: 800
        },
        colors: [colors.chart1, colors.chart2, colors.chart3, colors.chart4, colors.chart5, colors.chart6, colors.chart7, colors.chart8, colors.chart9, colors.chart10],
        plotOptions: {
          pie: {
            borderColor: colors.dark,
            dataLabels: {
              enabled: true,
              format: `<span>{point.name}: {point.y}</span>`,
              color: colors.primary,
              connectorShape: 'straight',
              connectorColor: colors.primaryDarker,
              style: {
                textOutline: 'none',
                fontWeight: 'regular'
              }
            },
          },
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: 'Maps',
          style: {
            color: colors.primary
          }
        },
        series: [{
          data: [
            {
              y: 120,
              name: 'Neutral',
            },
            {
              y: 89,
              name: 'Winner',
            },
            {
              y: 67,
              name: 'Loser',
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

<style>

</style>