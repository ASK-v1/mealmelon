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
    <div class="home_navbar">
      <Navbar />
    </div>
    <div class="home_upper">
      <Upper />
    </div>
    <div class="home_lower">
      <Lower />
    </div>
    <div class="home_footer">
      <Footer />
    </div>
  </div>
</template>

<style>

</style>
