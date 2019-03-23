// main.js
import CurveComposer from './CurveComposer'
import CurvePlayer from './CurvePlayer'
import testJSON from './test.json'



var cp = new CurvePlayer({
  start: 0,
  duration: 30
})
cp.loadJSON(testJSON)

var cc = CurveComposer.setup({
  curves: cp.curves,
  start: cp.start,
  duration: cp.duration,
})


setInterval( function () {
  cp.position = Math.random()
}, 4000)
