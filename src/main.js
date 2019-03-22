// main.js
import CurveComposer from './CurveComposer'
import testJSON from './testTwo.json'

var cc = CurveComposer.setup()
cc.loadCurves(testJSON)

var sc = new CurveComposer.stringCurve()

sc.addPoint("one", 0)
sc.addPoint("two", .33)
sc.addPoint("three", .66)

for(var i=0; i<1; i+=0.02) {
  console.log( sc.sample(i) );
}

cc.addCurve(sc)

console.log( cc );

/*
TODO:
  - [ ] input options:
    - [ ] collapse all the curves
    - [ ] background hex-color
 */