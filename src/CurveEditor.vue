<template>
  <div style="
    position: relative;
    width: calc(100%-4);
    border: white solid 1px;">

    <div class="input-container">

      <svg
      @click="onToggle"
      style="
        position: absolute;
        right: 1;
        top: 1;
        width: 14px;
        height: 14px;
        stroke: white;
        stroke-width: 1;
        fill: #00000055">

        <circle
          r="6"
          cx="7"
          cy="7"
          stroke="white"
          fill="inherit"/>

        <line x1="3" y1="7" x2="11" y2="7" style="stroke: inherit; stroke-width: inherit;" />
        <line v-if="!isShown" y1="3" x1="7" y2="11" x2="7" style="stroke: inherit; stroke-width: inherit;" />

      </svg>

      <!-- <div class="toggle">{{isShown ? '+' : '-' }}</div> -->

      <div class="info-bar" v-if="isShown && activePoint">
        <label>{{curve.name}} ease:</label>
        <select name="eases" value="smooth" @change="onPointChange">
          <option v-for="e in easeTypes"
            :value='e'
            :selected="activePoint && activePoint[2] === e">{{e}}</option>
        </select>
        <label>u:</label>
        <input
          style="width: 7em"
          type="number"
          name="position"
          step="0.001"
          :value="Number(activePoint[1])"
          @change="onPointChange">
        <label>v:</label>
        <input
          style="width: 7em"
          type="number"
          name="value"
          step="0.001"
          :value="Number(activePoint[0])"
          @change="onPointChange">
        <label>range:</label>
        <input
          style="width: 7em"
          type="number"
          name="low"
          step="0.001"
          :value="min"
          @change="onRangeChange">
        <input
          style="width: 7em"
          type="number"
          name="hi"
          step="0.001"
          :value="max"
          @change="onRangeChange">
      </div>
      <div class="info-bar" v-else> {{curve.name}} </span>
    </div>
    <div
      v-if="isShown"
      class="curve-container">
      <svg
        @mouseup="onMouseUp"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @click="handleClick"
        :view-box.camel="getViewBox()"
        :preserve-aspect-ratio.camel="'none'"
        xmlns="http://www.w3.org/2000/svg"
        class="work-space">

        <g :transform="getTransform()">
          <path :d="getPath()"/>

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
        </g>

      </svg>
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

  name: 'curve',

  props: {

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
      isShown: true,
      activePoint: null,
      mouseDown: false,
      dragged: false,
      easeTypes: easeTypes,
      min: -1,
      max: 1,
    }
  },

  mounted () {
    this.min = this.curve.getMinValue()
    this.max = this.curve.getMaxValue()
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

    getViewBox() {
      return `0 ${this.min} 1 ${Math.abs(this.max - this.min)}`
    },

    getTransform() {

      // scale (we're flipping it vertically)
      var sx = 1
      var sy = -1

      //center
      var cx = 0.5
      var cy = (this.max + this.min) * 0.5

      return `matrix(${sx}, 0, 0, ${sy}, ${cx-sx*cx}, ${cy-sy*cy})`
    },

    onToggle(e) {
      this.isShown = !this.isShown
    },

    onPointChange(e) {

      if(this.activePoint) {

        switch( e.target.name ) {
          case 'value':
            var val = Number(e.target.value)
            this.activePoint[0] = val

            this.min = Math.min(val, this.min)
            this.max = Math.max(val, this.max)

            break;
          case 'position':
            this.activePoint[1] = Number(e.target.value)
            break
          case 'eases':
            this.activePoint[2] = e.target.value
            break;
        }

        this.curve.sortPoints()
        this.$forceUpdate()

      }

    },

    onRangeChange(e) {
      // console.log( e.target.name );
      if(e.target.name === 'low') {
        this.min = Number(e.target.value)
      } else {
        this.max = Number(e.target.value)
      }
      this.$forceUpdate()
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
        var y = e.offsetY
        var u = mapLinear(x, bb.x, bb.x + bb.width, 0, 1)
        var v = mapLinear(y, 0, bb.height, this.max, this.min)


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
          var x = e.offsetX // e.clientX
          var y = e.offsetY // e.clientY

          var u = mapLinear(x, 0, bb.width, 0, 1)
          var v = mapLinear(y, 0, bb.height, this.max, this.min)

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

.info-bar{
  min-height: 22px
}

</style>
