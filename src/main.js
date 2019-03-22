// main.js
import CurveComposer from './CurveComposer'
import testJSON from './test.json'

var cc = CurveComposer.setup()
cc.loadCurves(testJSON)

cc.start = -1
cc.end = 2

// setTimeout( function () {
//   cc.setRange(-1, 10)
// }, 1000)


console.log( cc );

/*
TODO:
  - [ ] input options:
    - [ ] collapse all the curves
    - [ ] background hex-color
 */