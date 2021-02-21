<template>
    <div class="container">
        <template>
            <wtp-top-bar
                :current-city="weatherCity"
                @onResetWeather="getData"
            />
            <wtp-feed
                :current-city="weatherCity"
                :current-temp="weather.current"
                :current-weather="weather.currentWeatherDescription"
                :current-temp-max="weather.currentDayMax"
                :current-temp-min="weather.currentDayMin"
                :current-weather-icon="weather.currentWeatherIcon"
            ></wtp-feed>
            <wtp-footer :weather="weather.array" />
        </template>
    </div>
</template>

<script>
import {
    actionTypes as weatherActionTypes,
    getterTypes as weatherGetterTypes
} from '@/store/modules/weather'
import {
    actionTypes as geolocationActionTypes,
    getterTypes as geolocationGetterTypes
} from '@/store/modules/geolocation'
import {mapGetters, mapState} from 'vuex'
import WtpFeed from '@/components/Feed'
import WtpTopBar from '@/components/TopBar'
import WtpFooter from '@/components/Footer'

export default {
    name: 'WtpGlobalFeed',
    components: {
        WtpFooter,
        WtpTopBar,
        WtpFeed
    },
    computed: {
        ...mapState({
            weatherCity: state => state.weather.city
        }),
        ...mapGetters({
            location: geolocationGetterTypes.getterLocation,
            weather: weatherGetterTypes.getWeatherFiltered
        }),
      checkCurrentCity() {
          return this.weatherCity
      }
    },
    mounted() {
        setTimeout(this.getData, 10)
    },
    created() {
        this.$store.dispatch(geolocationActionTypes.getGeolocation)
    },
    // fix this watcher cuz 2-3 times render and this fix problem when user is asked for permission to use geodata
    watch: {
        checkLocation() {
            this.getData()
        },
        checkCurrentCity() {
          this.$router.push({name: 'Home', params: {slug: this.weatherCity}})
        }
    },
    methods: {
        async getData() {
            this.$store
                .dispatch(weatherActionTypes.getWeather, {
                    lat: this.location.latitude,
                    lon: this.location.longitude
                })
                .then(
                    await this.$store.dispatch(weatherActionTypes.getCity, {
                        lat: this.location.latitude,
                        lon: this.location.longitude
                    })
                )
        }
    }
}
</script>

<style lang="scss">
.container {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    max-width: 414px;
    margin: 0 auto;
    font-weight: 300;
    background-color: #4d555d;
    min-height: 568px;
    height: 100vh;
  display: flex;
  flex-direction: column;

    @media (min-height: 850px) {
        margin-top: 100px;
        height: 70vh;
    }
}
</style>
