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
              <h1><a class="navbar-brand " href="index.html"><img src="assets/images/golf.png" alt="" class="img-responsive logo-logo">
                      Yoga
                  </a></h1>
              <button class="navbar-toggler bg-gradient" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse jus" id="navbarNav">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item ">
                          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link" href="about.html">About</a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link" href="services.html">Services</a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link" href="contact.html">Contact</a>
                      </li>
                  </ul>
              </div>
            </nav>
      </div>
  </header>
  </body>
  </html>
</template>

<script>
export default {

}
</script>

<style>
.header {
  padding: 15px 0px 15px;
  background: #7ba010;
  border-bottom: none; }

.navbar {
  padding: 0; }

.navbar .navbar-brand {
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
  color: #fff; }
</style>
