<template>
  <div class="container-fluid row">
    <aside class="col-lg-2">
      <ul>
        <li>Filters</li>
        <hr>
        <li class="filters" @click="filter('')">All Products</li>
        <hr>
        <li @click="filter('protein')" class="filters">Protein powder</li>
        <hr>
        <li @click="filter('weights')" class="filters">Gym equipment</li>
        <hr>
        <li @click="filter('apparel')" class="filters">Apparel</li>
      </ul>
    </aside>
    <section class="col">
      <div id="holder"   style="display: inline-block">
        <div class="card" @click="goToProductPage(p.id)" v-for="p in allPr"  :key="p.name">
          <img :src="p.img" class="card-img-top" :alt="p.name">
          <div class="card-body">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">{{ p.description }}</p>
            <p class="card-text">${{ p.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {allProducts,addToCart} from "@/stores/store.js";
import {useRouter} from "vue-router"


let allPr = ref(allProducts);
const router = useRouter();


function filter(category) {
  if (category === 'protein') {
    allPr.value = allProducts.filter(product => product.category === 'protein');
  } else if (category === 'weights') {
    allPr.value = allProducts.filter(product => product.category === 'weights');
  } else if (category === 'apparel'){
    allPr.value = allProducts.filter(product => product.category === 'apparel');
  } else {
    allPr.value = allProducts;
  }
}


const goToProductPage = (id) => {
  router.push({name: "productDetails", params: { id }})
}

</script>






<style scoped>
section #holder {
  display: inline-block;
}
.card {
  margin: 1.5rem;
  height: 28rem;
  width: 18rem;
  display: inline-block;
  cursor: pointer;
}

.container-fluid{
  margin-top: 3rem;
  padding-left: 5rem;
}
ul{
  list-style: none;
}
ul li:first-child{
  font-weight: bold;
}
hr{
  width: 150px;
}
.filters{
  transition: color 0.3s ease;
}
.filters::after{
  background-color: transparent;
  transition: background-color 0.3s ease;
}
.filters:hover{
  color: goldenrod;
  cursor: pointer;
}
.filters:hover::after{
  background-color: goldenrod;
}

</style>


