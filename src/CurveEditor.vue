<template>
  <div
    style="
      position: relative;
      width: calc(100%-4);
      border-bottom: #ffffffaa solid 0.5px;">

    <div class="input-container">

      <!-- toggle expand -->
      <svg
      @click="onToggle"
      class="expandToggle">

        <circle r="6" cx="7" cy="7" stroke="white" fill="inherit"/>

        <line x1="3" y1="7" x2="11" y2="7" style="stroke: inherit; stroke-width: inherit;" />
        <line v-if="!isShown" y1="3" x1="7" y2="11" x2="7" style="stroke: inherit; stroke-width: inherit;" />

      </svg>

      <div class="info-bar" v-if="isShown">
        <div style="width: 100%; font-size: 0.75em;">
          {{curve.name}} {{ bUpdateCrosshairs ? Number(curve.currentSample.toFixed(3)) : ''}}
        </div>

        <label style="color: darkgrey;">hi:</label>
        <input
          style="width: 5em; color: cyan;"
          type="number"
          name="hi"
          step="0.001"
          :value="max"
          @change="onRangeChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
        <label style="color: darkgrey;">low:</label>
        <input
          style="width: 5em; color: cyan;"
          type="number"
          name="low"
          step="0.001"
          :value="min"
          @change="onRangeChange"
          @focus="onInputFocus"
          @blur="onInputBlur">

        <label v-if="activePoint">pt:</label>
        <select style="color: magenta;" v-if="activePoint" name="eases" value="smooth" @change="onPointChange">
          <option v-for="e in easeTypes"
            :value='e'
            :selected="activePoint && activePoint[2] === e">{{e}}</option>
        </select>
        <label v-if="activePoint">u:</label>
        <input
          v-if="activePoint"
          style="width: 7em;color: magenta;"
          type="number"
          name="position"
          step="0.001"
          :value="Number(activePoint[1])"
          @change="onPointChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
        <label v-if="activePoint">v:</label>
        <input
          v-if="activePoint"
          style="width: 7em;color: magenta;"
          type="number"
          name="value"
          step="0.001"
          :value="Number(activePoint[0])"
          @change="onPointChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
      </div>
      <label class="info-bar" v-else> {{curve.name}} </label>
    </div>
      <!--  -->
    <div
      tabIndex=1
      @keyup.delete="onDelete"
      @mouseleave="onMouseLeave"
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

          <!-- mouse position cross hairs -->
          <line v-if="isMouseOver" class="no-pointer" style="stroke: #ffffff66;"
            :x1="mouse.x"
            :y1="min"
            :x2="mouse.x"
            :y2="max" />

          <line v-if="isMouseOver" class="no-pointer" style="stroke: #ffffff66;"
            :x1="0"
            :y1="mouse.y"
            :x2="1"
            :y2="mouse.y"/>



          <!-- current sample crosshairs -->
          <line
            v-if="bUpdateCrosshairs"
            class="no-pointer" style="stroke: #99999933;"
            :x1="curve.currentPosition"
            :y1="min"
            :x2="curve.currentPosition"
            :y2="max" />

          <line
            v-if="bUpdateCrosshairs"
            class="no-pointer" style="stroke: #ffffff33;"
            :x1="0"
            :y1="curve.currentSample"
            :x2="1"
            :y2="curve.currentSample"/>

          <!-- curve points rendered as rounded lines with no length -->
          <line
            v-for="(p, index) in curve.points"
            :class="[
              'non-scale',
              'point',
              p === activePoint ? 'selected-point' : '',
              dragged ? 'no-pointer' : '' ]"
            :data-index="index"
            :x1="p[1]"
            :y1="p[0]"
            :x2="p[1]"
            :y2="p[0]"
            fill="red"/>

          <!-- the animation curve -->
          <path :d="path"/>

        </g>

      </svg>

      <div style="color: cyan;position: absolute; top: 0; right: 0; font-size: 0.75em;">
        {{max}}
      </div>
      <div style="color: cyan;position: absolute; bottom: 0; right: 0; font-size: 0.75em;">
        {{min}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapLinear, lerp, clamp} from './Composer/Utils'
import Curve from './Composer/Curve'
import eases from './Composer/eases'

const easeTypes = Object.keys(eases)

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
      isMouseOver: false,
      mouse: {x: 0, y: 0},
      path: this.getPath(),
      bUpdateCrosshairs: true
    }
  },

  mounted () {
    this.min = this.curve.getMinValue()
    this.max = this.curve.getMaxValue()
  },

  methods: {

    mapLinear: mapLinear,

    getPath: function(){

      var w = this.w
      var p = 'M'

      for(var i=0; i<=w; i+=1) {
        p += `${i/w} ${this.curve.sample(i/w, false)} `
      }

      return p
    },

    updatePath(){
      this.path = this.getPath()
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

    onDelete(e) {

      if( this.activePoint) {
        this.curve.findAndRemove(this.activePoint)
        this.activePoint = null
        this.updatePath()
      }
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
        this.updatePath()
        // this.$forceUpdate()

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

    onInputFocus(e) {
      this.bUpdateCrosshairs = false
    },

    onInputBlur(e) {
      this.bUpdateCrosshairs = true
    },

    onMouseUp(e) {
      this.mouseDown = false
      this.dragged = false
    },

    getEventPosition(e) {
      var el = this.$el.querySelector('.work-space')
      var bb = el.getBoundingClientRect()
      var x = e.offsetX
      var y = e.offsetY
      var u = mapLinear(x, bb.x, bb.x + bb.width, 0, 1)
      var v = mapLinear(y, 0, bb.height, this.max, this.min)

      return {
        x: Number(u.toFixed(4)),
        y: Number(v.toFixed(4))
      }
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

    onMouseLeave(e) {
      this.isMouseOver = false
    },

    onMouseMove(e) {

      this.isMouseOver=true

      var pos = this.getEventPosition(e)
      this.mouse.x = pos.x
      this.mouse.y = pos.y

      if(this.mouseDown && !e.metaKey ) {
        this.dragged = true
        this.onDrag(e)
      }
    },

    onDrag(e) {

      if(this.activePoint) {

        var pos = this.getEventPosition(e)

        this.activePoint[1] = pos.x
        this.activePoint[0] = pos.y

        this.curve.sortPoints()

        this.updatePath()
      }
    },

    handleClick(e) {

      var el = e.target

      if(el.tagName === 'svg') {

        if(!this.dragged && e.metaKey) {

          var pos = this.getEventPosition(e)

          var p = this.curve.addPoint(pos.y, pos.x)

          this.activePoint = p

          this.updatePath()
        }

      }

    }

  }

};
</script>

<style scoped>

input, select {
  margin-right: 10px;
  background: #00000099;
  color: white;
  border: none;
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
  stroke-width: 8;
  /*pointer-events: none;*/
}

.no-pointer {
  pointer-events: none;
}

.non-scale {
  vector-effect: non-scaling-stroke
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
  padding-top: 6px;
  min-height: 22px;
  border: solid 1px #ffffff44;
}

label {
  font-size: 0.75em;
}

.expandToggle{
  position: absolute;
  right: 3;
  top: 3;
  width: 14px;
  height: 14px;
  stroke: white;
  stroke-width: 1;
  fill: #00000055
}

</style>
