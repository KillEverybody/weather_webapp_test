import axios from "axios";

 const getWeather = (slug) => {
    return axios.get(`/weather?q=${slug}`)
}

export default {
    getWeather
}