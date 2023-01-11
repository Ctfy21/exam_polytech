<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>examPolytech</title>
    </head>
    <section v-for="city in this.$store.state.weatherData" :key="city.location.lat">
        <div class="widget">
            <div class="left-panel panel">
                <div class="date">
                    {{city.location.localtime}}
                </div>
                <div class="city">
                    {{city.location.name}}
                </div>
                <div class="temp">
                   <img src="https://codefrog.tech/cp/wp/ts.png" alt="" width="60">{{city.current.temp_c}}&deg;C</div>
            </div>
            <div class="right-panel panel">
                <img style="margin-left: 40px;" v-bind:src="city.current.condition.icon" alt="" width="180">
            </div>

        </div>
    </section>
    </html>
  </template>
  
  <script>
  import {mapActions} from 'vuex'
  export default {
    data(){
            return{
                weatherData: []
            };
        },
        components:{
            
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ])
        },
        created(){
            this.GET_PRODUCTS_FROM_API()
        }
  }
  
  
  
  </script>
  
  <style>
section{
    padding: 0 !important; 
}

div.widget
{
  position: relative;
  width: 400px;
  margin: 150px auto;
  background-color: #fcfdfd;
  border-radius: 9px;
  padding: 25px;
  padding-right: 30px;
  box-shadow: 0px 31px 35px -26px #080c21;
}

div.date
{
  font-size: 14px;
  font-weight: bold;
  color: rgba(0,0,0,0.5);
}

div.city
{
  font-size: 21px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 5px;
  color: rgba(0,0,0,0.7);
}

div.temp
{
  font-size: 71px;
  color: rgba(0,0,0,0.9);
  font-weight: 80;
}

div.panel
{
  display: inline-block;
}

div.right-panel
{
  position: absolute;
  float: right;
  top: 0;
  margin-top: 35px;
  padding-left: 10px;
}


#btnDownload
{
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9999;
}

#btnDownload img
{
  width: 135px;
  
}
  </style>
  