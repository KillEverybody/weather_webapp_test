import weatherApi from '@/api/weather'

const state = {
    data: null,
    isLoading: false,
    error: null,
    city: null,
    coord: null
}

export const mutationTypes = {
    getWeatherStart: '[weather] Get weather start',
    getWeatherSuccess: '[weather] Get weather success',
    getWeatherFailure: '[weather] Get weather failure',

    getCityStart: '[weather] Get city start',
    getCitySuccess: '[weather] Get city success',
    getCityFailure: '[weather] Get city failure',
}

export const actionTypes = {
    getWeather: '[weather]: Get weather',
    getCity: '[weather] Get  city'
}

export const getterTypes = {
    getWeatherFiltered:'[weather]: Get weather filtered'
}

const mutations = {
    [mutationTypes.getWeatherStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getWeatherSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getWeatherFailure](state) {
        state.isLoading = false
    },

    [mutationTypes.getCityStart](state) {
        state.city = null
        state.coord = null
    },
    [mutationTypes.getCitySuccess](state, payload) {
        state.city = payload.name
        state.coord = payload.coord
        console.log('dsfdfdf')
    },
    [mutationTypes.getCityFailure]() {
    },
}

const actions = {
    [actionTypes.getWeather](context, {lat, lon}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.getWeatherStart)
            weatherApi
                .getWeather(lat, lon)
                .then((weather) => {
                    context.commit(mutationTypes.getWeatherSuccess, weather)
                    resolve(weather)
                })
                .catch((err) => {
                    context.commit(mutationTypes.getWeatherFailure)
                        console.log(err)
                })
        })
    },
    [actionTypes.getCity](context, {slug, lat, lon}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getCityStart)
            if (!slug) {
            weatherApi
                .getCity(lat,lon)
                .then(response => {
                    context.commit(mutationTypes.getCitySuccess, response)
                    resolve(response)
                })
                .catch(err => {
                    context.commit(mutationTypes.getWeatherFailure)
                    console.log(err)
                }) } else
            {
                weatherApi
            .getCityByName(slug)
                .then(response => {
                    context.commit(mutationTypes.getCitySuccess, response)
                    resolve(response)
                    weatherApi
                        .getWeather(response.coord.lat,response.coord.lon)
                        .then((weather) => {
                            context.commit(mutationTypes.getWeatherSuccess, weather)
                            resolve(weather)
                        })
                        .catch((err) => {
                            context.commit(mutationTypes.getWeatherFailure)
                            console.log(err)
                        })
                })
                .catch(err => {
                    context.commit(mutationTypes.getWeatherFailure)
                    console.log(err)
                })
            }
        })
    }
}

const getters = {
    [getterTypes.getWeatherFiltered]: (state) => {
        return {
            currentWeatherDescription: state.data?.current.weather[0].description,
            currentWeatherIcon: state.data?.current.weather[0].icon,
            current: state.data?.current.temp.toFixed(),
                currentDayMin: state.data?.daily[0].temp.min.toFixed(),
                currentDayMax: state.data?.daily[0].temp.max.toFixed(),
            array: {
                0: {
                    dayMin: state.data?.daily[1].temp.min.toFixed(),
                    dayMax: state.data?.daily[1].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[1].weather[0].icon,
                    date: state.data?.daily[1].dt
                },
                1: {
                    dayMin: state.data?.daily[2].temp.min.toFixed(),
                    dayMax: state.data?.daily[2].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[2].weather[0].icon,
                    date: state.data?.daily[2].dt
                },
                2: {
                    dayMin: state.data?.daily[3].temp.min.toFixed(),
                    dayMax: state.data?.daily[3].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[3].weather[0].icon,
                    date: state.data?.daily[3].dt
                },
                3: {
                    dayMin: state.data?.daily[4].temp.min.toFixed(),
                    dayMax: state.data?.daily[4].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[4].weather[0].icon,
                    date: state.data?.daily[4].dt
                },
                4: {
                    dayMin: state.data?.daily[5].temp.min.toFixed(),
                    dayMax: state.data?.daily[5].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[5].weather[0].icon,
                    date: state.data?.daily[5].dt
                },
                5: {
                    dayMin: state.data?.daily[6].temp.min.toFixed(),
                    dayMax: state.data?.daily[6].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[6].weather[0].icon,
                    date: state.data?.daily[6].dt
                },
                6: {
                    dayMin: state.data?.daily[7].temp.min.toFixed(),
                    dayMax: state.data?.daily[7].temp.max.toFixed(),
                    weatherIcon: state.data?.daily[7].weather[0].icon,
                    date: state.data?.daily[7].dt
                }
            },
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
