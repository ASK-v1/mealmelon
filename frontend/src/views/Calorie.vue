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
          <h3>CALORIE CALCULATOR</h3>
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
      <div class="chart_results">
        <div class="chart">
          <h1>CHART</h1>
        </div>
        <div class="results">
          <div class="bmr">
            <h5>Your BMR is</h5>
            <h4>2000 kcal</h4>
          </div>
          <div class="tdee">
            <h5>Your TDEE is</h5>
            <h4>2400 kcal</h4>
          </div>
        </div>
      </div>
    </div>
    <q-banner class="bg-blue-1" >
      <div class="bmr_info">
        <h4>WHAT IS BMR?</h4>
        <p>
        Basal Metabolic Rate (BMR) is how many calories you burn when your body is resting.BMR is the basic number of calories you need to sustain life. It’s the energy your body needs to keep your heart pumping, your circulation, lungs, brain, and other vital organs working, and your body temperature regulated.
        </p>
      </div>
      <div class="tdee_info">
        <h4>WHAT IS TDEE?</h4>
        <p>
        Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn each day, including physical activity. It is calculated by multiplying your Basal Metabolic Rate (BMR) by 1.2 - 1.9 based on your activity level.
        </p>
      </div>
    </q-banner>
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
  flex-direction: row;
  justify-content:space-evenly;
  margin-top: 5%;
}

.calorie .chart_results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.calorie .calorie_body .inputs {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.calorie .calorie_body .inputs .title h3 {
  font-weight: bolder;
  font-size: 32px;
  font-family: sans-serif;
  margin-bottom: 5%;
  background: #000000;
  color: rgb(255, 255, 255);
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 15px;
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
}
.calorie .calorie_body .inputs .weight .kg {
  border: 1px solid rgb(100, 100, 100);
}
.calorie .calorie_body .inputs .select_age .age {
  border: 1px solid rgb(100, 100, 100);
}
.calorie .calorie_body .inputs .height .cm {
  border: 1px solid rgb(100, 100, 100);
}
.calorie .calorie_body .inputs .height .in {
  border: 1px solid rgb(100, 100, 100);
}

.calorie .calorie_body .inputs .weight{
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.calorie .calorie_body .inputs .button {
  display: flex;
  justify-content: center;
  margin-top: 15%;
  margin-bottom: 30%;
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
  gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  padding: 20px;
  font-family: 'Roboto Slab', serif;
}

.calorie .chart_results .chart {
  margin-bottom: 55%;
}

.calorie .bg-blue-1 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 30px;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 3%;
  font-family: 'Roboto Slab', serif;
}

.calorie .bg-blue-1 .bmr_info{
  border-bottom:10px solid rgb(255, 255, 0);
  margin-bottom: 1%;
}

.calorie .bg-blue-1 p {
  font-size: 17px;
  margin-top: 1%;
}

.calorie .chart_results .results .bmr {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.calorie .chart_results .results .tdee {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.calorie .chart_results .results h4 {
  font-weight: bold;
}

.calorie .calorie_image {
  background-image: url("../assets/calc.png");
  background-size:cover;
  background-repeat: no-repeat;
  padding: 10%;
}
</style>
