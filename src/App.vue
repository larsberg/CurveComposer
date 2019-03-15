<template>
  <div class="container">
    curve composer

    <div
      style="
        position: relative;
        width: calc(100%-4);
        border: white solid 1px;">

        <div class="input-container">

          <div v-if="activePoint">
            <label>{{curve.name}} ease</label>
            <select name="eases" value="smooth" @change="onPointChange">
              <option v-for="e in easeTypes"
                :value='e'
                :selected="activePoint && activePoint[2] === e">{{e}}</option>
            </select>
            <label>u</label>
            <input
              type="number"
              name="value"
              step="0.001"
              :value="Number(activePoint[0])"
              @change="onPointChange">
            <label>v</label>
            <input
              type="number"
              name="position"
              step="0.001"
              :value="Number(activePoint[1])"
              @change="onPointChange">
          </div>
          <div v-else> {{curve.name}} </div>
        </div>
        <div
          v-if="isShown"
          class="curve-container">
          <svg
            @mouseup="onMouseUp"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @click="handleClick"
            :view-box.camel="`0 ${min} 1 ${Math.abs(max - min)}`"
            :preserve-aspect-ratio.camel="'none'"
            xmlns="http://www.w3.org/2000/svg"
            class="work-space">

            <g>
              <path :d="getPath()"/>
            </g>

            <line
              v-for="(p, index) in curve.points"
              :class="[
                'point',
                p === activePoint ? 'selected-point' : '',
                dragged ? 'no-pointer' : '' ]"
              :data-index="index"
              :x1="p[1]"
              :y1="p[0]"
              :x2="p[1]"
              :y2="p[0]"
              fill="red"
              style="vector-effect: non-scaling-stroke;" />

          </svg>
        </div>
    </div>
  </div>

</template>

<script>
import {mapLinear, lerp, clamp} from './Composer/Utils'
import Curve from './Composer/Curve'
import eases from './Composer/eases'

const easeTypes = Object.keys(eases)

//
// transform="matrix(sx, 0, 0, sy, cx-sx*cx, cy-sy*cy)"
//

const defaultCurve = () => (new Curve())

export default {

  props: {

    isShown: {
      default: true
    },

    min: {
      default: -1
    },

    max: {
      default: 1
    },

    w: {
      type: Number,
      default: window.innerWidth
    },

    h: {
      type: Number,
      default: 100
    },

    curve: {
      type: Object,
      default: defaultCurve
    }
  },

  data() {
    return {
      activePoint: null,
      mouseDown: false,
      dragged: false,
      easeTypes: easeTypes
    }
  },

  methods: {

    getPath: function(){

      var w = this.w
      var p = 'M'

      for(var i=0; i<=w; i+=1) {
        p += `${i/w} ${this.curve.sample(i/w)} `
      }

      return p
    },

    onPointChange(e) {

      if(this.activePoint) {

        switch( e.target.name ) {
          case 'value':
            this.activePoint[1] = e.target.value
            break;
          case 'position':
            this.activePoint[0] = e.target.value
            break
          case 'eases':
            this.activePoint[2] = e.target.value
            break;
        }

        this.curve.sortPoints()
        this.$forceUpdate()

      }

    },

    onEaseChange(e) {

      var ease = e.target.value

      if(this.activePoint) {
        this.activePoint[2] = ease
        this.$forceUpdate()
      }
    },

    onMouseUp(e) {
      this.mouseDown = false
      this.dragged = false
    },

    onMouseDown(e) {

      this.mouseDown = true

      if(e.target.tagName === "line") {

        e.stopPropagation()

        var index = Number(e.target.dataset.index)

        this.activePoint = this.curve.points[index]

        this.$forceUpdate()

      } else {

        this.activePoint = null

      }
    },

    onMouseMove(e) {
      if(this.mouseDown && !e.metaKey ) {
        this.dragged = true
        this.onDrag(e)
      }
    },

    onDrag(e) {

      if(this.activePoint) {

        // var el = e.target
        var el = this.$el.querySelector('.work-space')
        var bb = el.getBoundingClientRect()
        var x = e.clientX
        var y = e.clientY
        var u = mapLinear(x, bb.x, bb.x + bb.width, 0, 1)
        var v = mapLinear(y, bb.y, bb.y + bb.height, this.min, this.max)


        u = Number(u.toFixed(4))
        v = Number(v.toFixed(4))

        this.activePoint[1] = u
        this.activePoint[0] = v

        this.$forceUpdate()

        this.curve.sortPoints()
      }
    },

    handleClick(e) {

      var el = e.target

      if(el.tagName === 'svg') {

        if(!this.dragged && e.metaKey) {

          var bb = el.getBoundingClientRect()
          var x = e.clientX
          var y = e.clientY
          var u = mapLinear(x, bb.x, bb.x + bb.width, 0, 1)
          var v = mapLinear(y, bb.y, bb.y + bb.height, this.min, this.max)

          u = Number(u.toFixed(4))
          v = Number(v.toFixed(4))

          var p = this.curve.addPoint(v, u)

          this.activePoint = p
        }

      }

    }

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
