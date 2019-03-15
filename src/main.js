
if(true && module.hot){
  module.hot.accept(()=>{window.location.reload(true);})
}

import Vue from 'vue';
import App from './App';
import Curve from './Composer/Curve'

var crvs = []


// value, u, ease
for(var i=0; i<4; i++) {
  crvs.push(new Curve({
    name: 'curve_' + (i + 1),
    points: [
      [-2,0, 'smooth'],
      [0,0.5, 'smooth'],
      [-1,1, 'smooth']
    ]
  }))
}

Vue.config.productionTip = false


// //https://css-tricks.com/creating-vue-js-component-instances-programmatically/
var CurveEditor = Vue.extend(App)

var instance = new CurveEditor({
  el: '#app',
  propsData: {
    curves: crvs
  }
})


console.log( instance );






// import Vue from 'vue';
// import App from './App';

// import Curve from './Composer/Curve'

// var crvs = []

// for(var i=0; i<4; i++) {
//   crvs.push(new Curve())
// }
// // import Router from 'vue-router'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


// console.log( 'wtf' );