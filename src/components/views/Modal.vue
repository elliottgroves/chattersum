<template>
  <div class="modal">
    <transition name="modal">
      <div class="modal-mask" v-if="this.$store.state.modalShown" @click="$emit('close')">
        <div class="modal-wrapper">
          <div class="close-button">x</div>
          <div class="modal-container" @click.stop>

            <div class="modal-header">
              <h1>{{ this.$store.state.activeWord.word }}</h1>
            </div>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>

            <div class="modal-footer">
              <div class="spacer"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal'
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

    width: 600px;
    height: 400px;
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
  }

  .modal-body {
    flex-grow: 1;
    margin: 20px 0;
  }

  .modal-footer {
    display: flex;
    border-top: 1px solid #ddd;
    height: 70px;
  }

  // Transitions

  .modal-enter {
    opacity: 0;
    .modal-container {
      transform: translateY(-1000px) rotate(-10deg) scale(0.1);
    }
  }
  .modal-leave-to {
    opacity: 0;
    .modal-container {
      transform: translateY(1000px) scale(0.1);
    }
  }
  .modal-enter-active {
    transition: opacity 0.5s ease;
    .modal-container {
      transition: all 0.5s ease;
    }
  }
  .modal-leave-active {
    pointer-events: none;
    transition: opacity 0.5s ease;
    .modal-container {
      transition: all 0.4s ease;
    }
  }
}
</style>
