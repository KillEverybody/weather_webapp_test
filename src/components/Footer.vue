<template>
  <div class='chart'>
    <div class='chart__item' v-for='(item, idx) in weather' :key='idx'>
      <div class='foo-baz'>
      <div class='chart__item-day'> {{ item.date | date }}</div>
<!--      <img class='chart__item-img' :src='sun' alt=''>-->
        <wtp-img-weather :weather-img='item.weatherIcon' class='chart__item-img' />
      <div>
        <span class='chart__item-temp-max'>{{ item.dayMax }}</span>
        <span class='chart__item-temp-min'>{{ item.dayMin }}</span>
      </div>
      </div>
      <div class='chart__item-chart'>
        <div class='chart__graph'>
          <wtp-graph :left-data='item.dayMax' :right-data='item.dayMin'/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import sun from '@/assets/sun.svg'
import WtpGraph from '@/components/Graph'
import WtpImgWeather from '@/components/ImgWeather'

export default {
  name: 'WtpFooter',
  components: {WtpImgWeather, WtpGraph},
  data() {
    return {
      sun
    }
  },
  props: {
    // tempMin: {
    //   required: false
    // },
    // tempMax: {
    //   required: false
    // },
    weather: {
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
.chart {
  background-color: #4d555d;
  display: flex;
  //align-items: flex-start;

  //justify-content: space-between;
  //align-items: center;
  color: #fefefe;
  height: 20%;

  //@media (min-height: 850px) {
  //  height: 65vh;
  //}
  //@media (min-height: 950px) {
  //  height: 66vh;
  //}
  //@media (min-height: 1200px) {
  //  height: 67vh;
  //}

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
  .chart__item-chart {
    height: 40%;
    display: flex;
    width: 100%;
  }
  .chart__graph {
    width: 100%;
    height: 100%;
  }
  .foo-baz{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
  }
}

</style>