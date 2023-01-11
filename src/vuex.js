import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    actions: {


       GET_PRODUCTS_FROM_API({commit}){
        if(!this.state.loaded){
        return axios.all([
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Warsaw&days=1&aqi=no&alerts=no'), 
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Moscow&days=1&aqi=no&alerts=no'),
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Mumbai&days=1&aqi=no&alerts=no'),
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=Paphos&days=1&aqi=no&alerts=no'),
            axios.get('http://api.weatherapi.com/v1/forecast.json?key=61474f755d8241a1b77104047231101&q=London&days=1&aqi=no&alerts=no')

          ])
        .then(axios.spread((data1, data2, data3, data4, data5) => {
            commit('SET_WEATHER_TO_STATE', data1.data);
            commit('SET_WEATHER_TO_STATE', data2.data);
            commit('SET_WEATHER_TO_STATE', data3.data);
            commit('SET_WEATHER_TO_STATE', data4.data);
            commit('SET_WEATHER_TO_STATE', data5.data);
            this.state.loaded = 1;
        }));
        }
       },

       GET_COMMENTARIES_FROM_JSON({commit}){
        if(!this.state.loadedComm){
            return axios.get('main.json',{
                method: "GET"
            })
            .then((commentary) => {
                commit('SET_COMMENTARIES_TO_STATE', commentary.data.commentary);
            })
        }
       },

       GET_ADVANTAGES_FROM_JSON({commit}){
        if(!this.state.loadedAdv){
            return axios.get('main.json',{
                method: "GET"
            })
            .then((commentary) => {
                commit('SET_ADVANTAGES_TO_STATE', commentary.data.advantages);
            })
        }
   }

    },
    mutations: {
      SET_WEATHER_TO_STATE: (state, weather)=> {
        state.weatherData.push(weather);
      },
      SET_COMMENTARIES_TO_STATE: (state, commentary)=> {
        state.commentary.push(commentary);
      },
      SET_ADVANTAGES_TO_STATE: (state, advantages)=> {
        state.advantages.push(advantages);
      }
    },
    state: {
        weatherData: [],
        advantages: [],
        commentary: [],
        loaded: 0,
        loadedComm: 0,
        loadedAdv: 0
    },
    getters: {
        get_weatherData(state){
            return state.weatherData;
        },
        get_commentaryData(state){
            return state.commentary;
        },
        get_advantagesData(state){
            return state.advantages;
        }
    }
})