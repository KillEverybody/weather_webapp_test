import axios from '@/api/axios'

const getWeather = (lat, lon) => {
    return axios
        .get(
            `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric`
        )
        .then(response => response.data)
}
const getCity = (lat, lon) => {
    return axios
        .get(`weather?lat=${lat}&lon=${lon}`)
        .then(response => response.data)
}

const getCityByName = (slug) => {
    return axios
        .get(`weather?q=${slug}`)
        .then(response => response.data)
}

export default {
    getWeather,
    getCity,
    getCityByName
}
