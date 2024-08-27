<template>
  <div id="all">
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h3 class="mb-3">Products</h3>
        </div>
        <div class="col-6 text-right">
          <a class="btn btn-outline-dark mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <i class="fa fa-arrow-left"><</i>
          </a>
          <a class="btn btn-outline-dark mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
            <i class="fa fa-arrow-right"> > </i>
          </a>
        </div>
        <div class="col-12">
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">

                  <div class="col-md-4 mb-3">
                    <div class="card" @click="goToProductPage(allProducts[c1].id)">
                      <img class="img-fluid" alt="100%x280" :src="allProducts[c1].img">
                      <div class="card-body">
                        <h4 class="card-title">{{ allProducts[c1].name }}</h4>
                        <p class="card-text">{{ allProducts[c1].description }}</p>
                        <p class="card-text">${{ allProducts[c1].price }}</p>
                      </div>

                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card" @click="goToProductPage(allProducts[c2].id)">
                      <img class="img-fluid" alt="100%x280" :src="allProducts[c2].img">
                      <div class="card-body">
                        <h4 class="card-title">{{ allProducts[c2].name }}</h4>
                        <p class="card-text">{{ allProducts[c2].description }}</p>
                        <p class="card-text">${{ allProducts[c2].price }}</p>
                      </div>

                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card" @click="goToProductPage(allProducts[c3].id)">
                      <img class="img-fluid" alt="100%x280" :src="allProducts[c3].img">
                      <div class="card-body">
                        <h4 class="card-title">{{ allProducts[c3].name }}</h4>
                        <p class="card-text">{{ allProducts[c3].description }}</p>
                        <p class="card-text">${{ allProducts[c3].price }}</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <div class="carousel-item">
                <div class="row">

                  <div class="col-md-4 mb-3">
                    <div class="card" @click="goToProductPage(allProducts[c4].id)">
                      <img class="img-fluid" alt="100%x280" :src="allProducts[c4].img">
                      <div class="card-body">
                        <h4 class="card-title">{{ allProducts[c4].name }}</h4>
                        <p class="card-text">{{ allProducts[c4].description }}</p>
                        <p class="card-text">${{ allProducts[c4].price }}</p>
                      </div>

                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card" @click="goToProductPage(allProducts[c5].id)">
                      <img class="img-fluid" alt="100%x280" :src="allProducts[c5].img">
                      <div class="card-body">
                        <h4 class="card-title">{{ allProducts[c5].name }}</h4>
                        <p class="card-text">{{ allProducts[c5].description }}</p>
                        <p class="card-text">${{ allProducts[c5].price }}</p>
                      </div>

                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="card" @click="goToProductPage(allProducts[c6].id)">
                      <img class="img-fluid" alt="100%x280" :src="allProducts[c6].img">
                      <div class="card-body">
                        <h4 class="card-title">{{ allProducts[c6].name }}</h4>
                        <p class="card-text">{{ allProducts[c6].description }}</p>
                        <p class="card-text">${{ allProducts[c6].price }}</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <section id="sec2">
    <div class="container comments ms-5 me-md-0 ">
      <div>
      <div class="row ms-5 ms-md-0 ms-sm-0 align-items-sm-center ms-xxl-5  me-sm-5">
          <img id="person1" class="col-lg-6 col-md-4 ms-sm-auto me-sm-5 col-sm-12"  src="../assets/person1.jpg">
          <p class="col-lg-6 col-md mt-5 ms-5 col-sm-12"  >“I got a pair of Dumbbells from store FitFinds and I’m very satisfied. They are high-quality and worth the money.The store also offered free shipping at that price so that’s a plus!”</p>
      </div>
      <div class="row sC ms-5 ms-xxl-auto">
        <p class="col-lg-6 mt-5 ms-auto me-xxl-5 ms-xxl-auto   col-md">“The product quality is consistently outstanding, exceeding my expectations every time.”</p>
        <img class="col-lg-6 col-md-4 ms-auto me-5 me-xxl-5 ms-xxl-auto   me-sm-auto" id="person2" src="../assets/person2.jpg">
      </div>
    </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import {allProducts} from "@/stores/store.js";
import {useRouter} from "vue-router"
const router = useRouter();



const goToProductPage = (id) => {
  router.push({name: "productDetails", params: { id }})
}

let c1 = Math.floor(Math.random() * allProducts.length)+1;
let c2 = Math.floor(Math.random() * allProducts.length)+1;
let c3 = Math.floor(Math.random() * allProducts.length)+1;
let c4 = Math.floor(Math.random() * allProducts.length)+1;
let c5 = Math.floor(Math.random() * allProducts.length)+1;
let c6 = Math.floor(Math.random() * allProducts.length)+1;



</script>

<style scoped>
#sec2{
  margin-left: 10rem;
}
img{
  width: 500px;
}
.card{
  height: 36rem;
  cursor: pointer;
}
#person1{
  width: 300px;
  border-radius: 50%;
}
#person2{
  width: 300px;
  border-radius: 50%;
}
.comments{
  text-align: center;
}
#all{
  margin-bottom: 8rem;
}
.sC{
  margin-top: 2rem;
}


@media (max-width: 1285px) {
  .card{
    height: 33rem;
  }
}
@media (max-width: 1200px) {
  .card{
    height: 30rem;
  }
}
@media (max-width: 992px) {
  .card{
    height: 26rem;
  }
  #sec2{
    padding-left: 5rem;
  }

}
@media (max-width: 889px) {

  #sec2{
    padding-left: 2rem;
  }

}
@media (max-width: 883px) {

  #sec2{
    padding-left: 0;
  }

}
@media (max-width: 767.5px) {
  .card{
    height: 42rem;
  }
}

@media (max-width: 1670px) {
  #sec2{
    margin-left: 0;
  }
}

</style>