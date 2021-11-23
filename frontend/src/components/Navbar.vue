<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/" class="navbar_logo"><img src="../assets/logo.png"></router-link>
    </div>
    <div class="navbar_buttons">
      <q-btn class="start" to="/calorie" label="Get Started For Free" outline color="black" size="20px" />
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
}

.navbar_logo img {
  width: 60%;
}

.navbar_buttons .start {
  font-weight: bold;
}
</style>
