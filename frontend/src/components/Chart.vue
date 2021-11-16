<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts
  },
  data () {
    return {
      series: [500, 255, 1600],
      chartOptions: {
        labels: ['protein', 'carb', 'fat']
      }
    }
  }
}
</script>

<template>
  <div class="app">
    <apexcharts type="donut" width="500" :options="chartOptions" :series="series"/>
  </div>
</template>
