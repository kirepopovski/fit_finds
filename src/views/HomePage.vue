
<template>
  <Header/>
  <Main/>
  <Footer/>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'home'
})

</script>

<script setup>
import Header from "../components/Header.vue"
import Footer from '../components/Footer.vue'
import Main from '../components/Main.vue'
</script>

