<template>
  <div
    id='CurveComposer'
    style='
      font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
      background: #00000099;
      width: 100%;
      height: 100%;
      overflow: scroll;
      color: white;'>

    <div style="height: 24px;">

      {{title}}

      <label style="
        margin-left: 10px;
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



      <label style="
        background: #00000099;
        color: white;
        border: none;
        border: white solid 1px;
        border-radius: 5px;
        font-size: 0.75em;
        padding: 0 4px;" for="createCurveInput">new curve</label>
      <button
        id="createCurveInput"
        hidden
        @click="createCurve"></button>

      <label style="
        background: #00000099;
        color: white;
        border: none;
        border: white solid 1px;
        border-radius: 5px;
        font-size: 0.75em;
        padding: 0 4px;" for="createCurveInput">new string curve</label>
      <button
        id="createCurveInput"
        hidden
        @click="createStringCurve"></button>

    </div>

    <div v-for="c in curves" >

      <CurveEditor v-if="c.type === 'number'"
        ref="curves"
        :curve="c"
        :start="start"
        :end="end"></CurveEditor>

      <StringCurveEditor v-else-if="c.type === 'string'"
        ref="curves"
        :textScale="stringCurveTextSize"
        :curve="c"
        :start="start"
        :end="end"></StringCurveEditor>

    </div>

  </div>

</template>

<script>
import CurveEditor from './CurveEditor'
import StringCurveEditor from './StringCurveEditor'
import Curve from './Composer/Curve'
import StringCurve from './Composer/StringCurve'
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
    CurveEditor,
    StringCurveEditor
  },

  data: function(){
    return {
      start: 0,
      end: 1,
      stringCurveTextSize: 1.5
    }
  },

  methods: {

    createCurve(options) {
      this.addCurve( new Curve(options) )
    },

    createStringCurve(options) {
      this.addCurve( new StringCurve(options) )
    },

    addCurve(curve) {

      console.log( 'addCurve' );

      this.curves.push(curve)

      this.$forceUpdate()
    },

    loadCurves(json){

      // remove the current curves
      this.curves.length = 0

      // add the json curves
      for(var i in json){
        if(json[i].type === 'string') {
          this.addCurve( new StringCurve(json[i]))
        } else {
          this.addCurve( new Curve(json[i]))
        }
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
          points: c.points,
          type: c.type
        }
      })

      let blob = new Blob( [JSON.stringify(data, null, 2 )], {type : 'application/json' })
      saveAs( blob, 'curves.json' )
    },

    setRange(start, end){
      this.start = start
      this.end = end
      this.$forceUpdate()
    }
  }

};
</script>
