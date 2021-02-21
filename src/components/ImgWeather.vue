<template>
  <img :src='getIcon' alt=''>
</template>

<script>
export default {
  name: 'WtpImgWeather',
  props: {
    weatherImg: {
      type: String,
      required: true
    }
  },
  computed: {
    getIcon() {
      return `http://openweathermap.org/img/wn/${this.weatherImg}@2x.png`
    }
  }
}
</script>

<style scoped>

</style>