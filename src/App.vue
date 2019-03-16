<template>
  <div class="container">
    <div style="height: 24px;">

      {{title}}

      <label class="loadsave" for="saveInput">save</label>
      <button hidden id="saveInput" type="file" @click="save">save</button>

      <label class="loadsave" for="loadInput">load</label>
      <input hidden id="loadInput" type="file" @change="onLoad"/>

    </div>

    <CurveEditor v-for="c in curves" :curve="c"></CurveEditor>

  </div>

</template>

<script>
import CurveEditor from './CurveEditor'
import Curve from './Composer/Curve'
import saveAs from 'save-as'

function loadFile (file, callback) {

  var reader = new FileReader();

  reader.addEventListener( 'load', function ( event ) {
    var contents = event.target.result;
    callback( JSON.parse( contents ) );
  }, false );

  reader.readAsText( file );

};

export default {

  props: {
    curves: {
      default: () => ([])
    },
    title: {default: 'curve composer'}
  },

  components: {
    CurveEditor
  },

  methods: {

    addCurve(curve) {
      this.curves.push(curve)
    },

    createCurve(options) {
      this.addCurve( new Curve(options) )
    },

    loadJSON(json){

      // remove the current curves
      this.curves.length = 0

      // add the json curves
      for(var i in json){
        this.curves.push( new Curve(json[i]))
      }
    },

    onLoad(e){

      let file = e.target.files[0];
      let filename = file.name;
      let extension = filename.split( '.' ).pop().toLowerCase();

      if(extension !== 'json') {
        console.warn( `this doesn't support ${extension} file types` );
      } else {
        loadFile( file, this.loadJSON.bind(this) );
      }
    },

    save() {

      var data = this.curves.map( c => {
        return {
          name: c.name,
          points: c.points
        }
      })

      let blob = new Blob( [JSON.stringify(data, null, 2 )], { type : 'application/json' } )
      saveAs( blob, 'curves.json' )
    }
  }

};
</script>

<style scoped>
.container{
  font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #111112;
  color: white;
  vector-effect: non-scaling-stroke;
}


input, button {
  margin-right: 10px;
  background: #00000099;
  color: white;
  border: none;
}


.loadsave {
  border: white solid 1px;
  border-radius: 5px;
  font-size: 0.75em;
  padding: 0 4px;
}

</style>
