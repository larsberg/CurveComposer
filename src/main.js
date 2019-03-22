// main.js
import CurveComposer from './CurveComposer'
import testJSON from './testTwo.json'

var cc = CurveComposer.setup()
cc.loadCurves(testJSON)

console.log( cc );

/*
TODO:
  - [ ] input options:
    - [ ] collapse all the curves
    - [ ] background hex-color
 */