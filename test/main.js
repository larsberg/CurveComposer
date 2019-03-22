// main.js
import CurveComposer from '../build/CurveComposer.min'
import testJSON from './test.json'

var cc = CurveComposer.setup()
cc.loadCurves(testJSON)
