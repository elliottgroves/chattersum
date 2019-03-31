import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import App from './App'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

const store = new Vuex.Store({
  state: {
    modalShown: false,
    activeWord: null,
    words: []
  },
  actions: {
    loadWords ({ commit }) {
      axios
        .get('http://localhost:3000/words')
        .then(response => {
          commit('setWords', response.data)
        })
    }
  },
  mutations: {
    showModal (state) {
      state.modalShown = true
    },
    hideModal (state) {
      state.modalShown = false
    },
    setActiveWord (state, word) {
      state.activeWord = word
    },
    setWords (state, words) {
      state.words = words
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  methods: {
    showModal () {
      store.commit('showModal')
    },
    hideModal () {
      store.commit('hideModal')
    }
  },
  mounted () {
    store.dispatch('loadWords')
  }
})
