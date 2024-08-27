<template>
  <div class="container" id="details">
  <div class="row">
    <div class="col-lg-6 img-container">
      <img :src="selectedProduct.img" id="product" alt="">
    </div>
    <div class="col-lg-6" id="textContainer">
      <h1>{{selectedProduct.name}}</h1>
      <p><i>{{selectedProduct.description}}</i></p>
      <h2>${{selectedProduct.price}}</h2>
<!--      <div class="container1">-->
<!--        <button id="decrement" @click="decrement"> - </button>-->
<!--        <input id="quantity" type="number" min="0" max="100" v-model="quantity">-->
<!--        <button id="increment" @click="increment"> + </button>-->
<!--      </div>-->
      <button @click="cart" class="btn btn-outline-dark">Add to Cart</button>
    </div>
  </div>
  </div>
</template>




<script setup>
import {computed} from "vue";
import {allProducts,addToCart,removeFromCart} from "@/stores/store.js";
import {useRoute, useRouter} from 'vue-router'


const store = allProducts;
const router = useRouter();
const route = useRoute();


const selectedProduct = computed(() => {
  return  store.find((item => item.id === Number(route.params.id)))
})
//
// const quantity = ref(0); // Initialize quantity
//
// function increment() {
//   if (quantity.value < 100) {
//     quantity.value++;
//   }
// }
//
// function decrement() {
//   if (quantity.value > 0) {
//     quantity.value--;
//   }
// }



const cart = () => {
  if (selectedProduct.value) {
    addToCart(selectedProduct.value);
    router.push({ name: 'cart' });
  } else {
    console.error("Selected product is not defined.");
  }
}


</script>




<style scoped>
#product{
  width: 350px;
  border: 1px solid black;
}
p {
  padding-bottom: 10rem;
}

.container {
  margin-top: 5rem;
}
#details{
  margin-bottom: 10rem;
}
.img-container{
  text-align: center;
}


/*.container1{*/

/*  width: 190px;*/
/*  background-color: #ffffff;*/
/*  border-radius: 45px;*/
/*  border: 1px solid black;*/
/*}*/
/*input[type="number"]{*/
/*  -moz-appearance: textfield;*/
/*  text-align: center;*/
/*  font-size: 30px;*/
/*  border: none;*/
/*  background-color: #ffffff;*/
/*  color: #202030;*/
/*}*/
/*input::-webkit-outer-spin-button,*/
/*input::-webkit-inner-spin-button{*/
/*  -webkit-appearance: none;*/
/*  margin: 0;*/
/*}*/
/*button{*/
/*  color: black;*/
/*  background-color: #ffffff;*/
/*  border: none;*/
/*  font-size: 40px;*/
/*  cursor: pointer;*/
/*}*/
/*#decrement{*/
/*  padding: 15px 5px 15px 25px;*/
/*  border-radius: 45px 0 0 45px;*/
/*}*/
/*#increment{*/
/*  padding: 15px 25px 15px 5px;*/
/*  border-radius: 0 45px 45px 0;*/
/*}*/



@media (max-width: 991px) {
  #textContainer{
    text-align: center;
    margin-top: 2rem;
  }
  p {
    padding-bottom: 1rem;
  }
  #details{
    margin-bottom: 5rem;
  }
}


</style>