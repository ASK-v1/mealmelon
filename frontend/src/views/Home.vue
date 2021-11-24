<script>
import Navbar from '@/components/Navbar.vue'
import Upper from '@/components/Upper.vue'
import Lower from '@/components/Lower.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: { Navbar, Upper, Lower, Footer }
}
</script>

<template>
  <div class="home">
    <div class="home-navbar">
      <Navbar />
    </div>
    <div class="home-upper">
      <Upper />
    </div>
    <div class="home-lower">
      <Lower />
    </div>
    <div class="home-footer">
      <Footer />
    </div>
  </div>
</template>

<style>

</style>
