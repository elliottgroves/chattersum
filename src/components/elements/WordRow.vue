<template>
  <div class="word-row" @click="showModal(word)">
    <div class="freshness">
      <div class="freshness-indicator"></div>
    </div>
    <div class="word">
      <span>{{ word.word }}</span>
    </div>
    <div class="trend" id="trend-id">
      {{ word.trend }}
    </div>
    <div class="size">
      {{ word.size }}
    </div>
  </div>
</template>

<script>
// import * as d3 from 'd3'

export default {
  name: 'WordRow',
  props: ['word'],
  methods: {
    showModal (word) {
      this.$store.commit('showModal')
      this.$store.commit('setActiveWord', word)
    }
  }
}

// var width = 100
// var height = 25
// var x = d3.scale.linear().range([0, width])
// var y = d3.scale.linear().range([height, 0])
// var parseDate = d3.time.format('%b %d, %Y').parse
// var line = d3.svg.line()
//   .x(function (d) { return x(d.date) })
//   .y(function (d) { return y(d.close) })

// function sparkline (elemId, data) {
//   data.forEach(function (d) {
//     d.date = parseDate(d.Date)
//     d.close = +d.Close
//   })
//   x.domain(d3.extent(data, function (d) { return d.date }))
//   y.domain(d3.extent(data, function (d) { return d.close }))

//   d3.select(elemId)
//     .append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .append('path')
//     .datum(data)
//     .attr('class', 'sparkline')
//     .attr('d', line)
// }

// sparkline('trend-id', this.$store.state.words)
</script>

<style scoped lang="scss">
.word-row {
  display: flex;
  height: 80px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s all ease;
  .freshness {
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    .freshness-indicator {
      width: 40px;
      height: 24px;
      background-color: #18a81b;
    }
  }
  .word {
    padding: 8px;
    width: 350px;
    display: flex;
    justify-content: left;
    align-items: center;
    span {
      font-size: 1.6em;
    }
  }
  .trend {
    width: 300px;
  }
  .size {
    width: 250px;
  }
  &:hover {
    transform: scale(1.01);
    border-radius: 8px;
  }
}
</style>
