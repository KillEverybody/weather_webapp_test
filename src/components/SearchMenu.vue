<template>
  <div class='menu' :class='{active: isSubmitted}'>
    <div class='menu__input-block'>
      <img :src='search' alt='' class='menu__input-img left'>
      <input type='text' v-model='citySearch' class='menu__input'>
      <img :src='circle' alt='' class='menu__input-img right' @click='clear'>
    </div>
    <div class='menu__items'>
      <div class='menu__search' v-for='(item, idx) in sliceCity'
           :key='idx'
      >
        <div class='menu__search-item' @click='searchWeather(item)'>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import circle from '@/assets/x-circle.svg'
import search from '@/assets/search.svg'
import {actionTypes as weatherActionTypes} from '@/store/modules/weather'
import {mapState} from 'vuex'
// import jsonFile from '@/helpers/parse'


export default {
  name: 'WtpSearchMenu',
  data() {
    return {
      citySearch: '',
      search,
      circle,
      list: '',
      foo: [
        {
          'id': 833,
          'name': 'Ḩeşār-e Sefīd',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 47.159401,
            'lat': 34.330502
          }
        },
        {
          'id': 2960,
          'name': '‘Ayn Ḩalāqīm',
          'state': '',
          'country': 'SY',
          'coord': {
            'lon': 36.321911,
            'lat': 34.940079
          }
        },
        {
          'id': 3245,
          'name': 'Taglag',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 44.98333,
            'lat': 38.450001
          }
        },
        {
          'id': 3530,
          'name': 'Qabāghlū',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 46.168499,
            'lat': 36.173302
          }
        },
        {
          'id': 5174,
          'name': '‘Arīqah',
          'state': '',
          'country': 'SY',
          'coord': {
            'lon': 36.48336,
            'lat': 32.889809
          }
        },
        {
          'id': 7264,
          'name': 'Kalāteh-ye Dowlat',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 57.616982,
            'lat': 36.163841
          }
        },
        {
          'id': 8084,
          'name': 'Behjatābād',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 51.461639,
            'lat': 36.667431
          }
        },
        {
          'id': 9874,
          'name': 'Ţālesh Maḩalleh',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 50.679192,
            'lat': 36.894329
          }
        },
        {
          'id': 11263,
          'name': 'Shahrīār Kandeh',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 53.19902,
            'lat': 36.631939
          }
        },
        {
          'id': 11754,
          'name': 'Bālā Aḩmad Kolā',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 52.667271,
            'lat': 36.649059
          }
        },
        {
          'id': 12795,
          'name': 'Aş Şūrah aş Şaghīrah',
          'state': '',
          'country': 'SY',
          'coord': {
            'lon': 36.573872,
            'lat': 33.032669
          }
        },
        {
          'id': 14177,
          'name': 'Āqdūz',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 44.26556,
            'lat': 39.197498
          }
        },
        {
          'id': 14256,
          'name': 'Āzādshahr',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 48.570728,
            'lat': 34.790878
          }
        },
        {
          'id': 18007,
          'name': 'Gollar',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 46.25,
            'lat': 37.383331
          }
        },
        {
          'id': 18093,
          'name': 'Dīgāleh',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 45.106998,
            'lat': 37.552502
          }
        },
        {
          'id': 18557,
          'name': 'Qarālar-e Mīrzā Ḩoseynqolī',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 45.067501,
            'lat': 37.674702
          }
        },
        {
          'id': 18918,
          'name': 'Protaras',
          'state': '',
          'country': 'CY',
          'coord': {
            'lon': 34.058331,
            'lat': 35.012501
          }
        },
        {
          'id': 23814,
          'name': 'Kahrīz',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 47.055302,
            'lat': 34.383801
          }
        },
        {
          'id': 24851,
          'name': 'Nūrābād',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 47.9725,
            'lat': 34.073399
          }
        },
        {
          'id': 29033,
          'name': 'Rokan Sarā',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 49.608101,
            'lat': 37.32085
          }
        },
        {
          'id': 30321,
          'name': 'Zīrjān',
          'state': '',
          'country': 'IR',
          'coord': {
            'lon': 58.43586,
            'lat': 34.214401
          }
        },
        {
          'id': 30485,
          'name': 'Dahasuways',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 50.729439,
            'lat': 15.72389
          }
        },
        {
          'id': 30490,
          'name': 'Ash Shihr',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 49.606392,
            'lat': 14.75863
          }
        },
        {
          'id': 30543,
          'name': 'Al Ghaylah',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 45.583328,
            'lat': 14.59583
          }
        },
        {
          'id': 30616,
          'name': 'Judaydah',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 45.299622,
            'lat': 15.07512
          }
        },
        {
          'id': 30689,
          'name': 'Dawran',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 44.441959,
            'lat': 13.77436
          }
        },
        {
          'id': 30696,
          'name': 'Najd al Jumai',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 44.324139,
            'lat': 13.91581
          }
        },
        {
          'id': 30714,
          'name': 'Zalmat al Alya',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 44.09404,
            'lat': 14.1023
          }
        },
        {
          'id': 30729,
          'name': 'Suq ar Rabu',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 44.01511,
            'lat': 14.51155
          }
        },
        {
          'id': 30735,
          'name': 'Ash Shuqayrah',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 43.786362,
            'lat': 13.13452
          }
        },
        {
          'id': 30740,
          'name': 'Mashraah',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 43.99588,
            'lat': 13.53235
          }
        },
        {
          'id': 30748,
          'name': 'Ar Rawnah',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 43.80286,
            'lat': 13.75638
          }
        },
        {
          'id': 30762,
          'name': 'Ar Ramadi',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 43.784569,
            'lat': 13.95641
          }
        },
        {
          'id': 30777,
          'name': 'Al Ahad',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 43.64167,
            'lat': 14.25833
          }
        },
        {
          'id': 30788,
          'name': 'Ad Dil',
          'state': '',
          'country': 'YE',
          'coord': {
            'lon': 43.818279,
            'lat': 14.67199
          }
        }]
    }
  },
  props: {
    isSubmitted: {
      type: Boolean
    }
  },
  computed: {
    ...mapState({
      coord: state => state.weather.coord
    }),
    filterCity() {
      let result = this.foo
      if (!this.citySearch) {
        return result
      }
      const citySearch = this.citySearch.toLowerCase()
      const filter = event => event.name.toLowerCase().includes(citySearch)
      return result.filter(filter)
    },
    sliceCity() {
      return this.filterCity.slice(0,50)
    }
  },
  methods: {
    clear() {
      this.citySearch = ''
    },
    searchWeather(city) {
      this.$store.dispatch(weatherActionTypes.getCity, {
        slug: city.name
      })
          // .then(setTimeout(
          // this.$store.dispatch(weatherActionTypes.getWeather, {
          //   lat: this.coord.lat,
          //   lon: this.coord.lon
          // }),150))
    }
  },
  mounted() {
    this.list = import('@/helpers/parse')
  }
}
</script>

<style scoped lang='scss'>
.menu {
  //overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  height: 90vh;
  width: 100%;
  background-color: #39424b;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 10;
  transform: translateY(-112%);
  transition-duration: 0.25s;
  transition-timing-function: linear;

  @media (min-height: 850px) {
    height: 65vh;
  }
  @media (min-height: 950px) {
    height: 66vh;
  }
  @media (min-height: 1200px) {
    height: 67vh;
  }
}

.active {
  visibility: visible;
  transform: translateY(0%);
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(.22, .75, 0, 2)
}

.menu__input-block {
  width: 80%;
  margin-top: 10px;

}

.menu__input {
  width: 100%;
  background-color: #4d555d;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 10px;

  &:focus {
    background-color: #39424b;
    //border: 1px solid #2c3e50;
    //border-radius: 4px;
  }
}

.menu__input-img {
  position: absolute;
  cursor: pointer;
  filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);

  &.left {
    left: 10.3%;
    width: 22px;
    height: 22px;
    top: 11.5px;
  }

  &.right {
    right: 10.5%;
    width: 21px;
    height: 21px;
    top: 11.5px;
  }
}

.menu__search {
  color: black;
  width: 100%;
  background-color: #4d555d;
  display: flex;
  justify-content: flex-end;
  transition-duration: 0.5s;

  &:hover {
    background-color: #39424b;
  }
}

.menu__search-item {
  width: 95%;
  padding: 10px 0;
  border-bottom: 1px solid #fefefe;

}

.menu__items {
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>