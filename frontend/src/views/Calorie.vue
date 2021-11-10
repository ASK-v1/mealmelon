<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AreaChart from '@/components/AreaChart'

export default {
  name: 'Calorie',
  components: { Navbar, Footer, AreaChart },
  data () {
    return {
      optionsActivity: [
        'Sedentary (no exercise, office job)',
        'Lightly Active (light exercise 1-3 days/wk)',
        'Moderately Active (moderate exercise 3-5 days/wk)',
        'Very Active (hard exercise 6-7 days/wk)',
        'Exteremly Active (twice a day exercise & physical job)'
      ],
      optionsGoal: [
        'Lose Weight (-20%)',
        'Slowly Lose Weight (-10%)',
        'Maintain Weight (0%)',
        'Slowly Gain Weight (+10%)',
        'Gain Weight (+20%)'
      ],
      optionsTime: [
        '4 weeks',
        '8 weeks',
        '12 weeks',
        '16 weeks',
        '20 weeks'
      ],
      unit: 'Imperial',
      tdeeResult: '',
      bmrResult: '',
      pounds: '',
      feet: '',
      inches: '',
      kilograms: '',
      meters: '',
      centimeters: '',
      age: '',
      gender: '',
      activity: '',
      goal: '',
      time: ''
    }
  },
  methods: {
    bmr () {
      if (this.unit === 'Imperial') {
        if (this.gender === 'male') {
          this.bmrResult = 66.47 + ((6.24 * this.pounds) + (12.7 * (this.feet * 12 + Number(this.inches))) - (6.755 * this.age))
        } else if (this.gender === 'female') {
          this.bmrResult = 655.1 + ((4.35 * this.pounds) + (4.7 * (this.feet * 12 + Number(this.inches))) - (4.7 * this.age))
        }
      } else {
        if (this.gender === 'male') {
          this.bmrResult = 66.47 + ((13.75 * this.kilograms) + (5.003 * (this.meters * 100 + Number(this.centimeters))) - (6.755 * this.age))
        } else if (this.gender === 'female') {
          this.bmrResult = 655.1 + ((9.563 * this.kilograms) + (1.850 * (this.meters * 100 + Number(this.centimeters))) - (4.676 * this.age))
        }
      }
    },
    tdee () {
      if (this.activity === 'Sedentary (no exercise, office job)') {
        this.tdeeResult = this.bmrResult * 1.2
      } else if (this.activity === 'Lightly Active (light exercise 1-3 days/wk)') {
        this.tdeeResult = this.bmrResult * 1.375
      } else if (this.activity === 'Moderately Active (moderate exercise 3-5 days/wk)') {
        this.tdeeResult = this.bmrResult * 1.55
      } else if (this.activity === 'Very Active (hard exercise 6-7 days/wk)') {
        this.tdeeResult = this.bmrResult * 1.725
      } else if (this.activity === 'Exteremly Active (twice a day exercise & physical job)') {
        this.tdeeResult = this.bmrResult * 1.9
      }
    },
    calc () {
      this.bmr()
      this.tdee()
    }
  }
}
</script>

<template>
  <div class="calorie">
    <div class="calorie_navbar">
      <Navbar />
    </div>
    <div class="calorie_image">
      <div class="calorie_body">
        <div class="inputs">
          <div class="select_unit">
            <q-btn-toggle
              v-model="unit"
              class="my-custom-toggle"
              no-caps
              rounded
              unelevated
              toggle-color="yellow"
              color="white"
              text-color="black"
              size="20px"
              :options="[
                {label: 'Imperial', value: 'Imperial'},
                {label: 'Metric', value: 'Metric'} ]"
            />
          </div>
          <div v-if="unit === 'Imperial'"  class="imperial">
            <div class="imperial_inputs">
              <q-input class="lbs" ref="lbsRef" filled type="number" v-model="pounds" label="Pounds" color="black" />
              <q-input class="ft" ref="ftRef" filled type="number" v-model="feet" label="Feet" color="black" />
              <q-input class="in" ref="inRef" filled type="number" v-model="inches" label="Inches" color="black" />
            </div>
          </div>
          <div v-if="unit === 'Metric'" class="metric">
            <div class="metric_inputs">
              <q-input class="kg" ref="kgRef" filled type="number" v-model="kilograms" label="Kilograms" color="black" />
              <q-input class="cm" ref="cmRef" filled type="number" v-model="meters" label="Meters" color="black" />
              <q-input class="cm" ref="cmRef" filled type="number" v-model="centimeters" label="Centimeters" color="black" />
            </div>
          </div>
          <div class="select_age">
            <q-input class="age" ref="ageRef" filled type="number" v-model="age" label="Age" color="black" />
          </div>
          <div class="activity_level">
            <q-select class="activity" rounded filled v-model="activity" :options="optionsActivity" label="Activity" color="black" />
          </div>
          <div class="your_goal">
            <q-select class="goal" rounded filled v-model="goal" :options="optionsGoal" label="Goal" color="black" />
          </div>
          <div class="your_time">
            <q-select class="time" rounded filled v-model="time" :options="optionsTime" label="Time" color="black" />
          </div>
          <div class="gender">
            <q-btn-toggle
            v-model="gender"
            toggle-color="black"
            size="18px"
            :options="[
              {label: 'male', value: 'male'},
              {label: 'female', value: 'female'},
            ]"/>
          </div>
          <div class="button">
            <q-btn @click="calc" push class="done" color="black" label="CALCULATE" size="22px"/>
          </div>
        </div>
        <div v-if="bmrResult" class="chart_results">
          <div class="chart">
            <AreaChart />
          </div>
          <div class="results">
            <div class="bmr">
              <h5>Your BMR is</h5>
              <h4>{{ Math.ceil(bmrResult) }}</h4>
            </div>
            <div class="tdee">
              <h5>Your TDEE is</h5>
              <h4>{{ Math.ceil(tdeeResult) }}</h4>
            </div>
          </div>
        </div>
      </div>
      <q-banner class="info" >
        <div class="bmr_info">
          <h4>HOW DID WE CALCULATE YOUR BMR?</h4>
          <p>Calculator uses the Harris-Benedict equation, which many experts consider to be the most accurate BMR calculation for most types of people.
          <br>For men: BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)
          <br>For women: BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
          </p>
          <h4>WHAT IS BMR?</h4>
          <p>
          Basal Metabolic Rate (BMR) is how many calories you burn when your body is resting. BMR is the basic number of calories you need to sustain life. It’s the energy your body needs to keep your heart pumping, your circulation, lungs, brain, and other vital organs working, and your body temperature regulated.
          </p>
        </div>
        <div class="tdee_info">
          <h4>WHAT IS TDEE?</h4>
          <p>
          Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn each day, including physical activity. It is calculated by multiplying your Basal Metabolic Rate (BMR) by 1.2 - 1.9 based on your activity level.
          </p>
        </div>
      </q-banner>
    </div>
    <div class="calorie_footer">
      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Roboto+Slab:wght@500;900&display=swap');

.calorie .calorie_image {
  background-image: url("../assets/calc.png");
  background-size:cover;
  background-repeat: no-repeat;
  padding: 50px;
  margin-top: 1%;
}

.calorie .calorie_body .inputs {
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border-radius: 20px;
  background-color: white;
}

.calorie .calorie_body {
  display: flex;
  flex-direction: row;
  justify-content:center;
  gap: 40px;
}

.calorie .chart_results {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
}

.calorie .calorie_body .inputs {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.calorie .calorie_body .inputs .metric .metric_inputs {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.calorie .calorie_body .inputs .imperial .imperial_inputs {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.calorie .calorie_body .inputs .select_unit {
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
}

.calorie .calorie_body .inputs .button {
  display: flex;
  justify-content: center;
  margin-top: 5%;
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
  font-family: 'Roboto Slab', serif;
}

.calorie .chart_results .chart {
  margin-bottom: 10%;
}

.calorie .info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 30px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
  font-family: 'Roboto Slab', serif;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  padding: 30px;
  background-color: white;

}

.calorie .info {
  border-bottom: 10px solid rgb(255, 255, 0);
  margin-bottom: 1%;
}

.calorie .info p {
  font-size: 14px;
  margin-top: 1%;
  margin-bottom: 1%;
}

.calorie .info h4 {
  font-size: 28px;
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

</style>
