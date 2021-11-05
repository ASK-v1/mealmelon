<script>
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: { Navbar, About }
}
</script>

<template>
  <div class="home">
    <div class="home_navbar">
      <Navbar />
    </div>
    <div class="home_about">
      <About />
    </div>
  </div>
</template>

<style>
.home_about {
  margin-top: 100px;
  text-align: center;
}
</style>
