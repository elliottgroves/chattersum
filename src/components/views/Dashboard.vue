<template>
 <div class="dashboard">
   <NavMenu></NavMenu>
   <WordList></WordList>
 </div>
</template>

<script>
import NavMenu from '../ui/NavMenu'
import WordList from '../elements/WordList'

export default {
  name: 'Dashboard',
  components: {
    NavMenu, WordList
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #ddd;
  z-index: 100;
}
</style>
