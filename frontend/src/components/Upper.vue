<script>
export default {
  name: 'Upper'
}
</script>

<template>
  <div class="all">
    <div class="upper">
      <div class="text">
        <div class="text-u">
          <h1>Easy</h1>
        </div>
        <div class="text-l">
          <h1>Meal Planner</h1>
        </div>
        <p>Calculate your calorie, create custom diet plans for weight loss and weight gain.</p>
        <q-btn to="/meal" class="start" rounded color="black" label="GET STARTED" size="25px"/>
      </div>
      <video class="video" width="400" autoplay loop muted>
        <source src="../assets/video/v.mp4" type="video/mp4">
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
.upper .video {
  border-radius: 50px;
  margin-right: 10%;
  border: 5px solid rgb(255, 255, 0);
}

.upper .text {
  margin-top: 10%;
}
.upper .text .text-u h1 {
  font-size: 60px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  background: linear-gradient(100deg, #faffad 0%, #ffe341 20%, #fff78b 40%, #e9ff1e 60%, #fbff1e 80%);
  border-radius: 20% 80% 20% 40%;
  margin-left: 35%;
  margin-right: 35%;
  color: rgba(0, 0, 0, 0.888);
}
.upper .text .text-l h1 {
  font-size: 60px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.888);
}
.upper .text p {
  color: rgb(100, 100, 100);
  font-size: 30px;
  font-weight: 300;
  font-family: sans-serif;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 60px;
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
  .upper .text .text-u h1 {
    font-size: 40px;
    background: white;
  }
  .upper .text .text-l h1 {
    font-size: 40px;
  }
  .about .upper .text p {
    font-size: 20px;
  }
}
</style>
