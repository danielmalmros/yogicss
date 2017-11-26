<template>
  <div id="app" class="page-wrapper">
    <navigation></navigation>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
// Import components

import Navigation from './components/navigation.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    navigation: Navigation,
    'footer-view': Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus">
@import '../node_modules/normalize.css'; // base styles
</style>