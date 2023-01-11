<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>examPolytech</title>
  </head>
  <body>  
    <header class="header">
      <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light">
              <h1><a class="navbar-bran" href="/#/">
                      WeatherApp
                  </a></h1>
              <button class="navbar-toggler bg-gradient" type="button" aria-expanded="false" >
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse jus" id="navbarNav">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item ">
                          <a class="nav-link" href="/#/">Главная</a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link" href="/#/weather">Сервисы</a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link" href="#">Контакты</a>
                      </li>
                      <li class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" />
                        <button type="button" class="btn btn-primary">
                         <img style="width: 35px; height: 35px;" src="../public/search.png" alt="search icon">
                        </button>
                      </li>
                      <li style="display: inline-block; margin-left: 100px;" class="nav-item">
                        <p style="padding: 0; margin: 0; color: #fff;">Приветствую, Евгений</p>
                      </li>
                      <li style="display: inline-block;" class="nav-item">
                        <img style="width: 47px; height: 47px;" src="../public/face.jpg" alt="">
                      </li>
                  </ul>
              </div>
            </nav>
      </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <div class="footer-dark">
            <div class="container">
                <div class="rowFooter">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Сервисы</h3>
                        <ul>
                            <li><a href="#">Прогноз</a></li>
                            <li><a href="#">UV-карта</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>О нас</h3>
                        <ul>
                            <li><a href="#">Компания</a></li>
                            <li><a href="#">Команда</a></li>
                            <li><a href="#">Работа</a></li>
                            <li><a href="https://github.com/Ctfy21/exam_polytech">Ссылка GitHub</a></li>
                            <li><a href="#">Ссылка FIT</a></li>
                            <li><a href="/#/json">Ссылка JSON</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>WeatherApp</h3>
                        <p>Данный сайт имеет такое авторское право, которое позволяет просматривать и пользоваться этим сайтом только его создателю.</p>
                    </div>
                </div>

            </div>          
          </div>          
  </footer>
  </body>
  </html>
</template>

<script>
export default {

}



</script>

<style>
.header {
  background: #252B39;
  border-bottom: none; }

.navbar {
  padding: 0; }

.navbar .navbar-bran{
  font-size: 27px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 4px;
  margin-right: 0px;
  line-height: 37px;
  padding: 0px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-gap: 5px; }

.navbar-bran:hover{
  color:orange
}
div#navbarNav {
  margin-left: 20px;
  margin-top: 5px; }

.navbar-expand-lg .navbar-nav .nav-item:last-child {
  padding-right: 0; }

.navbar-expand-lg .navbar-nav .nav-link {
  padding: 6px 12px;
  color: #e8e8e8;
  background: transparent;
  font-size: 16px;
  line-height: 25px;
  text-transform: capitalize; }

.navbar-expand-lg .navbar-nav .nav-link:hover {
  color: #fff; 
}
.navbar-nav > li{
  margin-right: 12px;
}

.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}
.rowFooter {
  display: grid !important; 
  grid-template-columns: repeat(3, 1fr) !important;
  column-gap: 20px;}
</style>
