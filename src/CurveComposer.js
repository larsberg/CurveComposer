
// if(true && module.hot){
//   module.hot.accept(()=>{window.location.reload(true);})
// }

import Vue from 'vue';
import App from './App';
import Curve from './Composer/Curve'

// import { readFileSync } from 'fs';
// const rawStylz = readFileSync(__dirname + '/CurveComposer.css', 'utf-8');
// var style = document.createElement('style')
// style.type = 'text/css'
// style.appendChild(document.createTextNode(rawStylz))
// document.head.appendChild(style)


const CurveEditor = Vue.extend(App)


function CurveCopmoser( elementId = "#app") {
  var instance = new CurveEditor({
    el: elementId
  })

  return instance
}
Vue.config.productionTip = false

module.exports = CurveCopmoser
