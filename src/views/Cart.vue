<template>
  <Header/>
  <CartMain />
  <Footer/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'cart'
})

</script>


<script setup>
import Header from '../components/Head.vue'
import Footer from '../components/Footer.vue'
import CartMain from '../components/CartMain.vue'
</script>