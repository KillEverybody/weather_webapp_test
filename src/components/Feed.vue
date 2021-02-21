<template>
  <div class='feed'>
    <div class='feed__upper'>
<div class='feed__upper-left'>Day Forecast</div>
      <div class='feed__upper-items'>
        <span class='feed__upper-max'> {{currentTempMax}}  </span>
      <span class='feed_upper-min'> {{currentTempMin}} </span>
      </div>
    </div>
     <div class='feed__item'>
       <span class='feed__item-temp'>{{currentTemp}}&deg; </span>
       <span class='feed__item-city'>{{currentCity}}</span>
       <div class='feed__item-weather-block'>
         <span class='feed__item-weather'>{{capitalizeCurrentWeather}}</span>
<!--         <img :src='sun' alt='' class='feed__item-img'>-->
         <wtp-img-weather :weather-img='currentWeatherIcon' class='feed__item-img' />
       </div>
     </div>
    <div class='feed__bottom'>
    <span>Week Forecast</span>
    </div>
  </div>
</template>

<script>
import sun from '@/assets/sun.svg'
import WtpImgWeather from '@/components/ImgWeather'

export default {
  components: {WtpImgWeather},
  data() {
    return {
      sun,
    }
  },
  name: 'WtpFeed',
  props: {
    currentTemp: {
      type: String,
      required: true
    },
    currentTempMin: {
      type: String,
      required: true
    },
    currentTempMax: {
      type: String,
      required: true
    },
    currentCity: {
      type: String,
      required: true
    },
    currentWeather: {
      type: String,
      required: true
    },
    currentWeatherIcon: {
      type: String,
      required: true
    }
  },
  computed: {
    capitalizeCurrentWeather() {
      return this.currentWeather.charAt(0).toUpperCase() + this.currentWeather.slice(1);
    }
  }
}
</script>

<style scoped lang='scss'>
.feed {
  min-height: 70%;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  background-color: #4d555d;
  color: #fefefe;
  @media (min-height: 850px) {
    min-height: 75%;
  }
}
.feed__item {
  padding: 25px 40px 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
}
.feed__item-temp {
display: block;
  font-size: 70px;
  margin-bottom: 15px;
  font-weight: 100;
}
.feed__item-city{
  display: block;
  font-size: 32px;
  font-weight: 400;
}
.feed__item-weather-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
.feed__item-weather{

}
.feed__item-img {
  height: 60px;
  width: 60px;
}
.feed__upper {
  box-sizing: border-box;
  background-color: #39424b;
  width: 100%;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  //margin-bottom: 70px;

  &.feed__upper-left {
    //margin-left: 10px;
  }
}
.feed_upper-min {
  margin-left: 5px;
  color: #babcc0;
}

.feed__bottom {
  background-color: #39424b;
  margin-top: auto;
  //height: 20px;
  width: 100%;
  padding: 5px 0 5px 20px;
  //padding-left: 20px;
}

</style>