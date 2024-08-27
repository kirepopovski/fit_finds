<template>

  <div  class="container">

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th></th>
      </tr>
      </thead>
      <transition-group name="fade" tag="tbody">
        <tr v-for="item in cartItems" :key="item.id">
          <th scope="row"><img :src="item.img" alt="Product image"></th>
          <td id="name" class="pt-5">{{ item.name }}</td>
          <td class="pt-5"><i>{{ item.description }}</i></td>
          <td class="pt-5">${{ item.price }}</td>
          <td>
            <button class="btn btn-danger mt-5" @click="removeItem(item.id)">Remove</button>
          </td>
        </tr>
      </transition-group>
      <tfoot>
      <tr>
        <td>Items: {{items}}</td>
        <td></td>
        <td></td>
        <td>Total: ${{total}}</td>
        <td></td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { cart, removeFromCart } from "@/stores/store.js";

const cartItems = ref(cart);

const items = computed(() => cartItems.value.length);
const total = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price, 0).toFixed(2);
});


const removeItem = (id) => {
  removeFromCart(id);
  cartItems.value = [...cart];
};
</script>


<style scoped>
.container{
  margin-top: 5rem ;
  margin-bottom: 5rem;
}
img {
  width: 200px;
}
#name {
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
table tbody tr {
  display: table-row;
}

</style>