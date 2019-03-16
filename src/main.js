
if(true && module.hot){
  module.hot.accept(()=>{window.location.reload(true);})
}

import Vue from 'vue';
import App from './App';
import Curve from './Composer/Curve'
// import saveAs from 'save-as'

import testSettings from './test.json'

const crvs = []


// // value, u, ease
// for(var i=0; i<4; i++) {
//   crvs.push(new Curve({
//     name: 'curve_' + (i + 1),
//     points: [
//       [-2,0, 'smooth'],
//       [0,0.5, 'smooth'],
//       [-1,1, 'smooth']
//     ]
//   }))
// }

Vue.config.productionTip = false


// //https://css-tricks.com/creating-vue-js-component-instances-programmatically/
var CurveEditor = Vue.extend(App)

var instance = new CurveEditor({
  el: '#app',
  propsData: {
    curves: crvs
  }
})


function addCurve(name='CURVE', points=[ [-2,0, 'smooth'], [0,0.5, 'smooth'], [-1,1, 'smooth'] ]) {
  var c = new Curve({
    name: name,
    points: points
  })

  crvs.push(c)
}


function loadJSON( json ) {
  for(var i in json) {
    crvs.push(new Curve(json[i]))
  }
}

// function save (config, suggestedName) {

//   var data = crvs.map( c => {
//     return {
//       name: c.name,
//       points: c.points
//     }
//   })

//   let blob = new Blob( [JSON.stringify(data, null, 2 )], { type : 'application/json' } )
//   saveAs( blob, suggestedName || 'oohwee.json' )
// }



loadJSON(testSettings)

// // <input type="file" hidden @change="onLoadInputChange"/>
// var loadInput = document.body.insertAdjacentHTML('beforeend', `<input type="file" hidden/>`);
// console.log( 'loadInput', loadInput );

// function load(file, callback) {

//   var reader = new FileReader();

//   reader.addEventListener( 'load', function ( result ) {
//     console.log( result );
//     // var data = event.target.result;
//     // console.log( data );
//     // callback( JSON.parse( contents ) );
//   }, false );

//   reader.readAsText( file );

// };

// setTimeout(function(){
//   load('./test.json')
// }, 1000)


