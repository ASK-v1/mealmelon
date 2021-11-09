<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7', 'week 8']
        },
        colors: ['rgb(255, 255, 0)']
      },
      series: [
        {
          name: 'series-1',
          data: [2, 4, 6, 8, 10, 12, 14, 16]
        }
      ]
    }
  }
}

</script>

<template>
  <div>
    <apexchart
      width="600"
      type="area"
      :options="chartOptions"
      :series="series"
      colors ="chartOptions.colors"
      >
    </apexchart>
  </div>
</template>

<style>

</style>
