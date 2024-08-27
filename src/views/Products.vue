<template>
  <Head/>
  <AllProducts/>
  <Footer/>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'home'
})

</script>


<script setup>
import Head from "../components/Head.vue"
import AllProducts from "../components/AllProducts.vue"
import Footer from "../components/Footer.vue"
</script>

