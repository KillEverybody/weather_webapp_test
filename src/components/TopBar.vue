<template>
    <div class='header__wrapper'>
        <header class='header'>
            <span v-if='isSubmitted' @click='onClick' class='header__item'>Done</span>
            <img class='header__img' :src='download' alt='' @click='onClick' v-else>
            <div class='header__container'>
                <div class='header__container-title'>
                    <span v-if='isSubmitted'>Weather forecast</span>
                    <span v-else>Location</span>
                </div>
                <div class='header__container-city'>{{ currentCity }}</div>
            </div>
            <img class='header__img' :src='settings' alt='' @click='resetWeather'>
        </header>
        <wtp-search-menu :is-submitted='isSubmitted' v-if='start'></wtp-search-menu>
    </div>
</template>

<script>
import download from '@/assets/download.svg'
import settings from '@/assets/settings.svg'


export default {
    name: 'WtpTopBar',
    components: {WtpSearchMenu: ()=> import('@/components/SearchMenu')},
    props: {
        currentCity: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isSubmitted: false,
            settings,
            download,
            start: false
        }
    },
    methods: {
        onClick() {
            this.isSubmitted = !this.isSubmitted
        },
        resetWeather() {
            this.$emit('onResetWeather')
        }
    },
    mounted() {
        setTimeout(() => this.start = true, 500)
    }
}
</script>

<style scoped lang='sass'>
.header__wrapper
    width: 100%
    position: relative
    background-color: #39424b
    min-height: 10%
    display: flex
    justify-content: space-between
    align-items: center
    @media (min-height: 850px)
        min-height: 5%


.header
    display: flex
    justify-content: space-between
    align-items: center
    min-height: 30px
    color: #fefefe
    position: relative
    z-index: 11
    width: 100%
    height: 100%

.header__img
    height: 35px
    width: 35px
    padding: 0 10px
    cursor: pointer
    filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)

.header__item
    padding: 0 10px
    cursor: pointer
    color: #36c7f5
    font-size: 20px
    font-weight: 400


.header__container
    display: flex
    align-items: center
    flex-direction: column
    padding: 3px


.header__container-city
    color: #babcc0

.header__container-title
    margin-bottom: 5px


</style>