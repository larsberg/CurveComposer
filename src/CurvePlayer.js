// CurvePlayer.js

import Curve from './Composer/Curve'
import StringCurve from './Composer/StringCurve'


class CurvePlayer{

  constructor( options ) {
    Object.assign(this, {
      start: 0,
      duration: 1,
      curves: [],
      onChangeEvents: {},
      _position: 0,
      _values: {},
    }, options || {})

    const onChangeEvents = this.onChangeEvents

    const handler = {

      set(obj, prop, value) {
        // if the value is different call onchange
        if( obj[prop] !== value) {

          if(onChangeEvents[prop]) {
            onChangeEvents[prop](value, obj[prop])
          }
          // else {
          //   console.log( `'${prop}' ${obj[prop]} → ${value} ` );
          // }
        }

        return Reflect.set(...arguments)
      }
    };

    this.values = new Proxy(this._values, handler);

    var arrayMonitor = new Proxy(this.curves, handler)
  }

  set position(value){
    this._position = value
    this.updateValues()
  }

  get position(){
    return this._position
  }

  updateValues(){
    this.curves.forEach( ( crv ) => {
      this.values[crv.name] = crv.sample(this._position)
    });
  }

  getValue(curveName, autoAdd = true, valueType="number") {
    if(this.values[name]) {

      return this.values[name]

    } else if (autoAdd) {

      if(valueType === 'string') {
        this.createStringCurve({name: curveName})
      } else {
        this.createCurve({name: curveName})
      }
    }
  }

  addCurve(curve) {

    this.curves.push( curve )
    this.values[curve.name] = curve.points.length ? curve.points[0][0] : 0

    return curve
  }

  loadJSON(json) {
    for(var i in json){
      if(json[i].type === 'string') {
        this.addCurve( new StringCurve(json[i]))
      } else {
        this.addCurve( new Curve(json[i]))
      }
    }
  }

  createCurve(options) {
    return this.addCurve(new Curve(options))
  }

  createStringCurve(options) {
    return this.addCurve(new StringCurve(options))
  }
}



module.exports = CurvePlayer

