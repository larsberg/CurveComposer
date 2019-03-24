import Vue from 'vue';
import App from './App';
import Curve from './Composer/Curve'
import StringCurve from './Composer/StringCurve'
import CurvePlayer from './CurvePlayer'


const CurveEditor = Vue.extend(App)


function createCurveComposer({elementId = "#CurveComposer", curves=[], start=0, duration=1}) {
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

  createCurveComposer: createCurveComposer,

  CurvePlayer: CurvePlayer,

  curve: Curve,

  stringCurve: StringCurve

}