<template>
  <body>
  <div class="heading">
    <h1>Who we are?</h1>
    <p>Welcome to FitFinds, your premier online destination for sports equipment and fitness products! At FitFinds, our mission is to empower individuals of all fitness levels to achieve their health and wellness goals by providing them with high-quality, innovative, and reliable sports equipment and fitness accessories.</p>
  </div>

  <div class="container">
    <section class="about">
      <div class="about-image">
        <img src=../assets/fitness-group.jpg>
      </div>
      <div class="about-content">
        <h2>Company Overview</h2>
        <p>At FitFinds, we're passionate about helping you achieve your fitness goals. As your premier destination for sports equipment, we offer a curated selection of top-quality gear and accessories to elevate your workouts and enhance your performance. Whether you're a seasoned athlete or just starting your fitness journey, we're here to provide you with the tools and support you need to succeed. Shop with confidence at FitFinds and discover everything you need to stay active, healthy, and motivated.  We are committed to offering a curated selection of top-quality products that are designed to enhance performance, support recovery, and optimize overall fitness. Whether you're a professional athlete, a weekend warrior, or someone just starting their fitness journey, FitFinds has something for everyone. From cutting-edge exercise equipment and athletic apparel to nutritional supplements and recovery tools, we're here to equip you with the tools and resources you need to succeed on your fitness journey. Thank you for choosing FitFinds as your trusted partner in health and fitness. We look forward to helping you reach your goals and become the best version of yourself!</p>
      </div>
    </section>
  </div>

  <div class="container">
    <section class="about">
      <div class="about-image">
        <img src=../assets/history-img.jpg>
      </div>
      <div class="about-content">
        <h2>History</h2>
        <p>FitFinds was founded in 2022 by Mike Leonard, with a vision to revolutionize the way people shop for sports equipment and fitness products. What started as a passion project in a small garage has evolved into a leading online retailer, serving customers worldwide. Over the years, FitFinds has grown exponentially, expanding its product offerings and reaching new milestones along the way. From our humble beginnings, we have remained committed to our mission of empowering individuals to lead healthier and more active lifestyles.

          Today, FitFinds boasts a diverse catalog of top-quality sports equipment, fitness accessories, and nutritional supplements, curated to meet the needs of athletes, fitness enthusiasts, and beginners alike.

          As we continue to grow and evolve, we remain steadfast in our commitment to helping our customers achieve their health and wellness goals. We look forward to many more years of success and serving as your go-to destination for all things fitness-related.</p>
      </div>
    </section>
  </div>
  <div class="container">
    <section class="about">
      <div class="about-image">
        <img src=../assets/vision-img.jpeg>
      </div>
      <div class="about-content">
        <h2>Vision</h2>
        <p>These values serve as guiding principles that inform our decisions, actions, and interactions at FitFinds. We are passionate about helping our customers achieve their fitness goals and are driven by a shared commitment to excellence, innovation, and customer satisfaction.

          Our vision extends beyond simply selling sports equipment and fitness products. We aspire to be a trusted partner and ally on our customers' fitness journeys, providing guidance, inspiration, and motivation every step of the way. We believe in the transformative power of fitness to enhance physical health, mental well-being, and overall quality of life..</p>
      </div>
    </section>
  </div>
  <div class="contacts">
    <h3>Contact Us</h3>
    <p>Feel free to connect with us on social media:</p>
    <div class="contacts-img">
    <a href="https://www.facebook.com" target="_blank"><img src="../assets/fb_logo.png" alt="Facebook"></a>
    <a href="https://www.instagram.com" target="_blank"><img src="../assets/ig_logo.jpeg" alt="Instagram"></a>
      <a href="https://twitter.com/YourPage" target="_blank"><img src="../assets/tw-logo.jpeg" alt="Twitter"></a>
    </div>
  </div>

  </body>
</template>
<script setup>

</script>
<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Roboto',sans-serif;
}
body{
  background-color: #f2f2f2;
}
.heading{
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
}
.heading h1{
  font-size: 50px;
  collor: #000;
  margin-bottom: 25px;
  position: relative;
}
.heading h1::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  display: block;
  margin: 0 auto;
  background-color: #4caf50;
}
.heading p{
  font-size: 18px;
  color: #666;
  margin-bottom: 35px;
}
.container{
  width: 90%;
  margin: 0 auto;
  padding: 30px;
}
.about{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.about-image{
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
}
.about-image img{
  max-width: 100%;
  height: auto;
  border-radius: 20%;
  display: block;
}
.about-content{
  flex: 1;
}
.about-content h2{
  font-size: 23px;
  margin-bottom: 15px;
  color: #333;
}
.about-content p{
  font-size: 18px;
  line-height: 1.5;
  color: #666;
}
.contacts{
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
}
.contacts h{
  font-size: 50px;
  collor: #000;
  margin-bottom: 25px;
  position: relative;
}

.contacts p{
  font-size: 18px;
  color: #666;
  margin-bottom: 35px;
}
.contacts img{
  width: 50px;
  height: 50px;
  border-radius: 20%;
  padding: 0;
  margin-inline: 10px;
}

</style>