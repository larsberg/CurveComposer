// main.js
import {CurvePlayer, createCurveComposer} from './CurveComposer'
import testJSON from './test.json'

var cp = new CurvePlayer({
  start: 0,
  duration: 30
})
cp.loadJSON(testJSON)

var cc = createCurveComposer({
  curves: cp.curves,
  start: cp.start,
  duration: cp.duration,
})

setInterval( function () {
  cp.position = (cp.position + 0.01) % cp.duration
}, 10)


cp.onChange('stringCurve', (value, prev) => {
  demo.innerHTML = value
} )


console.log( CurveComposer );