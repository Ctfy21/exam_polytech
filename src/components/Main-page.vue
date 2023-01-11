<template>
  <section class="">
  <div class="slide text-center header11">
    <div class="container">
        <div class="banner-text">
          <h5>Добро пожаловать в WeatherApp</h5>
          <p class="banner-desc">Это первый в России беслпатный сервис получения погодных показаний. Данный сервис позволяет вам получать открытые данные о погоде со всего мира, а также получать и рассылать их десятками способами. Попробуйте прямо сейчас!</p>
          <a href="#" class="btn logo-button top-margin">Записаться</a>
        </div>
      </div>  
    </div>
  </section>
  <section>
    <div class="specification-layout ">
        <div class="container">
            <div class="specification-effect row" >
                    <div class="col" v-for="advantage in this.$store.state.advantages[0]" :key="advantage.id">
                        <img class="icon" v-bind:src="advantage.logo" alt="like">  
                        <div class="back-color ">
                          <span class="fa fa-thumbs-up" aria-hidden="true"></span>
                          <h4>{{ advantage.name }}</h4>
                          <p class="para ">{{ advantage.description }} </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
<section>
        <div class="covers-main slideForm">
            <div class="container ">
                <div class="cover-layout">
                    <form class="main-cover text-center">
                      <h2>Регистрируйся прямо сейчас</h2>
                  <div class="form-group">
                  <label for="InputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите email">
                </div>
                <div class="form-group">
                  <label for="InputPhone1">Номер телефона</label>
                  <input type="phone" class="form-control" id="InputPhone1" aria-describedby="phoneHelp" placeholder="Введите номер телефона">
                </div>
                <div class="form-group">
                  <label for="InputPassword1">Пароль</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
                </div>
                <button type="submit" class="btn btn-primary">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section style="margin-top: 100px;">
    <div>
        <div class="container">
            <div class="main-titles-head text-center">
                <h3 class="header-name ">
                  Комментарии пользователей
                </h3>
                <p class="tiltle-para  ">Прочитайте комментарии счастливых пользователей нашего сервиса.</p>
            </div>
            <div class="row" >
                <div class="col padding-commentary" v-for="commentary in this.$store.state.commentary[0]" :key="commentary.id">
                    <div class=" hh14-info">
                      <h4 class="mb-3 ">{{commentary.name}}</h4>
                        <p class="para ">{{commentary.description}}</p>
                        <img style="width: 35px;" v-bind:src="commentary.logo" alt="product" class="img-responsive">
                        <div style="margin-left: 15px;" class="rating-mini">
                          <span class="active"></span>	
                          <span class="active"></span>    
                          <span class="active"></span>  
                          <span></span>    
                          <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
            return{
            };
        },
        components:{
            
        },
        methods:{
            ...mapActions([
                'GET_COMMENTARIES_FROM_JSON',
                'GET_ADVANTAGES_FROM_JSON'
            ]),
        },
        created(){
            this.GET_COMMENTARIES_FROM_JSON();
            this.GET_ADVANTAGES_FROM_JSON();
        }
}
</script>

<style>
section{
  padding-bottom: 20px;
}
a{
  text-decoration: none !important;
}
.row a{
  padding: 0px;
  margin: 0px;
}
.slide {
    background: url(../assets/sunset.jpeg) no-repeat center;
    background-size: cover;
    min-height: 650px;
    z-index: 0;
    position: relative;
    display: grid;
    align-items: center; }
.slide:before {
    width: 100%;
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0px;
    bottom: 0px;
    opacity: .6;
    z-index: -1;
}
.slideForm{
  background: url(../assets/meteo.jpg) no-repeat center;
  background-size: cover;
  min-height: 650px;
  z-index: 0;
  position: relative;
  display: grid;
  align-items: center; 
}
.slideForm:before {
    width: 100%;
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0px;
    bottom: 0px;
    opacity: .6;
    z-index: -1;
}
.container {
    
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
:root {
    --back-color: #f7f7f7;
    --header-title-color: #353232;
    --para-color: #666;
    --logo-color: #4e4c4c;
    --bg-color: rgba(210, 172, 75, 0.2);
    --para-sub-color: #868686;
    --para-light-color: #e8e8e8;
    --title-color: #e8e8e8;
}
h5{
  color: var(--title-color); }
p{
  color: var(--para-color); 
}
p.banner-desc{
  color: var(--para-light-color);
}
a.logo-button {
    border: 2px solid #fff;
    color: #ffffff;
    font-size: 16px;
    line-height: 25px;
    display: inline-block;
    width: 176px;
    padding: 12px 10px;
    font-weight: 600;
    text-decoration: none;
    outline: none;
}
a.logo-button:hover{
  color: orange;
  border-color: orange;
}
.banner-text{
  padding: 15px;
  border: 2px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
}
.row {
  display: grid !important; 
  grid-template-columns: repeat(3, 1fr) !important;
  grid-template-rows: repeat(2, 1fr) !important;
  column-gap: 20px;}
.col{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px;
}
a.title-head {
  color: var(--logo-color);
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: capitalize;
  display: inline-block; }
.specification-layout {
    padding: 70px 0;
}
.col {
  margin: 10px;
  background: rgba(0, 0, 0, 0.1);
}
.icon{
  width: 40px;
  height: 40px;
  margin: 10px 10px 10px 0px;
}
.cover-layout {
  max-width: 500px;
  margin: 0px auto; 
}
.main-cover {
  border-radius: 10px;
  padding: 30px;
  background: #FFFFFF; 
}
.text-center {
  text-align: center !important; 
}
a.action-button{
    border: 2px solid #f5b000;
    color: #f5b000;
    font-size: 17px;
    line-height: 25px;
    display: inline-block;
    width: 176px;
    padding: 12px 10px;
    text-decoration: none;
    outline: none;
    text-transform: capitalize;
}
.main-cover > *{
  margin-top: 20px;
}
.main-titles-head {
  margin: 0px auto 110px;
  position: relative; }
h3.header-name {
  color: var(--header-title-colo);
  font-size: 45px;
  line-height: 55px;
  text-transform: capitalize;
  text-align: center; }
  p.tiltle-para {
  font-size: 17px;
  line-height: 28px;
  margin: 25px auto 0px;
  color: var(--para-color);
  padding-bottom: 20px;
  max-width: 604px; }
.padding-commentary{
  padding: 15px;
}
.rating-mini {
	display: inline-block;
	font-size: 0;
}
.rating-mini span {
	padding: 0;
	font-size: 20px;
	line-height: 1;
	color: lightgrey;
}
.rating-mini > span:before {
	content: '★';
}
.rating-mini > span.active {
	color: gold;
}
</style>
