<template>
  <Header/>
  <Details/>
  <Footer/>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'productDetails'
})

</script>



<script setup>
import Header from '../components/Head.vue'
import Details from '../components/Details.vue'
import Footer from '../components/Footer.vue'
</script>