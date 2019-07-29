<template>
 <div class="dashboard">
   <NavMenu></NavMenu>
   <!-- <WordList></WordList> -->
   <expandable-word-list></expandable-word-list>
 </div>
</template>

<script>
import NavMenu from '../ui/nav-menu'
import WordList from '../list-with-modal/word-list'
import ExpandableWordList from '../expandable-list/expandable-word-list'

export default {
  name: 'Dashboard',
  components: {
    NavMenu, WordList, ExpandableWordList
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
}
</style>
