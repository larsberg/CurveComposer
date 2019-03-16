
if(true && module.hot){
  module.hot.accept(()=>{window.location.reload(true);})
}

import Vue from 'vue';
Vue.config.productionTip = false

import App from './App';
import Curve from './Composer/Curve'

import testSettings from './test.json'

// //https://css-tricks.com/creating-vue-js-component-instances-programmatically/
var CurveEditor = Vue.extend(App)

var instance = new CurveEditor({
  el: '#app'
})


function addCurve(name='CURVE', points=[ [-2,0, 'smooth'], [0,0.5, 'smooth'], [-1,1, 'smooth'] ]) {
  var c = new Curve({
    name: name,
    points: points
  })

  crvs.push(c)
}


instance.loadJSON(testSettings)


var u = 0
function sampleTheCurves() {

  u = (u + 0.001) % 1

  instance.curves.forEach(c => {
    c.sample(u)
  })

  window.requestAnimationFrame(sampleTheCurves)
}

window.requestAnimationFrame(sampleTheCurves)

