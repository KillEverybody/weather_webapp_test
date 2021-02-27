import Vue from 'vue'
import Vuex from 'vuex'
import weather from '@/store/modules/weather'
import geolocation from '@/store/modules/geolocation'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        weather,
        geolocation
    }
})
