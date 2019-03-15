<template>
  <div class="container">
    curve composer

    <CurveEditor v-for="c in curves" :curve="c"></CurveEditor>
  </div>

</template>

<script>
import CurveEditor from './CurveEditor'

export default {

  props: ['curves'] ,

  mounted(){
    console.log( this.curves );
  },

  components: {
    CurveEditor
  }

};
</script>

<style scoped>
 .container{
  font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: magenta;
  color: white;
  vector-effect: non-scaling-stroke;
}

input, select {
  margin-right: 10px;
}
path, line {
  fill: none;
  stroke: #ffffff99;
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

path {
  pointer-events: none;
}

.point {
  stroke-width: 5;
  stroke: white;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
}
.point:hover {
  stroke: #ff00ff;
}

.selected-point {
  stroke: magenta;
  stroke-width: 7;
  /*pointer-events: none;*/
}

.no-pointer {
  pointer-events: none;
}

.input-container {
  position: relative;
  min-height: 20px;
  width: 100%;
  background: #00000044;
}

.curve-container{
  position: relative;
  height: 100px;
  width: 100%;
  background: #00000055;
}

.work-space{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000044;
  fill: none;
  stroke: white;
  stroke-weight: 1;
}
</style>
