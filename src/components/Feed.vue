<template>
    <div class="feed">
        <div class="feed__upper">
            <div class="feed__upper-left">Day Forecast</div>
            <div class='feed__upper-right'>
                <span class='upper__right-item-max'> {{ currentTempMax }} </span>
                <span class='upper__right-item-min'> {{ currentTempMin }} </span>
            </div>
        </div>
        <div class='feed__main'>
            <span class='main__item-temp'>{{ currentTemp }}&deg; </span>
            <span class='main__item-city'>{{ currentCity }}</span>
            <div class='main__item-weather-block'>
                <span class='main__item-weather-block-weather'>{{
                    capitalizeCurrentWeather
                }}</span>
                <wtp-img-weather
                    :weather-img="currentWeatherIcon"
                    class='main__item-weather-block-img'
                />
            </div>
        </div>
        <div class="feed__bottom">
            <span>Week Forecast</span>
        </div>
    </div>
</template>

<script>
import WtpImgWeather from '@/components/ImgWeather'

export default {
    components: {WtpImgWeather},
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
            return (
                this.currentWeather.charAt(0).toUpperCase() +
                this.currentWeather.slice(1)
            )
        }
    }
}
</script>

<style scoped lang="scss">
.feed {
    min-height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4d555d;
    color: #fefefe;
    @media (min-height: 850px) {
        min-height: 75%;
    }
}
.feed__main {
    padding: 25px 40px 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    flex: 1 1 auto;
}
.main__item-temp {
    display: block;
    font-size: 70px;
    margin-bottom: 15px;
    font-weight: 100;
}
.main__item-city {
    display: block;
    font-size: 32px;
    font-weight: 400;
}
.main__item-weather-block {
    display: flex;
    align-items: center;
    justify-content: center;
}
.main__item-weather-block-weather {
}
.main__item-weather-block-img {
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

}
.upper__right-item-min {
    margin-left: 5px;
    color: #babcc0;
}

.feed__bottom {
    background-color: #39424b;
    margin-top: auto;
    width: 100%;
    padding: 5px 0 5px 20px;
}
</style>
