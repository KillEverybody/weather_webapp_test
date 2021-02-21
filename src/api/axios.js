import axios from 'axios'

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'
axios.defaults.params = {}
axios.defaults.params['appid'] = '78e8aa5a6516eef21926f6ccc13595b0'

export default axios