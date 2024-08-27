<template>
  <section id="title">
    <div class="container-fluid">
      <!-- Nav Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="" id="logo">FitFinds</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aboutus" href="#cta"  class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" href="#cta" class="nav-link">Cart</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Title -->
      <div class="row iphone-img">
        <div class="col-lg-6">
          <h1>Fitness for everybody</h1>
          <p>                “The body achieves
            what the mind believes." – Napoleon Hill</p>
        </div>
        <div class="col-lg-6 trim ">
          <img class="rotate" src="../assets/lift.jpg">
        </div>
      </div>
    </div>
  </section>

</template>


<style scoped>
#title {
  background-color: #021926;
  padding-bottom: -20px;
}
h1{
  font-size: 3rem;
  line-height: 1.5;
  color: white;
  font-weight: bold;
  padding-bottom: 15px;
}
.container-fluid {
  padding: 3% 15%;
}
.navbar {
  font-size: 1.5rem;
}
#logo {
  font-size: 2.5rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
}
nav {
  margin-bottom: 80px;
}
p{
  color: white;
}
li {
  margin: 20px;
}

.rotate{
  width: 100%;
  height: auto;
  border-radius: 50%;
}

@media (max-width:1028px) {

  #title {
    text-align: center;
  }

}

</style>