import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    actions: {
       GET_PRODUCTS_FROM_API({commit}){

        return axios.all([
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=London&days=1&aqi=no&alerts=no'), 
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Moscow&days=1&aqi=no&alerts=no'),
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Mumbai&days=1&aqi=no&alerts=no'),
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Paphos&days=1&aqi=no&alerts=no'),
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Warsaw&days=1&aqi=no&alerts=no')

          ])
        .then(axios.spread((data1, data2, data3, data4, data5) => {
            commit('SET_WEATHER_TO_STATE', data1.data);
            commit('SET_WEATHER_TO_STATE', data2.data);
            commit('SET_WEATHER_TO_STATE', data3.data);
            commit('SET_WEATHER_TO_STATE', data4.data);
            commit('SET_WEATHER_TO_STATE', data5.data);
        }));

       }
    },
    mutations: {
      SET_WEATHER_TO_STATE: (state, weather)=> {
        state.weatherData.push(weather);
      }
    },
    state: {
        weatherData: []
    },
    getters: {
        get_weatherData(state){
            return state.weatherData;
        }
    }
})