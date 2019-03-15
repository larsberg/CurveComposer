// Curve.js
import {mapLinear, lerp, clamp} from './Utils'
import eases from './eases'


for(var i in eases) {
  console.log( eases[i]( 0.333) );
}


class Curve {

  constructor(options) {
    Object.assign(this, {
      name: "curve_name",
      points: []
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

  getPointIndex( pt ){
    return this.points.findIndex( p => pt === p )
  }

  sample( u ) {

    // curvePoint = [value, u, ease]
    if(!this.points.length)  return 0;

    var cp = this.points

    // return first or last values when on the edges.
    // I think this makes things faster but never tested it...
    if(cp[cp.length - 1][1] <= u) {
      return cp[cp.length - 1][0]
    }
    else if(cp[0][1] > u) {
      return cp[0][0]
    }

    // find high and low indices
    var hiIndex = cp.findIndex( p => p[1] > u )
    var loIndex = cp[hiIndex][1] > u ? Math.max(0, hiIndex - 1) : hiIndex

    // return interpolation between hi and lo using the lower ease
    var a = cp[loIndex]
    var b = cp[hiIndex]
    var t = mapLinear(u, a[1], b[1], 0, 1 )

    return  lerp( a[0], b[0], eases[a[2]]( t ) );
  }


}


module.exports = Curve