<template>
    <div class="footer__content">
        <div class="footer__item" v-for="(item, idx) in weather" :key="idx">
            <div class="footer_item_wrapper">
                <div class="footer__item-day">{{ item.date | date }}</div>
                <wtp-img-weather
                    :weather-img="item.weatherIcon"
                    class="footer__item-img"
                />
                <div>
                    <span class="footer__item-temp-max">{{ item.dayMax }}</span>
                    <span class="footer__item-temp-min">{{ item.dayMin }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WtpImgWeather from '@/components/ImgWeather'

export default {
    name: 'WtpWeatherBanner',
    components: {WtpImgWeather},
    props: {
        weather: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log('Mounted__WeatherBanner')
    },
    created() {
        console.log('Created__WeatherBanner')
    }
}
</script>

<style scoped lang="sass">

.footer__item
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  padding-top: 10px
  width: 14%
  margin-right: 5px


  &:nth-child(1)
    margin-left: 5px

  .footer__item-img
    width: 25px
    height: 25px


  .footer__item-temp-min
    margin-left: 3px
    color: black


  .chart__item-max
    width: 10px
    height: 10px


  .chart__item-min
    width: 10px
    height: 10px


  .footer_item_wrapper
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    height: 50%


.footer__content
  background-color: #4d555d
  display: flex
  color: #fefefe
  height: 50%
  align-items: center
</style>
