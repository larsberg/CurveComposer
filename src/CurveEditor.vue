<template>
  <!-- outer container -->
  <div
    tabIndex=1
    style="
      position: relative;
      width: calc(100%-4);
      border-bottom: #ffffffaa solid 0.5px;">

    <!-- info bar -->
    <div style="
      position: relative;
      min-height: 16px;
      width: 100%;
      background: #00000044;">

      <!-- curve name and inputs -->
      <div v-if="isShown" style="border: solid 1px #ffffff44; display: flex;
    flex-wrap: wrap;">

        <EditorButton
          :offSymbol="'−'"
          :symbol="'+'"
          :isToggled="isShown"
          :onClick='onToggle'></EditorButton>

        <EditorButton
          :onClick="deleteCurveDialogue"
          :symbol="'×'"></EditorButton>

        <input
          type="text"
          name="curveName"
          style="
            border: none;
            background: #00000000;
            color: white;
            margin-left: 1em;"
          :value="curve.name"
          @input="onCurveTitleChange"
          @change="onCurveTitleChange">

        <label  style="font-size: 0.75em" style="color: darkgrey;">hi:</label>
        <input
          style="
            color: #ff00ff;
            width: 5em;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          type="number"
          name="hi"
          step="0.001"
          :value="max"
          @change="onRangeChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
        <label  style="font-size: 0.75em" style="color: darkgrey;">low:</label>
        <input
          style="
            color: #ff00ff;
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
          @blur="onInputBlur">

        <label  style="font-size: 0.75em" v-if="activePoint">pt:</label>
        <select
          v-if="activePoint"
          style="
            color: #00ffff;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          name="eases"
          value="smooth"
          @change="onPointChange">
          <option v-for="e in easeTypes"
            :value='e'
            :selected="activePoint && activePoint[2] === e">{{e}}</option>
        </select>
        <label  style="font-size: 0.75em" v-if="activePoint">u:</label>
        <input
          v-if="activePoint"
          style="
            color: #00ffff;
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
        <label style="font-size: 0.75em" v-if="activePoint">value:</label>
        <input
          v-if="activePoint"
          style="
            color: #00ffff;
            width: 5em;
            margin-right: 10px;
            background: #00000099;
            border: none;"
          type="number"
          name="value"
          step="0.001"
          :value="Number(activePoint[0])"
          @change="onPointChange"
          @focus="onInputFocus"
          @blur="onInputBlur">
        <!-- <label style="
          font-size: 0.75em;
          margin-left: auto;
          color: cyan;">{{Number(curve.currentSample.toFixed(3))}}</label> -->
      </div>
      <div v-else style="border: solid 1px #ffffff44; display: flex;">

        <EditorButton
          :offSymbol="'−'"
          :symbol="'+'"
          :isToggled="isShown"
          :onClick='onToggle'></EditorButton>
        <div style="
          color: white;
          margin-left: 1em;
          font-size: 1em;">
          {{curve.name}}
        </div>
      </div>
    </div>

    <div
      tabIndex=1
      name="workspace"
      @keydown.left="onLeftArrow"
      @keydown.right="onRightArrow"
      @keyup.delete="onDelete"
      @mouseleave="onMouseLeave"
      v-if="isShown"
      style="
        position: relative;
        height: 100px;
        width: 100%;
        background: #00000055;">

      <!-- min and max values at the top and bottom of the workspace -->
      <div style="
        color: #ff00ff;
        position: absolute;
        top: 1;
        right: 0;
        font-size: 0.75em;
        pointer-events: none;
        user-select: none;">
        {{max}}
      </div>
      <div style="
        color: #ff00ff;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 0.75em;
        pointer-events: none;
        user-select: none;">
        {{min}}
      </div>

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

          <!-- mouse position cross hairs -->
          <line v-if="isMouseOver"
            style="
              stroke: #ffffff66;
              fill: none;
              stroke-width: 1;
              vector-effect: non-scaling-stroke;
              pointer-events: none;"
            :x1="mouse.x"
            :y1="min"
            :x2="mouse.x"
            :y2="max" />

          <line v-if="isMouseOver"
            style="
              stroke: #ffffff66;
              fill: none;
              stroke-width: 1;
              vector-effect: non-scaling-stroke;
              pointer-events: none;"
            :x1="start"
            :y1="mouse.y"
            :x2="end"
            :y2="mouse.y"/>

          <!-- current sample crosshairs -->
          <line
            v-if="bUpdateCrosshairs"
            style="
              stroke: #cfcfff88;
              fill: none;
              stroke-width: 1;
              vector-effect: non-scaling-stroke;
              pointer-events: none;"
            :x1="curve.currentPosition"
            :y1="min"
            :x2="curve.currentPosition"
            :y2="max" />

          <line
            v-if="bUpdateCrosshairs"
            style="
              stroke: #cfcfff88;
              fill: none;
              stroke-width: 1;
              vector-effect: non-scaling-stroke;
              pointer-events: none;"
            :x1="start"
            :y1="curve.currentSample"
            :x2="end"
            :y2="curve.currentSample"/>

          <!-- curve points rendered as rounded lines with no length -->
          <line
            v-for="(p, index) in curve.points"
            :style="{
              'vector-effect': 'non-scaling-stroke',
              'stroke-width': '5',
              'stroke-linecap': 'round',
              'vector-effect': 'non-scaling-stroke',
              'stroke': (p === activePoint) ? '#00ffff' : '#ffffffaa'
            }"
            onMouseOver="this.style.strokeWidth=7;"
            onMouseOut="this.style.strokeWidth=5;"
            :data-index="index"
            :x1="p[1]"
            :y1="p[0]"
            :x2="p[1]"
            :y2="p[0]"
            fill="red"/>

          <!-- the animation curve -->
          <path :d="path" style="
            fill: none;
            stroke: #ffffff99;
            stroke-width: 1;
            vector-effect: non-scaling-stroke;
            pointer-events: none;"/>

        </g>

      </svg>

    </div>
  </div>
</template>

<script>
import EditorButton from './EditorButton'
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
    },

    start: {
      type: Number,
      default: 0
    },

    end: {
      type: Number,
      default: 1
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

  components: {
    EditorButton
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

      for(var i=0, u=0; i<=w; i+=1) {
        u = mapLinear(i, 0, w, this.start, this.end)
        p += `${u} ${this.curve.sample(u, false)} `
      }

      return p
    },

    updatePath(){
      this.path = this.getPath()
    },

    getViewBox() {
      // min-x min-y width height
      return `${this.start} ${this.min} ${Math.abs(this.end - this.start)} ${Math.abs(this.max - this.min)}`
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

    onLeftArrow(e) {
      if(this.activePoint) {
        var index = this.curve.points.indexOf(this.activePoint)
        this.activePoint = this.curve.points[ Math.max(0, index - 1) ]
      } else {
        this.activePoint = this.curve.points[0]
      }
    },

    onRightArrow(e) {
      if(this.activePoint) {
        var index = this.curve.points.indexOf(this.activePoint)
        this.activePoint = this.curve.points[ Math.min(this.curve.points.length - 1, index + 1) ]
      } else {
        this.activePoint = this.curve.points[this.curve.points.length - 1]
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
      }

    },

    onRangeChange(e) {

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

    onCurveTitleChange(e) {
      this.curve.name = e.target.value
    },

    getEventPosition(e) {
      var el = this.$el.querySelector('[name=workspace]')
      var bb = el.getBoundingClientRect()
      var x = e.offsetX // e.clientX - bb.x //
      var y = e.offsetY // e.clientY - bb.y //

      var u = mapLinear(x, 0, bb.width, this.start, this.end)
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

      if(e.buttons && this.mouseDown && !e.metaKey ) {
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

    },

    deleteCurveDialogue(e) {

      if (window.confirm("delete this curve?")) {
        var crv = this.curve
        var curves = this.$parent.curves
        curves.splice(curves.indexOf(crv), 1)
      }
    }

  }

};
</script>
