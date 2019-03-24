// StringCurve.js
import Curve from './Curve'

class StringCurve extends Curve {

  constructor( options ) {

    super(Object.assign({
      type: 'string',
      name: 'string_curve',
      currentSample: ''
    }, options || {}));

  }

  sample(u, bSetCurrentPosition=true ) {

    // curvePoint = [value, u, ease]
    if(!this.points.length)  return undefined;

    var sample, cp = this.points;

    if(cp[cp.length - 1][1] <= u) {
      // return first or last values when on the edges.
      // I think this makes things faster but never tested it...
      sample = cp[cp.length - 1][0]
    } else if(cp[0][1] > u) {
      sample = cp[0][0]
    } else {

      // find high and low indices
      var hiIndex = cp.findIndex( p => p[1] > u )
      var loIndex = cp[hiIndex][1] > u ? Math.max(0, hiIndex - 1) : hiIndex

      // always return the ower index value
      sample = cp[loIndex][0]
    }


    // this is used to set the current position
    if(bSetCurrentPosition){
      this.currentPosition = u
      this.currentSample = sample
    }


    return sample

  }
}

module.exports = StringCurve