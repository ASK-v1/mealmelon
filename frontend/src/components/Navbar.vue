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
      <q-btn class="start" to="/start" label="Get Started For Free" outline color="yellow" size="18px" />
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
  margin-top: 10px;
}

.navbar_logo img {
  width: 60%;
}

.navbar_buttons .start {
  margin-right: 25px;
  font-weight: 700;
}

.navbar_buttons .login {
  font-weight: 700;
}

@media (max-width: 900px) {
  .navbar {
    justify-content: center;
  }
  .navbar_logo img  {
    justify-content: center;
  }
  .navbar_buttons .start {
    display:none;
  }
  .navbar_buttons .login {
    width:  100px;
  }
}
</style>
