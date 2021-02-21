<template>
  <div class='graph'>
    <div v-for='(bar, idx) in normalizeGraph'
         :key='idx'
         :style="{ height: `${bar}%` }"
         class='graph__item'
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'WtpGraph',
  props: {
    graph: {
      required: true
    }
  },
  computed: {
    normalizeGraph() {
      const maxValue = Math.max(...this.graph)
      const minValue = Math.min(...this.graph)
      return this.graph.map(
          val => 20 + ((val - minValue) * 80) / (maxValue - minValue)
      )
    }
  }
}
</script>

<style scoped lang='sass'>
.graph
  display: flex
  align-items: flex-end
  height: 100%
  width: 100%


.graph__item
  &:nth-child(odd)
    background-color: rgba(250, 190, 88, 0.6)
    height: 100%
    width: 50%
    &:after
      content: ' '
      display: block
      width: 100%
      height: 3px
      background-color: rgba(248, 148, 6, 1)


  &:nth-child(even)
    background-color: rgba(30, 139, 195, 0.6)
    height: 40%
    width: 50%

    &:after
      content: ' '
      display: block
      width: 100%
      height: 3px
      background-color: rgba(25, 181, 254, 1)



</style>