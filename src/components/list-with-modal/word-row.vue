<template>
  <div class="word-row" @click="showModal(word)">
    <div class="freshness">
      <div class="freshness-indicator"></div>
    </div>
    <div class="word">
      <span>{{ word.word }}</span>
    </div>
    <div class="trend" id="trend-id">
      <sparkline :width="270" :height="70" :chartData="word.trend"></sparkline>
    </div>
    <div class="size">
      <sparkline :width="230" :height="70" :chartData="word.size"></sparkline>
    </div>
  </div>
</template>

<script>
import Sparkline from '../charts/spark-line'

export default {
  name: 'WordRow',
  props: ['word'],
  components: {
    Sparkline
  },
  methods: {
    showModal (word) {
      this.$store.commit('showModal')
      this.$store.commit('setActiveWord', word)
    }
  }
}
</script>

<style scoped lang="scss">
.word-row {
  display: flex;
  height: 80px;
  user-select: none;
  cursor: pointer;
  transition: 0.2s all ease;
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
    display: flex;
    align-items: center;
  }
  .size {
    width: 250px;
    display: flex;
    align-items: center;
  }
  &:hover {
    transform: scaleX(1.01);
    border-radius: 7px;
  }
}
</style>
