<template>
  <div style='
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    background: #00000099;
    width: 100%;
    height: 100%;
    overflow: scroll;
    color: white;'>

    <div style="height: 24px;">

      {{title}}

      <label style="
        margin-right: 10px;
        background: #00000099;
        color: white;
        border: none;
        border: white solid 1px;
        border-radius: 5px;
        font-size: 0.75em;
        padding: 0 4px;" for="saveInput">save</label>
      <button
        id="saveInput"
        hidden
        type="file"
        @click="save">save</button>

      <label style="
        margin-right: 10px;
        background: #00000099;
        color: white;
        border: none;
        border: white solid 1px;
        border-radius: 5px;
        font-size: 0.75em;
        padding: 0 4px;" for="loadInput">load</label>
      <input
        id="loadInput"
        hidden
        type="file"
        @change="onLoad"/>

    </div>

    <CurveEditor ref="curves" v-for="c in curves" :curve="c"></CurveEditor>

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

    createCurve(options) {
      this.addCurve( new Curve(options) )
    },

    addCurve(curve) {
      this.curves.push(curve)
    },

    loadCurves(json){

      // remove the current curves
      this.curves.length = 0

      // add the json curves
      for(var i in json){
        this.addCurve( new Curve(json[i]))
      }

      // update the paths for each curve
      this.$nextTick( function() {
        if(this.$refs.curves){
          if(Array.isArray(this.$refs.curves)) {
            this.$refs.curves.forEach( ( crv ) => {
              crv.updatePath()
            });
          } else {
            this.$refs.updatePath()
          }
        }
      })
    },

    onLoad(e){
      let file = e.target.files[0];
      loadFile( file, this.loadCurves );
    },

    save() {

      var data = this.curves.map( c => {
        return {
          name: c.name,
          points: c.points
        }
      })

      let blob = new Blob( [JSON.stringify(data, null, 2 )], {type : 'application/json' })
      saveAs( blob, 'curves.json' )
    }
  }

};
</script>
