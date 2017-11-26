import Vue from 'vue'
import Bourgeon from 'bourgeon'
import App from './App.vue'

Vue.use(Bourgeon, {})

// Global components
// Vue.component('navigation', Navigation)

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
