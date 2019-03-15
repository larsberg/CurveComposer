// Utils.js

// Linear mapping from range <a1, a2> to range <b1, b2>
const mapLinear = function ( x, a1, a2, b1, b2 ) {
  return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );
}

// https://en.wikipedia.org/wiki/Linear_interpolation
const lerp = function ( x, y, t ) {
  return ( 1 - t ) * x + t * y;
}

const clamp = function ( value, min, max ) {
  return Math.max( min, Math.min( max, value ) );
}


module.exports = {
  mapLinear: mapLinear,
  lerp: lerp,
  clamp: clamp,
}