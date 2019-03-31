<template>
  <div class="bullet-container">
    <span class="value">{{ value }}</span>
    <span class="label">{{ label }}</span>
    <div class="bullet-line"></div>
  </div>
</template>

<script>
export default {
  name: 'Bullet',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.bullet-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  .value {
    font-size: 1.2em;
    width: 20%;
    text-align: right;
  }
  .label {
    color: #888;
    margin: 0 4px;
    font-size: 0.65em;
    width: 20%;
    text-align: center;
  }
  .bullet-line {
    width: 35%;
    height: 1px;
    background-color: #000;
  }
}
</style>
