<template>
  <section class="w3l-hero-headers-9">
  <div class="slide text-center header11">
    <div class="container">
        <div class="banner-text">
          <h5>Welcome to Golf Pro</h5>
          <p>Adipi sicing elit. Quia, aliquid odioexplicabo voluptatum corporis Dicta, provident! Rem adip isci conse ctetur adipi sicing elit. Deleniti possimus culpa nemo asperiores aperiam mollitia, maiores Lorem ipsum dolor.</p>
          <a href="contact.html" class="btn logo-button top-margin">Записаться</a>
        </div>
      </div>  
    </div>
  </section>
  <section class="w3l-specification-6">
    <div class="specification-layout ">
        <div class="container">
            <div class="specification-effect row ">
                <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 ">
                    
                    <div class="back-color ">
                    <span class="fa fa-thumbs-up" aria-hidden="true"></span>
                    <h4><a href="about.html" class="title-head ">Best Trainers</a></h4>
                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempor econs ectetur elit.optio illum officiis itaque
                        soluta impedit </p>
                </div>
            </div>
                <div class="col">
                    <div class="back-color ">
                    <span class="fa fa-diamond" aria-hidden="true"></span>
                    <h4><a href="about.html" class="title-head ">Popular Courses</a></h4>
                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque
                        soluta impedit </p>
                    </div>
                </div>
                <div class="col">
                    <div class="back-color ">
                    <span class="fa fa-flag" aria-hidden="true"></span>
                    <h4><a href="about.html" class="title-head  ">Training Area</a></h4>
                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque
                        soluta impedit</p>
                </div>
            </div>
                <div class="col">
                    <div class="back-color ">
                    <span class="fa fa-user" aria-hidden="true"></span>
                    <h4><a href="about.html" class="title-head ">Certified Experts</a></h4>
                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempor econs ectetur elit.optio illum officiis itaque
                        soluta impedit </p>
                </div>
            </div>
                <div class=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 ">
                    <div class="back-color ">
                    <span class="fa fa-superpowers" aria-hidden="true"></span>
                    <h4><a href="about.html" class="title-head ">Best Horses</a></h4>
                    <p class="para ">Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque
                        soluta impedit </p>
                </div>
            </div>
                <div class="col">
                    <div class="back-color">
                    <span class="fa fa-handshake-o" aria-hidden="true"></span>
                    <h4><a href="about.html" class="title-head"> Supports</a></h4>
                    <p class="para">Cumque asperiores ab quasi laboriosam omnis tempo recons ectetur elit.optio illum officiis itaque
                        soluta impedit  </p>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.slide {
    background: url(../assets/check.png) no-repeat center;
    background-size: cover;
    min-height: 650px;
    z-index: 0;
    position: relative;
    display: grid;
    align-items: center; }

.slide:before {
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
.banner-text{
  padding: 15px;
  border: 2px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px; }
.col{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
