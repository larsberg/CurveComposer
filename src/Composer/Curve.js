// Curve.js
import {mapLinear, lerp, clamp} from './Utils'
import eases from './eases'


class Curve {

  constructor(options) {
    Object.assign(this, {
      name: "curve_name",
      points: [],
      currentPosition: 0,
      currentSample: 0,
      type: 'number'
    }, options || {})
  }

  sortPoints() {

    this.points.sort( (a, b) => {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    })
  }

  addPoint( value, u, ease ) {

    var cp = [value, u, ease || 'smooth']

    this.points.push( cp )

    this.sortPoints()

    return cp
  }

  removePoint(index) {
    this.points.splice( index, 1 )
  }

  findAndRemove(p) {
    var index = this.points.indexOf(p)
    if(index !== -1) {
      this.removePoint(index)
    }
  }

  getPointIndex( pt ){
    return this.points.findIndex( p => pt === p )
  }

  sample( u, bSetCurrentPosition=true ) {

    // curvePoint = [value, u, ease]
    if(!this.points.length)  return 0;

    var cp = this.points
    var sample = 0

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

      // return interpolation between hi and lo using the lower ease
      var a = cp[loIndex]
      var b = cp[hiIndex]
      var t = mapLinear(u, a[1], b[1], 0, 1 )

      sample = lerp( a[0], b[0], eases[a[2]]( t ) );
    }


    // this is used to set the current position
    if(bSetCurrentPosition){
      this.currentPosition = u
      this.currentSample = sample
    }

    return sample

  }

  getMinValue() {

    if(!this.points.length)  return 0;

    var lo = Infinity

    this.points.forEach( ( p ) => {
      lo = Math.min(p[0], lo)
    });

    return lo
  }
  getMaxValue() {

    if(!this.points.length)  return 1;

    var hi = -Infinity

    this.points.forEach( ( p ) => {
      hi = Math.max(p[0], hi)
    });

    return hi
  }


}


module.exports = Curve