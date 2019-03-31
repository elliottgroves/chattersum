<template>
  <div class="word-row" @click="toggle()" :class="{ 'expanded': expanded }">
    <div class="header">
      <div class="freshness">
        <div class="freshness-indicator"></div>
      </div>
      <div class="word">
        <span>{{ word.word }}</span>
      </div>
      <transition name="expand-info">
        <div v-if="!expanded"class="trend" id="trend-id">
          <sparkline :width="270" :height="70" :chartData="word.trend"></sparkline>
        </div>
      </transition>
      <transition name="expand-info">
        <div v-if="!expanded" class="size">
          <sparkline :width="230" :height="70" :chartData="word.size"></sparkline>
        </div>
      </transition>
    </div>
    <div class="body" :class="{ 'expanded': expanded }">
      <div v-if="expanded" class="column">
        <line-chart :width="350" :height="200" :chartData="word.trend"></line-chart>
        <bullet value="24" label="now"></bullet>
        <bullet value="53" label="max"></bullet>
        <bullet value="+7" label="last hour"></bullet>
      </div>
      <div v-if="expanded" class="column">
        <div>Peaked 3 hours ago</div>
        <div class="text-faded text-small">2019-3-21 15:00 ET</div>
        <div class="divider"></div>
        <div class="info-line">
          <span class="info-value">24</span>
          <span class="info-text">mentions from</span>
        </div>
        <div class="info-line">
          <span class="info-value">16</span>
          <span class="info-text">users (1.5 per)</span></div>
        <div class="info-line">
          <span class="info-value">5</span>
          <span class="info-text">from infl (21%)</span>
        </div>
        <div class="info-line">
          <span class="info-value">77</span>
          <span class="info-text">total in 24 hours</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sparkline from '../charts/spark-line'
import LineChart from '../charts/line-chart'
import Bullet from '../charts/bullet'

export default {
  name: 'expandable-word-row',
  props: ['word'],
  data: () => ({
    expanded: false
  }),
  components: {
    Sparkline, LineChart, Bullet
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    }
  }
}
</script>

<style scoped lang="scss">
.word-row {
  user-select: none;
  cursor: pointer;
  transition: transform 0.2s ease, border-radius 0.2s ease;
  .header {
    display: flex;
    height: 80px;
    z-index: 2;
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
  }
  .body {
    z-index: 0;
    * {
      transition: opacity 0.6 ease;
      opacity: 0;
    }
    height: 0;
    flex-grow: 1;
    display: flex;
    flex-flow: row;
    transition: height 0.6s ease;
    &.expanded {
      height: 400px;
      padding-bottom: 30px;
      * {
        opacity: 1;
      }
    }
    .column {
      width: 50%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-between;
      font-size: 40px;
      .info-line {
        display: flex;
        justify-content: center;
        width: 100%;
        .info-value {
          width: 40%;
          text-align: right;
          font-size: 1.1em;
        }
        .info-text {
          width: 60%;
          padding-left: 10px;
          display: flex;
          align-items: center;
          font-size: 0.5em;
          color: #888;
        }
      }
      .divider {
        height: 1px;
        width: 90%;
        background-color: #AAA;
      }
    }
  }
  &.expanded {
    transform: scaleX(1.01);
    border-radius: 7px;
  }
  &:hover {
    transform: scaleX(1.01);
    border-radius: 7px;
  }
}
</style>
