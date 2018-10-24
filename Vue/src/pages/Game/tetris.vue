<template>
    <div id="game" >
  <div @click="test" class="lump">dsadad</div>
      </div>
</template>
<script>
export default {
  mounted () {
    this.lumpSide = parseFloat(this.$getStyle(document.getElementById('game'), 'width')) / 10
    this.horizonLine = document.body.clientHeight - this.lumpSide
    console.log(this.horizonLine)
    this.border = parseFloat(this.$getStyle(document.getElementById('game'), 'width'))
    console.log(this.horizonLine)
  },
  data () {
    return {
      lumpSide: '方块的边长',
      horizonLine: '底线方块的值',
      border: '边界的距离',
      matrix: [1, 1],
      control: {
        x: 0,
        y: 0,
        bottom: 0
      }
    }
  },
  methods: {
    //初始位置,x,y
    createdLump (x, y) {
      let d = document, game = d.getElementById('game'), lump = d.createElement('div')
      lump.className = 'lump'
      lump.style.left = x + 'px'
      lump.style.top = y + 'px'
      game.appendChild(lump)
      return {
        'el': lump,
        'x': x,
        'y': y
      }
    },
    createdDiamond (x, y, bottom) {
      let side = this.lumpSide, x1 = side * x, y1 = side * y, elArray = []
      elArray.push({'lump': this.createdLump(x1, y1), 'max': { x: x, y: bottom + 1 }})
      elArray.push({'lump': this.createdLump(x1 + side, y1), 'max': { x: x, y: bottom + 1 }})
      elArray.push({'lump': this.createdLump(x1 + side, y1 + side), 'max': { x: x, y: bottom }})
      elArray.push({'lump': this.createdLump(x1, y1 + side), 'max': { x: x, y: bottom }})
      return {
        'elArr': elArray,
        'bottom': bottom
      }
    },
    run (count, div, peak) {
      let code = null
      let side = this.lumpSide
      let last_distance = this.horizonLine - (side * count)
      console.log(last_distance, count)
      function step () {
        let now_distance = div.offsetTop
        if (now_distance === last_distance) {
          div.style.top = now_distance + 'px'
          window.cancelAnimationFrame(code)
        }
        if (last_distance < now_distance) {
          now_distance = last_distance
          div.style.top = now_distance + 'px'
          window.cancelAnimationFrame(code)
        }
        if (last_distance > now_distance) {
          div.style.top = now_distance + peak + 'px'
          code = window.requestAnimationFrame(step)
        }
      }
      code = window.requestAnimationFrame(step)
    },
    test () {
      let arr = this.createdDiamond(2, 0, 1).elArr
      for (let i = 0; i < arr.length; i++) {
        this.run(arr[i].max.y, arr[i].lump.el, 10)
      }
    }
  }
}
</script>
<style lang="scss" >
#game{
  width: 100vw;
  height: 100vh;
  background: #edff34;
  font-size:0;
  letter-spacing: -3px;
  text-align: left;
  .lump{
    width:10vw;
    height: 10vw;
    background: greenyellow;
    display: inline-block;
    box-sizing: border-box;
    border: 1px springgreen solid;
    position: absolute;
    top:0;
    left: 0;
  }
}
</style>
