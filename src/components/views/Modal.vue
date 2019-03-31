<template>
  <div class="modal">
    <transition name="modal">
      <div class="modal-mask" v-if="modalShown" @click="$emit('close')">
        <div class="modal-wrapper">
          <div class="close-button">x</div>
          <div class="modal-container" @click.stop>

            <div class="modal-header">
              <h1>{{ activeWord.word }}</h1>
              <div class="freshness-indicator"></div>
            </div>

            <div class="modal-body">
              <div class="column">
                <line-chart :width="350" :height="200" :chartData="activeWord.trend"></line-chart>
                <bullet value="24" label="now"></bullet>
                <bullet value="53" label="max"></bullet>
                <bullet value="+7" label="last hour"></bullet>
              </div>
              <div class="column">
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

            <div class="modal-footer">
              <div class="label">Search on</div>
              <div class="button">tw</div>
              <div class="button">gn</div>
              <div class="button">cs</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LineChart from '../charts/line-chart'
import Bullet from '../charts/bullet'

export default {
  name: 'Modal',
  components: {
    LineChart,
    Bullet
  },
  computed: {
    activeWord () {
      return this.$store.state.activeWord
    },
    modalShown () {
      return this.$store.state.modalShown
    }
  }
}
</script>

<style lang="scss">
.modal {
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  .modal-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    .close-button {
      font-size: 40px;
      position: absolute;
      right: 40px;
      top: 14px;
      color: #ddd;
      cursor: pointer;
    }
  }

  .modal-container {
    display: flex;
    flex-flow: column;
    z-index: 99999;

    width: 800px;
    height: 600px;
    margin: 0px auto;
    padding: 20px 30px;

    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .33);
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header {
    margin-top: 0;
    color: #223035;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    .freshness-indicator {
      width: 40px;
      height: 24px;
      margin-right: 20px;
      background-color: #18a81b;
    }
  }

  .modal-body {
    flex-grow: 1;
    margin: 20px 0;
    display: flex;
    flex-flow: row;
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

  .modal-footer {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    height: 70px;
    border-top: 1px solid #ddd;
    padding-top: 12px;
    .label {
      margin-right: 8px;
    }
    .button {
      margin: 0 4px;
      border: 1px solid #888;
      border-radius: 4px;
      padding: 10px;
    }
  }
}
</style>
