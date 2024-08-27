<template>
  <footer>
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>FitFinds</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><router-link to="/" class="nav-link p-0 ">Home</router-link></li>
              <li class="nav-item mb-2"><router-link to="/products" class="nav-link p-0 ">Products</router-link></li>
              <li class="nav-item mb-2"><router-link to="/aboutus" class="nav-link p-0 ">About Us</router-link></li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 ms-auto mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" v-model="email" :disabled="isSubscribed">
                <button class="btn btn-outline-light" type="button" @click="subscribe" :disabled="isSubscribed">
                  {{ buttonText }}</button>
                <p v-if="message" :class="messageClass">{{ message }}</p>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2024 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isSubscribed: false,
      message: '',
      error: false
    };
  },
  computed: {
    buttonText() {
      return this.isSubscribed ? 'Subscribed' : 'Subscribe';
    },
    buttonClass() {
      return this.isSubscribed ? 'btn-success' : 'btn-outline-light';
    },
    messageClass() {
      return this.error ? 'text-danger' : 'text-success';
    }
  },
  methods: {
    subscribe() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(this.email)) {
        // Email is valid
        this.isSubscribed = true;
        this.message = 'You have successfully subscribed!';
        this.error = false;

      } else {
        // Email is invalid
        this.message = 'Please enter a valid email address.';
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.msg {
  margin-top: 10px;
  color: green;
  width: 60px;
}
footer{
  background: #021926;
  color: white;
}
.nav-link{
  color: white;
}
</style>