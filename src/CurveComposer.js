import Vue from 'vue';
import App from './App';
import Curve from './Composer/Curve'
import StringCurve from './Composer/StringCurve'


const CurveEditor = Vue.extend(App)


function CurveComposer({elementId = "#CurveComposer", curves=[], start=0, duration=1}) {
  var instance = new CurveEditor({
    el: elementId,
    propsData: {
      curves: curves,
      duration: duration,
      start: start,
    }
  })

  return instance
}

Vue.config.productionTip = false

module.exports = {

  setup: CurveComposer,

  curve: Curve,

  stringCurve: StringCurve

}