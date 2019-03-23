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

      <!-- curve name and inputs -->
      <div v-if="isShown" style="border: solid 1px #ffffff44; display: flex;">

        <EditorButton
          :offSymbol="'−'"
          :symbol="'+'"
          :isToggled="isShown"
          :onClick.stop='onToggle'></EditorButton>

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
            @change="onCurveTitleChange">

        <label style="font-size: 0.75em" v-if="activePoint">u:</label>
        <input
          v-if="activePoint"
          style="
            color: cyan;
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
            color: cyan;
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
      v-if="isShown"
      tabIndex=1
      name="workspace"
      @keyup.delete="onDelete"
      @mouseleave="onMouseLeave"
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

          <defs>
            <linearGradient
              id="Gradient"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
              gradientUnits="objectBoundingBox">
              <stop offset="10%" stop-color="#00000044"/>
              <stop offset="95%" stop-color="#ffffff44"/>
            </linearGradient>
          </defs>

        <g :transform="getTransform()">

          <!-- the filler at the low end of the curve -->
          <rect v-if="curve.points.length"
            :x="start"
            y="0"
            :width="Math.max(0, curve.points[0][1] - this.start)"
            height="1"
            style="pointer-events: none; stroke: none; fill: #00000044"
            />
          <!-- gradients for each curve -->
          <g v-for='(p, index) in curve.points'>

            <rect v-if='index < (curve.points.length - 1)'
              :x="p[1]"
              y="0"
              :width="curve.points[index+1][1] - p[1]"
              height="1"
              style="pointer-events: none; stroke: none; fill: url(#Gradient)"
              />
            <!-- the filler at the high end of the curve -->
            <rect v-else
              :x="p[1]"
              y="0"
              :width="Math.abs(end - p[1])"
              height="1"
              style="pointer-events: none; stroke: none; fill: #ffffff44"
              />

          </g>

          <!-- current sample crosshairs -->
          <line
            v-if="bUpdateCrosshairs"
            style="
              stroke: #000000ff;
              fill: none;
              stroke-width: 1.5;
              vector-effect: non-scaling-stroke;
              pointer-events: none;"
            :x1="curve.currentPosition"
            :y1="0"
            :x2="curve.currentPosition"
            :y2="1" />

          <line
            v-for="(p, index) in curve.points"
            :style="{
              'vector-effect': 'non-scaling-stroke',
              'stroke-width': '3',
              'stroke-linecap': 'round',
              'vector-effect': 'non-scaling-stroke',
              'stroke': (p === activePoint) ? 'cyan' : '#ffffffaa'
            }"
            onMouseOver="this.style.strokeWidth=7;"
            onMouseOut="this.style.strokeWidth=5;"
            :data-index="index"
            :x1="p[1]"
            :y1="1"
            :x2="p[1]"
            :y2="0"
            fill="red"/>

          <g v-for="(p, index) in curve.points"
            :transform="getTextTransform(p)">
            <text
              :style="{
                'user-select': 'none',
                'pointerEvents': 'none',
                'stroke': (p === activePoint) ? 'cyan' : '#ffffffaa'
              }">
              {{p[0]}}
            </text>
          </g>
        </g>

      </svg>

    </div>
  </div>
</template>

<script>
import {mapLinear, lerp, clamp} from './Composer/Utils'
import StringCurve from './Composer/StringCurve'
import EditorButton from './EditorButton'

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

    textScale: {
      type: Number,
      default: 1
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

  components: {
    EditorButton
  },

  data() {
    return {
      isShown: true,
      isMounted: false,
      activePoint: null,
      mouseDown: false,
      dragged: false,
      min: 0,
      max: 1,
      isMouseOver: false,
      mouse: {x: 0, y: 0},
      path: this.getPath(),
      bUpdateCrosshairs: true,
      boundbox: {x: 0, y: 0, width: 1, height: 1}
    }
  },

  mounted () {
    this.min = 0
    this.max = 1
    this.isMounted = true


    var wtf = this.$el.querySelector('[name="workspace"]')
    this.boundbox = wtf.getBoundingClientRect()
    console.log( this.boundbox, this.$el.querySelector('[name="workspace"]') );
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
      // min-x min-y width height
      return `${this.start} 0 ${Math.abs(this.end - this.start)} 1`
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

    getTextTransform(p){

      var bb = this.boundbox
      var scl = 0.005 * this.textScale
      var xScl = (this.end - this.start) * scl * bb.height / bb.width
      var yScl = -scl

      return `translate(${p[1] + xScl * 6}, ${1 + yScl * 3}) scale(${xScl},${yScl}) rotate(90)`
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
        }

        this.curve.sortPoints()
        this.updatePath()
      }

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

      if(this.isMounted && this.$el) {
        var el = this.$el.querySelector('[name="workspace"]')
        this.boundbox = el.getBoundingClientRect()
      }

      var bb = this.boundbox
      var x = e.offsetX
      var y = e.offsetY
      var u = mapLinear(x, 0, bb.width, this.start, this.end)
      var v = 0.5

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

        this.curve.sortPoints()

        this.updatePath()
      }
    },

    onCurveTitleChange(e) {
      console.log( e.target.value );
      this.curve.name = e.target.value
    },



    handleClick(e) {

      var el = e.target

      if(el.tagName === 'svg') {

        if(!this.dragged && e.metaKey) {

          var pos = this.getEventPosition(e)

          var p = this.curve.addPoint('string_name', pos.x)

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
