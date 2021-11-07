<script>
export default {
  name: 'About'
}
</script>

<template>
  <div class="about">
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

.about {
  text-align:center;
  margin-top: 2%;
}

.about .upper {
  display:inline-flex;
}

.about .upper .video{
  border-radius: 20px;
  margin-right: 10%;
}

.about .upper .video:hover{
  border: 10px solid yellow;
  opacity: 80%;
}

.about .upper .text {
  margin-top: 10%;
}

.about .upper .text .text_u h1 {
  font-size: 60px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  background: linear-gradient(100deg, #faffad 0%, #ffe341 20%, #fff78b 40%, #e9ff1e 60%, #fbff1e 80%);
  border-radius: 20% 80% 20% 40%;
  margin-left: 35%;
  margin-right: 35%;
}

.about .upper .text .text_l h1 {
  font-size: 60px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  margin-bottom: 50px;
}

.about .upper .text p {
  color: rgb(100, 100, 100);
  font-size: 30px;
  font-weight: 300;
  font-family: sans-serif;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 100px;
}

@media (max-width: 1100px) {
  .about .upper {
    display: flex;
    flex-direction: column;
  }
  .about .upper .video{
    display: none;
  }
  .about .upper .text {
    display: flex;
    flex-direction: column;
  }
  .about .upper .text .text_u h1 {
    font-size: 40px;
  }
  .about .upper .text .text_l h1 {
    font-size: 40px;
  }
  .about .upper .text p {
    font-size: 20px;
  }
}
</style>
