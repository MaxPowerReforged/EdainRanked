<template>
<div >
  <highcharts :options="chartOptions"></highcharts>
</div>
</template>

<script>
import colors from '../../../assets/scss/_colors.scss';
const imgSrc = [
  require('@/assets/images/factionIcons/ironHills.png'),
  require('@/assets/images/factionIcons/gondor.png'),
  require('@/assets/images/factionIcons/lothlorien.png'),
  require('@/assets/images/factionIcons/angmar.png'),
  require('@/assets/images/factionIcons/mordor.png'),
]

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
          backgroundColor: 'transparent',
          width: 800,
        },
        title: {
          text: this.$t('navBar.statistics.general'),
          style: {
            color: colors.primary
          }
        },
        xAxis: {
          type: 'category'
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            maxPointWidth: 40,
            borderWidth: 3,
            dataLabels: {
              enabled: true,
              format: '<span style="color:{point.color}">{point.y}%</span>',
              style: {
                textOutline: 'none',
                fontWeight: 'regular'
              }
            },
          }
        },
        tooltip: {
          headerFormat: '',
          pointFormat: 
            `<span style="color:{point.color}">{point.name}:</span> {point.y:.2f}%
              <br>Wins: {point.wins}
              <br>Losses: {point.loses}
              <br>Total: {point.total}`,
          backgroundColor: colors.dark,
          style: {
            color: colors.primaryBrighter
          },
          borderRadius: 0,
        },
        xAxis: {
          labels: {
            useHTML: true,
            formatter: function() {
              return '<img src="' + imgSrc[this.value] + '" style="width: 50px; height: 50px;">'
            }
          },
          lineColor: colors.primaryDarker,
          tickColor: colors.primaryDarker,
        },
        yAxis: {
          labels: {
            format: '{value}%',
            style: {
              color: colors.primaryDarker
            }
          },
          title: {
            text: 'Relative faction winrate',
            style: {
              color: colors.primaryDarker
            }
          },
          gridLineColor: colors.primaryDarker,
        },
        series: [{
          data: [
            {
              y: 18,
              color: colors['ironHillsPrimary'], //TODO generate dynamically via faction name
              borderColor: colors['ironHillsSecondary'],
              name: 'Iron Hills',
              faction: 'ironHills',
              wins: this.$t('navBar.statistics.general'),
              loses: 4, //TODO is not loses, it is total
              total: 7,
            },
            {
              y: 45,
              color: colors['gondorPrimary'],
              borderColor: colors['gondorSecondary'],
              name: 'Gondor',
              faction: 'gondor',
              wins: 3,
              loses: 4,
              total: 7,
            },
            {
              y: 67,
              color: 'green',
              name: 'Lothlorien',
              faction: 'lothlorien',
              color: colors['lothlorienPrimary'],
              borderColor: colors['lothlorienSecondary'],
              wins: 3,
              loses: 4,
              total: 7,
            },
            {
              y: 35,
              color: colors['angmarPrimary'],
              borderColor: colors['angmarSecondary'],
              name: 'Angmar',
              faction: 'angmar',
              wins: 3,
              loses: 4,
              total: 7,
            },
            {
              y: 53,
              color: colors['mordorPrimary'],
              borderColor: colors['mordorSecondary'],
              name: 'Mordor',
              faction: 'mordor',
              wins: 4,
              loses: 4,
              total: 8,
            },
            ]
        }],
        credits: {
          enabled: false
        },
      },
    }
  }
}
</script>

<style>

</style>