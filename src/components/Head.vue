
<template>
  <section id="title">
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <router-link to="/" class="navbar-brand" id="logo">FitFinds</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/aboutus" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </section>
</template>

<style scoped>
#title {
  background-color: #021926;
  padding-bottom: -20px;
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
li {
  margin: 20px;
}
nav{

}
</style>