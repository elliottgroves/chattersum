<template>
  <apexchart :width="width" :height="height" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'line-chart',
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
    chartOptions () {
      return {
        chart: {
          animations: {
            enabled: false
          }
        },
        colors: ['#000'],
        xaxis: {
          min: 1
        },
        yaxis: {
          min: 0,
          max: 6
        }
      }
    },
    series () {
      return [{name: 'Trend', data: this.chartData}]
    }
  }
}
</script>

<style lang="scss" scoped></style>
