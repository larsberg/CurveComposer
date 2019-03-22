<template>
  <!-- outer container -->
  <div
    style="
      position: relative;
      width: calc(100%-4);
      border-bottom: #ffffffaa solid 0.5px;">

    <!-- info bar -->
    <div style="
      position: relative;
      min-height: 20px;
      width: 100%;
      background: #00000044;">

      <!-- toggle expand button -->
      <svg
      @click="onToggle"
      style="
        position: absolute;
        right: 3;
        top: 3;
        width: 14px;
        height: 14px;
        stroke: white;
        stroke-width: 1;
        fill: #00000055">

        <circle r="6" cx="7" cy="7" stroke="white" fill="inherit"/>

        <line
          style="
            fill: none;
            stroke: #ffffff99;
            stroke-width: 1;
            vector-effect: non-scaling-stroke;"
          x1="3" y1="7" x2="11" y2="7" />
        <line
          style="
            fill: none;
            stroke: #ffffff99;
            stroke-width: 1;
            vector-effect: non-scaling-stroke;"
          v-if="!isShown" y1="3" x1="7" y2="11" x2="7" />

      </svg>

      <!-- curve name and inputs -->
      <div
        v-if="isShown"
        style="
          padding-top: 6px;
          min-height: 22px;
          border: solid 1px #ffffff44;">
        <div style="width: 100%; font-size: 0.75em;">
          {{curve.name}} {{ curve.currentSample }}
        </div>

        <!-- <label style="color: darkgrey;">hi:</label>
        <input
          :style="{
            color: 'cyan',
            width: '5em',
            marginRight: '10px',
            background: '#00000099',
            border: 'none'}"
          type="number"
          name="hi"
          step="0.001"
          :value="max"
          @change="onRangeChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
        <label style="color: darkgrey;">low:</label>
        <input
          style="
            color: cyan;
            width: 5em;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          type="number"
          name="low"
          step="0.001"
          :value="min"
          @change="onRangeChange"
          @focus="onInputFocus"
          @blur="onInputBlur"> -->

<!--         <label v-if="activePoint">pt:</label>
        <select
          v-if="activePoint"
          style="
            color: magenta;
            width: 5em;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          name="eases"
          value="smooth"
          @change="onPointChange">
          <option v-for="e in easeTypes"
            :value='e'
            :selected="activePoint && activePoint[2] === e">{{e}}</option>
        </select> -->
        <label v-if="activePoint">u:</label>
        <input
          v-if="activePoint"
          style="
            color: magenta;
            width: 5em;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          type="number"
          name="position"
          step="0.001"
          :value="Number(activePoint[1])"
          @change="onPointChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
        <label v-if="activePoint">value</label>
        <input
          v-if="activePoint"
          style="
            color: magenta;
            width: 5em;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          type="text"
          name="value"
          :value="activePoint[0]"
          @change="onPointChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
      </div>
      <label
        v-else
        style="
          padding-top: 6px;
          min-height: 22px;
          border: solid 1px #ffffff44;"> {{curve.name}} </label>
    </div>

    <div
      tabIndex=1
      name="workspace"
      @keyup.delete="onDelete"
      @mouseleave="onMouseLeave"
      v-if="isShown"
      style="
        position: relative;
        height: 100px;
        width: 100%;
        background: #00000055;">

      <svg
        @mouseup="onMouseUp"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @click="handleClick"
        :view-box.camel="getViewBox()"
        :preserve-aspect-ratio.camel="'none'"
        xmlns="http://www.w3.org/2000/svg"
        style="
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #00000044;
          fill: none;
          stroke: white;
          stroke-width: 1;">

        <g :transform="getTransform()">

          <line
            v-for="(p, index) in curve.points"
            :style="{
              'vector-effect': 'non-scaling-stroke',
              'stroke-width': '3',
              'stroke-linecap': 'round',
              'vector-effect': 'non-scaling-stroke',
              'stroke': (p === activePoint) ? 'magenta' : '#ffffffaa'
            }"
            onMouseOver="this.style.strokeWidth=7;"
            onMouseOut="this.style.strokeWidth=5;"
            :data-index="index"
            :x1="p[1]"
            :y1="1"
            :x2="p[1]"
            :y2="0"
            fill="red"/>

          <!-- the animation curve -->
          <!-- <path :d="path" style="
            fill: none;
            stroke: #ffffff99;
            stroke-width: 1;
            vector-effect: non-scaling-stroke;
            pointer-events: none;"/> -->

        </g>

      </svg>

    </div>
  </div>
</template>

<script>
import {mapLinear, lerp, clamp} from './Composer/Utils'
import Curve from './Composer/Curve'
import StringCurve from './Composer/StringCurve'
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
      min: 0,
      max: 1,
      isMouseOver: false,
      mouse: {x: 0, y: 0},
      path: this.getPath(),
      bUpdateCrosshairs: true
    }
  },

  mounted () {

    console.log( "string curve editor mounted" );
    this.min = 0
    this.max = 1
  },

  methods: {

    mapLinear: mapLinear,

    getPath: function(){

      var w = this.w
      var p = 'M'

      for(var i=0; i<=w; i+=1) {
        p += `${i/w} 0.5 `
      }

      return p
    },

    updatePath(){
      this.path = this.getPath()
    },

    getViewBox() {
      return `0 0 1 1`
    },

    getTransform() {

      // scale (we're flipping it vertically)
      var sx = 1
      var sy = -1

      //center
      var cx = 0.5
      var cy = 0.5

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
            var val = String(e.target.value)
            this.activePoint[0] = val
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
      }

    },

    onRangeChange(e) {

      // if(e.target.name === 'low') {
      //   this.min = Number(e.target.value)
      // } else {
      //   this.max = Number(e.target.value)
      // }
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
      var el = this.$el.querySelector('[name=workspace]')
      var bb = el.getBoundingClientRect()
      var x = e.offsetX // e.clientX - bb.x //
      var y = e.offsetY // e.clientY - bb.y //
      var u = mapLinear(x, 0, bb.width, 0, 1)
      var v = 0.5 //  mapLinear(y, 0, bb.height, this.max, this.min)

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
        // this.activePoint[0] = pos.y

        this.curve.sortPoints()

        this.updatePath()
      }
    },

    handleClick(e) {

      var el = e.target

      if(el.tagName === 'svg') {

        if(!this.dragged && e.metaKey) {

          var pos = this.getEventPosition(e)

          var p = this.curve.addPoint('value', pos.x)

          this.activePoint = p

          this.updatePath()
        }

      }

    }

  }

};
</script>
