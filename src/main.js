// main.js
import CurveComposer from './CurveComposer'
import testJSON from './test.json'

var cc = CurveComposer.setup()
cc.loadCurves(testJSON)

cc.start = 0
cc.end = 30







console.log( cc );

/*
TODO:
  - [ ] input options:
    - [ ] collapse all the curves
    - [ ] background hex-color
 */