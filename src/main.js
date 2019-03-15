
if(false && module.hot){
  module.hot.accept(()=>{window.location.reload(true);})
}

import Vue from 'vue';
import App from './App';
// import Router from 'vue-router'

new Vue({
  el: '#app',
  render: h => h(App)
})
