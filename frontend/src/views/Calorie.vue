<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Calorie',
  components: { Navbar, Footer },
  data () {
    return {
      options: [
        'Sedentary',
        'Lightly Active',
        'Moderately Active',
        'Very Active',
        'Exteremly Active'
      ]
    }
  }
}
</script>

<template>
  <div class="calorie">
    <div class="calorie_navbar">
      <Navbar />
    </div>
    <div class="calorie_body">
      <div class="inputs">
        <div class="title">
          <h3>Calorie Calculator</h3>
        </div>
        <div class="weight">
          <q-input class="kg" ref="kgRef" filled type="number" v-model="kg" label="kg" lazy-rules :rules="kgRules" color="black" />
          <q-input class="lbs" ref="lbsRef" filled type="number" v-model="lbs" label="lbs" lazy-rules :rules="lbsRules" color="black" />
        </div>
        <div class="height">
          <q-input class="cm" ref="cmRef" filled type="number" v-model="cm" label="cm" lazy-rules :rules="cmRules" color="black" />
          <q-input class="in" ref="inRef" filled type="number" v-model="inc" label="in" lazy-rules :rules="inRules" color="black" />
        </div>
        <div class="select_age">
          <q-input  class="age" ref="ageRef" filled type="number" v-model="age" label="Age" lazy-rules :rules="ageRules" color="black" />
        </div>
        <div class="activity_level">
          <q-select class="activity" rounded filled v-model="model" :options="options" label="Activity level" color="black" />
        </div>
        <div class="your_goal">
          <q-select class="goal" rounded filled v-model="model" :options="options" label="Your goal" color="black" />
        </div>
        <div class="gender">
          <q-btn-toggle
          v-model="model"
          toggle-color="black"
          size="20px"
          :options="[
            {label: 'male', value: 'male'},
            {label: 'female', value: 'female'},
          ]"/>
        </div>
        <div class="button">
          <q-btn push class="done" color="black" label="CALCULATE" size="25px"/>
        </div>
      </div>
    </div>
      <div class="results">
        <div>
          <h5>Your BMR is</h5>
          <h4>2000 kcal</h4>
        </div>
        <div>
          <h5>Your TDD is</h5>
          <h4>2400 kcal</h4>
        </div>
      </div>
    <div class="calorie_image"> </div>
    <div class="calorie_footer">
      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Roboto+Slab:wght@500;900&display=swap');

.calorie .calorie_body {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}

.calorie .calorie_body .inputs {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.calorie .calorie_body .inputs .title h3 {
  font-weight: bolder;
  font-size: 40px;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 5%;
  border-radius: 20px;
  padding: 20px;
  background: linear-gradient(100deg, #faffad 0%, #ffe341 20%, #fff78b 40%, #e9ff1e 60%, #fbff1e 80%);
}

.calorie .calorie_body .inputs .weight{
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.calorie .calorie_body .inputs .height{
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.calorie .calorie_body .inputs .weight .lbs {
  border: 1px solid rgb(100, 100, 100);
  border-radius: 10px;
}
.calorie .calorie_body .inputs .weight .kg {
  border: 1px solid rgb(100, 100, 100);
  border-radius: 10px;
}
.calorie .calorie_body .inputs .select_age .age {
  border: 1px solid rgb(100, 100, 100);
  border-radius: 10px;
}
.calorie .calorie_body .inputs .height .cm {
  border: 1px solid rgb(100, 100, 100);
  border-radius: 10px;
}
.calorie .calorie_body .inputs .height .in {
  border: 1px solid rgb(100, 100, 100);
  border-radius: 10px;
}

.calorie .calorie_body .inputs .button {
  display: flex;
  justify-content: center;
  margin-top: 15%;
}

.calorie .calorie_body .inputs .gender {
  display: flex;
  justify-content: center;
}

.calorie .results {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  gap: 15px;
  margin-bottom: 5%;
}

.calorie .results h4 {
  font-weight: bold;
  margin-bottom: 5px;
}

.calorie .calorie_image {
  background-image: url("../assets/calc.png");
  background-size:cover;
  background-repeat: no-repeat;
  padding: 10%;
}
</style>
