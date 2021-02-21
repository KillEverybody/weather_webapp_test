<template>
  <div class='chart__wrapper'>
  <div class='chart'>
    <div class='chart__item' v-for='(item, idx) in weather' :key='idx'>
      <div class='foo-baz'>
      <div class='chart__item-day'> {{ item.date | date }}</div>
        <wtp-img-weather :weather-img='item.weatherIcon' class='chart__item-img' />
      <div>
        <span class='chart__item-temp-max'>{{ item.dayMax }}</span>
        <span class='chart__item-temp-min'>{{ item.dayMin }}</span>
      </div>
      </div>
    </div>

  </div>
  <div class='chart__item-chart'>
      <wtp-graph :graph='createArray' />
  </div>
  </div>
</template>

<script>
import WtpGraph from '@/components/Graph'
import WtpImgWeather from '@/components/ImgWeather'

export default {
  name: 'WtpFooter',
  components: {WtpImgWeather, WtpGraph},
  props: {
    weather: {
      required: true
    }
  },
    computed: {
      createArray() {
          const weatherArray = Object.values(this.weather)
        const filteredArray = []
         weatherArray.forEach(el => {
          Array.prototype.push.apply(filteredArray,[el.dayMax, el.dayMin])
        })
            return filteredArray
      }
    }
}
</script>

<style scoped lang='scss'>
.chart {
  background-color: #4d555d;
  display: flex;
  color: #fefefe;
  height: 50%;
  align-items: center;
}

.chart__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  width: 14%;
  margin-right: 5px;

  &:nth-child(1) {
    margin-left: 5px;
  }
  .chart__item-img {
    width: 25px;
    height: 25px;
  }

  .chart__item-temp-min {
    margin-left: 3px;
    color: black;
  }

  .chart__item-max {
    width: 10px;
    height: 10px;
  }

  .chart__item-min {
    width: 10px;
    height: 10px;
  }

  .foo-baz{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
  }
}
.chart__item-chart {
    height: 40%;
    display: flex;
    width: 100%;
  box-sizing: border-box;
}
.chart__wrapper {
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
</style>