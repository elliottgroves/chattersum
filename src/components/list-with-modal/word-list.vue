<template>
  <div class="word-list">
    <div class="header-row">
      <div class="freshness">Freshness</div>
      <div class="word">Word</div>
      <div class="trend">Trend (24h)</div>
      <div class="size">Size (24h)</div>
    </div>
    <WordRow v-for="(word, index) in this.$store.state.words" :word="word" :class="{even: index % 2, odd: !(index % 2)}" :key="index"></WordRow>
  </div>
</template>

<script>
import WordRow from './word-row'
export default {
  name: 'WordList',
  components: {
    WordRow
  }
}
</script>

<style scoped lang="scss">
.word-list {
  width: 1000px;
  margin: 30px auto 0 auto;
  box-shadow: 0px 6px 8px 4px #aaa;
  .header-row {
    display: flex;
  }
  .header-row * {
    background-color: #223035;
    color: #fff;
    padding: 8px;
    transition: all 0.1s ease-out;
    cursor: pointer;
  }
  .header-row *:hover {
    background-color: #fff;
    color: #223035;
    padding: 8px;
  }
  .freshness {
    width: 100px;
  }
  .word {
    width: 350px;
  }
  .trend {
    width: 300px;
  }
  .size {
    width: 250px;
  }

  .odd {
    background-color: #ddd;
  }
  .even {
    background-color: #ccc;
  }
}
</style>
