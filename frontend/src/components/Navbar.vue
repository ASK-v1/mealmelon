<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <div class="navbar">
    <router-link to="/" class="logo"><img src="../assets/logo.png"></router-link>
    <router-link to="/login" class="login">Login</router-link>
  </div>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar img {
  width: 70%;
}
.login {
  padding: 20px;
}
</style>
