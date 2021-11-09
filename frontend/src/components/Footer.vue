<script>
export default {
  name: 'Home'
}
</script>

<template>
  <div class="footer">
    <img src="../assets/footer.png">
    <p>© 2021 mealmelon All rights reserved.</p>
  </div>
</template>

<style>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: black;
  text-align: center;
  gap: 50px;
}

.footer img {
  width: 250px;
  text-align: center;
}

.footer p{
  color: white;
  font-weight: 900;
  font-size: larger;
}
</style>
