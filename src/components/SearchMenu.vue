<template>
  <div class='menu' :class='{active: isSubmitted}'>
    <div class='menu__input-block'>
      <img :src='search' alt='' class='menu__input-img left'>
      <input type='text' v-model='citySearch' class='menu__input'>
      <img :src='circle' alt='' class='menu__input-img right' @click='clear'>
    </div>
    <div class='menu__items-block ' v-if='citySearch'>
      <div class='menu__items' v-for='(item, idx) in filterActive'
           :key='idx'
      >
        <div class='menu__items-search' @click='searchWeather(item)'>
          {{ item.name.slice(0, item.index[0]) }}<span class='foo'
                                                             >{{ item.name.slice(...item.index)
          }}</span>{{ item.name.slice(item.index[1], item.name[item.name.length]) }}
        </div>
      </div>
    </div>
      <div class='menu__items-block ' v-if='!citySearch'>
        <div class='menu__items' v-for='(item, idx) in sliceCity'
             :key='idx'
        >
          <div class='menu__items-search' @click='searchWeather(item)'>
            {{ item.name }}
          </div>

        </div>
        </div>
  </div>
</template>

<script>
import circle from '@/assets/x-circle.svg'
import search from '@/assets/search.svg'
import {actionTypes as weatherActionTypes} from '@/store/modules/weather'
import jsonFile from '@/helpers/parse'
import {mapState} from 'vuex'


export default {
  name: 'WtpSearchMenu',
  data() {
    return {
      citySearch: '',
      search,
      circle,
      jsonFile
    }
  },
  props: {
    isSubmitted: {
      type: Boolean
    }
  },
  computed: {
    ...mapState({
      coord: state => state.weather.coord,
      currentCity: state => state.weather.city
    }),
    filterCity() {
      let result = this.jsonFile
      if (!this.citySearch) {
        return result
      }
      const citySearch = this.citySearch.toLowerCase()
      const filter = el => el.name.toLowerCase().includes(citySearch)
      return result.filter(filter)
    },
    sliceCity() {
      return this.filterCity.slice(0, 50)
    },
    filterActive() {
      const bar = []
      if (!this.citySearch) {
        return this.sliceCity
      }
      this.sliceCity.forEach(location => {
        location.index = []
        const firstIndex = location.name.toLowerCase().indexOf(this.citySearch.toLowerCase())
        if (firstIndex != -1) {
          location.index.push(firstIndex)
          if (this.citySearch.length > 1) {
            location.index.push((this.citySearch.length) + firstIndex)
          } else {
            location.index.push(1 + firstIndex)
          }
        } else {
          delete location.index
        }
        if (location.index) {
          bar.push(location)
        }
      })
      return bar
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
    }
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
    cursor: pointer;
  }
}

.menu__items {
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

.menu__items-search {
  width: 95%;
  padding: 10px 0;
  border-bottom: 1px solid #fefefe;

}

.menu__items-block {
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .foo {
    color: #fefefe;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
}
</style>