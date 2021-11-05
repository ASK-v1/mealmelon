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
      <q-btn class="start" to="/start" label="Get Started For Free" rounded color="green" size="18px" />
      <q-btn class="login" to="/login" label="Log In" outline color="black" size="18px" />
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}

.navbar_logo img {
  width: 150px;
}

.navbar_buttons .start {
  margin-right: 20px;
}

</style>
