<script>
import { Pie } from 'vue-chartjs';
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: null,
          backgroundColor: ['#146478', '#167389'],
          data: [40, 20]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        animateRotate: true,
        animateScale: true
      },
      tooltips: {
        cornerRadius: 0,
        intersect: false
      },
      plugins: {
        datalabels: {
          color: 'black',
          anchor: 'end',
          align: 'end',
          visibility: 'auto',
          //offset: 100
        }
      }
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options);
  }
}
</script>

<style>

</style>