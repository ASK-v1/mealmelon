<script>
import Navbar from '@/components/Navbar.vue'
import Upper from '@/components/Upper.vue'

export default {
  name: 'Home',
  components: { Navbar, Upper }
}
</script>

<template>
  <div class="home">
    <div class="home_navbar">
      <Navbar />
    </div>
    <div class="home_about">
      <Upper />
    </div>
  </div>
</template>

<style>
</style>
