// main.js
import CurveComposer from '../build/CurveComposer'
import testJSON from '../src/test.json'

var cc = CurveComposer.setup()
cc.loadCurves(testJSON)
