<template>
  <div class='graph'>
<div class='graph__item-left' :style='{height: `${leftData}%`}'>

</div>
    <div class='graph__item-right' :style='{height: `${rightData}%`}'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WtpGraph',
    props: {
      leftData: {
          type: String,
          required: true
      },
        rightData: {
            type: String,
            required: true
        },
        data() {
            return {
                graph: {
                    minValue: this.rightData,
                    maxValue: this.leftData
                }
            }
        }
    },
    computed: {
        normalizeGraph() {
            return this.graph.map(temp => 5 + ((temp - this.graph.minValue)* 95) / (this.graph.maxValue - this.graph.minValue))
        }
    }
}
</script>

<style scoped lang='scss'>
.graph {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
}
.graph__item-left{
  background-color: rgba(250, 190, 88, 0.6);
  height: 100%;
  width: 50%;
  margin-right: 5px;
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 3px;
    background-color: red;
  }
}
.graph__item-right{
  background-color: rgba(30, 139, 195, 0.6);
  height: 40%;
  width: 50%;
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 3px;
    background-color: blue;


  }
}
</style>