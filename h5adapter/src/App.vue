<template>
  <div id="app" class="fdc">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('cart/getcartlist')
  }
}
</script>

<style lang="scss" scoped>
@import './static/scss/demo';
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;

}
</style>