<template>
  <div id="app">
    <router-view/>
    <Modal @close="hideModal()">
      <h3 slot="header">{{ activeWord }}</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from './components/views/Modal'
export default {
  name: 'App',
  components: {
    Modal
  },
  computed: {
    activeWord () {
      return this.$store.state.activeWord
    }
  },
  methods: {
    hideModal () {
      this.$root.hideModal()
    }
  }
}
</script>

<style lang="scss">
html, body {
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  #app {
    width: 100%;
    height: 100%;
  }
}
.spacer {
  flex-grow: 1;
}
</style>
