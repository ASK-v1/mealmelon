<script>
export default {
  name: 'Upper'
}
</script>

<template>
  <div class="all">
    <div class="upper">
      <div class="text">
        <div class="text_u">
          <h1>Easy</h1>
        </div>
        <div class="text_l">
          <h1>Meal Planner</h1>
        </div>
        <p>Calculate your calorie and macro, create custom diet plans for weight loss.</p>
        <q-btn class="start" color="black" label="GET STARTED" size="25px"/>
      </div>
      <video class="video" width="400" autoplay loop muted>
        <source src="../assets/v.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
.all {
  text-align:center;
  margin-top: 2%;
}
.upper {
  display:inline-flex;
}
.upper .video{
  border-radius: 20px;
  margin-right: 10%;
}
.upper .video:hover{
  border: 10px solid yellow;
  opacity: 80%;
}
.upper .text {
  margin-top: 10%;
}
.upper .text .text_u h1 {
  font-size: 60px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  background: linear-gradient(100deg, #faffad 0%, #ffe341 20%, #fff78b 40%, #e9ff1e 60%, #fbff1e 80%);
  border-radius: 20% 80% 20% 40%;
  margin-left: 35%;
  margin-right: 35%;
}
.upper .text .text_l h1 {
  font-size: 60px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  margin-bottom: 50px;
}
.upper .text p {
  color: rgb(100, 100, 100);
  font-size: 30px;
  font-weight: 300;
  font-family: sans-serif;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 100px;
}
@media (max-width: 1100px) {
  .upper {
    display: flex;
    flex-direction: column;
  }
  .upper .video{
    display: none;
  }
  .upper .text {
    display: flex;
    flex-direction: column;
  }
  .upper .text .text_u h1 {
    font-size: 40px;
  }
  .upper .text .text_l h1 {
    font-size: 40px;
  }
  .about .upper .text p {
    font-size: 20px;
  }
}
</style>
