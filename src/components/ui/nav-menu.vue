<template>
  <div class="nav-menu">
    <img class="logo" src="../../assets/images/logo.png">
    <p class="info">
      n: The sum of all the chatter.<br />
      These words and phrases have been<br />
      particularly active on <a href="https://www.twitter.com/" target="_">Twitter</a> recently.<br />
      Below: click column headings to sort, click a row for detail.
    </p>
    <button>v</button>
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped lang="scss">
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #999;
  .logo {
    object-fit: none;
  }
  .info {
    a {
      color: #337ab7;
      text-decoration: none;
    }
  }
  button {
    width: 80px;
    height: 60px;
    margin-right: 20px;
  }
}
</style>
