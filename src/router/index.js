import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '../views/Cart.vue'
import AboutUs from "../views/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/products',
      name: 'products',
      component: Products
    },
    {
      path:'/products/:id',
      name: 'productDetails',
      component: ProductDetails
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart
    },
    {
      path:'/aboutus',
      name:'aboutUs',
      component: AboutUs
    }
  ]
})

export default router
