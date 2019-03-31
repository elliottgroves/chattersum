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
@import './scss/main.scss';
</style>
