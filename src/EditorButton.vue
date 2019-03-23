<!-- EditorButton.vue -->
<template>

  <div
    @click.stop="onClick"
    :style="{
      margin: '3px',
      border: 'white solid 1px',
      borderRadius: '0%',
      width: '16px',
      height: '16px',
      position: 'relative',
      userSelect: 'none',
      background: 'grey'
    }"
    >
    <div style="
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);">{{isToggled ? offSymbol : symbol}}
    </div>
  </div>

</template>

<script>

export default {
  props: {
    symbol: {
      type: String,
      default: '×'
    },
    offSymbol: {
      type: String,
      default: '×'
    },
    isToggled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: console.log
    },
    size: {
      type: Number,
      default: 11
    }
  }
};

</script>
