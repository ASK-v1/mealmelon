<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Calorie',
  components: { Navbar, Footer },
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
        'Aggressive Lose Weight (-25%)',
        'Lose Weight (-20%)',
        'Slowly Lose Weight (-10%)',
        'Slowly Gain Weight (+10%)',
        'Gain Weight (+20%)',
        'Aggressive Gain Weight (+25%)'
      ],
      whatTdee: 'Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn each day, including physical activity. It is calculated by multiplying your Basal Metabolic Rate (BMR) by 1.2 - 1.9 based on your activity level.',
      whatBmr: 'Basal Metabolic Rate (BMR) is how many calories you burn when your body is resting. BMR is the basic number of calories you need to sustain life. It’s the energy your body needs to keep your heart pumping, your circulation, lungs, brain, and other vital organs working, and your body temperature regulated.',
      slide: 'bmr',
      errorMessage: 'Please make sure all fields are filled in correctly.',
      unit: 'Imperial',
      onekilogram: 7700,
      onePound: 3500,
      error: false,
      showResult: false,
      tdeeResult: '',
      bmrResult: '',
      dailyCalorie: '',
      dailyDeficitSurplus: '',
      pounds: '',
      feet: '',
      inches: '',
      kilograms: '',
      meters: '',
      centimeters: '',
      age: '',
      gender: '',
      activity: '',
      goalWeight: '',
      goalDeficitSurplus: '',
      goalUpDown: '',
      startDate: '',
      endDate: '',
      totalDays: ''
    }
  },
  methods: {
    checkFilled () {
      if (this.unit === 'Imperial') {
        if (this.pounds && this.feet && this.inches && this.age && this.gender && this.activity && this.goalDeficitSurplus && this.goalWeight) {
          this.showResult = true
          this.error = false
        } else this.error = true
      }
      if (this.unit === 'Metric') {
        if (this.kilograms && this.meters && this.centimeters && this.age && this.gender && this.activity && this.goalDeficitSurplus && this.goalWeight) {
          this.showResult = true
          this.error = false
        } else this.error = true
      }
    },
    checkGoal () {
      if (this.kilograms === this.goalWeight || this.pounds === this.goalWeight) {
        this.showResult = false
        this.error = true
      } else if ((this.kilograms - this.goalWeight) > 0 || (this.pounds - this.goalWeight) > 0) {
        if ((this.goalDeficitSurplus === 'Slowly Gain Weight (+10%)') ||
          (this.goalDeficitSurplus === 'Gain Weight (+20%)') ||
          (this.goalDeficitSurplus === 'Aggressive Gain Weight (+25%)')) {
          this.showResult = false
          this.error = true
        }
      } else if ((this.kilograms - this.goalWeight) < 0 || (this.pounds - this.goalWeight) < 0) {
        if ((this.goalDeficitSurplus === 'Aggressive Lose Weight (-25%)') ||
          (this.goalDeficitSurplus === 'Lose Weight (-20%)') ||
          (this.goalDeficitSurplus === 'Slowly Lose Weight (-10%)')) {
          this.showResult = false
          this.error = true
        }
      }
    },
    bmr () {
      if (this.unit === 'Imperial') {
        if (this.gender === 'male') {
          this.bmrResult = 66.47 + ((6.24 * this.pounds) + (12.7 * (this.feet * 12 + Number(this.inches))) - (6.755 * this.age))
        } else if (this.gender === 'female') {
          this.bmrResult = 655.1 + ((4.35 * this.pounds) + (4.7 * (this.feet * 12 + Number(this.inches))) - (4.7 * this.age))
        }
      }
      if (this.unit === 'Metric') {
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
    deficitAndSurplus () {
      if (this.goalDeficitSurplus === 'Aggressive Lose Weight (-25%)') {
        this.dailyCalorie = this.tdeeResult * 0.75
        this.dailyDeficitSurplus = this.tdeeResult * 0.25
      } else if (this.goalDeficitSurplus === 'Lose Weight (-20%)') {
        this.dailyCalorie = this.tdeeResult * 0.8
        this.dailyDeficitSurplus = this.tdeeResult * 0.2
      } else if (this.goalDeficitSurplus === 'Slowly Lose Weight (-10%)') {
        this.dailyCalorie = this.tdeeResult * 0.9
        this.dailyDeficitSurplus = this.tdeeResult * 0.1
      } else if (this.goalDeficitSurplus === 'Slowly Gain Weight (+10%)') {
        this.dailyCalorie = this.tdeeResult * 1.1
        this.dailyDeficitSurplus = this.tdeeResult * 0.1
      } else if (this.goalDeficitSurplus === 'Gain Weight (+20%)') {
        this.dailyCalorie = this.tdeeResult * 1.2
        this.dailyDeficitSurplus = this.tdeeResult * 0.2
      } else if (this.goalDeficitSurplus === 'Aggressive Gain Weight (+25%)') {
        this.dailyCalorie = this.tdeeResult * 1.25
        this.dailyDeficitSurplus = this.tdeeResult * 0.25
      }
    },
    goal () {
      if (this.unit === 'Metric') {
        if ((this.kilograms - this.goalWeight) > 0) {
          this.goalUpDown = this.kilograms - this.goalWeight
          const totalDayOneUnit = Math.round(this.onekilogram / this.dailyDeficitSurplus)
          this.totalDays = totalDayOneUnit * this.goalUpDown
        }
        if ((this.kilograms - this.goalWeight) < 0) {
          this.goalUpDown = this.goalWeight - this.kilograms
          const totalDayOneUnit = Math.round(this.onekilogram / this.dailyDeficitSurplus)
          this.totalDays = totalDayOneUnit * this.goalUpDown
        }
      }
      if (this.unit === 'Imperial') {
        if ((this.pounds - this.goalWeight) > 0) {
          this.goalUpDown = this.pounds - this.goalWeight
          const totalDayOneUnit = Math.round(this.onePound / this.dailyDeficitSurplus)
          this.totalDays = totalDayOneUnit * this.goalUpDown
        }
        if ((this.pounds - this.goalWeight) < 0) {
          this.goalUpDown = this.goalWeight - this.pounds
          const totalDayOneUnit = Math.round(this.onePound / this.dailyDeficitSurplus)
          this.totalDays = totalDayOneUnit * this.goalUpDown
        }
      }
    },
    date () {
      const date = new Date()
      this.startDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      date.setDate(date.getDate() + this.totalDays)
      this.endDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
    calc () {
      this.checkFilled()
      this.checkGoal()
      this.bmr()
      this.tdee()
      this.deficitAndSurplus()
      this.goal()
      this.date()
    }
  }
}
</script>

<template>
  <div class="calorie">
    <div class="calorie-navbar">
      <Navbar />
    </div>
    <div class="body">
      <div class="calorie-body">
        <div class="inputs">
          <div class="select-unit">
            <q-btn-toggle
              v-model="unit"
              class="unit-toggle"
              no-caps
              rounded
              unelevated
              toggle-color="black"
              color="white"
              text-color="black"
              size="20px"
              :options="[
                {label: 'Imperial', value: 'Imperial'},
                {label: 'Metric', value: 'Metric'} ]"
            />
          </div>
          <div v-if="unit === 'Imperial'" class="imperial">
            <div class="imperial-inputs">
              <q-input class="ft" filled type="number" v-model="feet" label="Feet" color="black" />
              <q-input class="in" filled type="number" v-model="inches" label="Inches" color="black" />
              <q-input class="pounds" filled type="number" v-model="pounds" label="Pounds" color="black" />
            </div>
          </div>
          <div v-if="unit === 'Metric'" class="metric">
            <div class="metric-inputs">
              <q-input class="m" filled type="number" v-model="meters" label="Meters" color="black" />
              <q-input class="cm" filled type="number" v-model="centimeters" label="Centimeters" color="black" />
              <q-input class="kg" filled type="number" v-model="kilograms" label="Kilograms" color="black" />
            </div>
          </div>
          <div class="select-age">
            <q-input class="age" ref="ageRef" filled type="number" v-model="age" label="Age" color="black" />
          </div>
          <div class="activity-level">
            <q-select class="activity" rounded filled v-model="activity" :options="optionsActivity" label="Activity Level" color="black" />
          </div>
          <div class="goal-deficit-surplus">
            <q-select class="deficit-surplus" rounded filled v-model="goalDeficitSurplus" :options="optionsGoal" label="Goal Deficit/Surplus" color="black" />
          </div>
          <div class="goalWeight">
            <q-input class="goalWeight" filled type="number" v-model="goalWeight" label="Goal Weight" color="black" />
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
            <div v-if="error" class="error">
              <q-icon name="error" size="30px"></q-icon>
              <p>{{ errorMessage }}</p>
            </div>
            <q-btn @click="calc" push class="done" color="black" label="CALCULATE" size="22px"/>
          </div>
        </div>
        <div v-if="showResult && !error" class="results-date">
          <div class="date">
            <div class="start">
              <q-icon name="date_range" size="30px"></q-icon>
              <h5>Start Date</h5>
              <h4>{{ startDate }}</h4>
            </div>
            <div class="end">
              <q-icon name="date_range" size="30px"></q-icon>
              <h5>End Date</h5>
              <h4>{{ endDate }}</h4>
            </div>
          </div>
          <div class="results">
            <div class="bmr">
              <q-icon name="favorite" size="30px"/>
              <h5>BMR</h5>
              <h4>{{ Math.round(bmrResult) }}</h4>
              <h5>Calories</h5>
            </div>
            <div class="tdee">
              <q-icon name="local_fire_department" size="30px"/>
              <h5>TDEE</h5>
              <h4>{{ Math.round(tdeeResult) }}</h4>
              <h5>Calories</h5>
            </div>
            <div class="daily">
              <h5>Daily Calorie</h5>
              <h4>{{ Math.round(dailyCalorie) }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="black"
        navigation
        padding
        arrows
        height="300px"
        class="text-black shadow-5 rounded-borders">
        <q-carousel-slide name="bmr" class="column no-wrap flex-center">
          <h4>WHAT IS BMR?</h4>
          <p>{{ whatBmr  }}</p>
        </q-carousel-slide>
        <q-carousel-slide name="tdee" class="column no-wrap flex-center">
          <h4>WHAT IS TDEE?</h4>
          <p>{{ whatTdee  }}</p>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="calorie-footer">
      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Roboto+Slab:wght@500;900&display=swap');

.calorie .body {
  background: linear-gradient(45deg, #ffaaff, #fff9a3, #acfbff);
  background-size: 500% 500%;
  animation: grd 40s ease infinite;
  border-radius: 100px;
  margin-left: 10%;
  margin-right: 10%;
  border: 5px solid rgb(255, 255, 0);
  margin-top: 40px;
}

@keyframes grd {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.calorie .calorie-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
}

.calorie .calorie-body .inputs {
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  background-color: white;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
  border-radius: 20px;
}

.calorie .calorie-body .inputs .metric .metric-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.calorie .calorie-body .inputs .imperial .imperial-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.calorie .calorie-body .inputs .select-unit {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.calorie .calorie-body .inputs .button .error {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Slab', serif;
  border: 1px solid rgb(255, 55, 55);
  border-left: 10px solid rgb(255, 55, 55);
  border-right: 10px solid rgb(255, 55, 55);
  border-radius: 10px;
  color: rgb(255, 0, 0);
  width: 400px;
  text-align: center;
  gap: 10px;
}

.calorie .calorie-body .inputs .button .error p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.calorie .calorie-body .inputs .button .done {
  display: flex;
  margin-top: 20px;
  width: 400px;
}

.calorie .calorie-body .inputs .gender {
  display: flex;
  justify-content: center;
}

.calorie .results-date {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  padding: 40px;
  background-color: white;
  margin-bottom: 40px;
  font-family: 'Roboto Slab', serif;
  border-radius: 20px;
  border: 5px solid;
}

.calorie .results-date .date {
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 20px;
}

.calorie .results-date .date .start {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid;
  border-radius: 10px;
}

.calorie .results-date .date .end {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid;
  border-radius: 10px;
}

.calorie .results-date .date h4 {
  font-size: 24px;
}

.calorie .results-date .results .daily {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  gap: 10px;
  background-color: rgb(0, 0, 0);
  padding: 20px;
  color: rgb(255, 255, 255);
  border-radius: 10px;
}

.calorie .results-date .results .daily:hover{
  background-color: rgb(255, 255, 0);
  cursor: pointer;
}

.calorie .results-date .results .bmr {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid;
  border-radius: 10px;
}

.calorie .results-date .results .tdee {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: rgb(0, 0, 0);
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid;
  border-radius: 10px;
}

.calorie .results-date .results {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Roboto Slab', serif;
}

.calorie .results-date h4 {
  font-weight: bold;
  font-size: 30px;
}

.slide {
  margin: 10%;
  margin-left: 25%;
  margin-right: 25%;
}

.calorie .slide p {
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto Slab', serif;
  margin-top: 30px;
  text-align: center;
}

.calorie .slide h4 {
  font-size: 40px;
  font-weight: 900;
  font-family: 'Roboto Slab', serif;
  text-align: center;
}

@media (max-width: 1250px) {
  .calorie .calorie-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
  }

  .calorie .body {
    margin-left: 0%;
    margin-right: 0%;
  }
  .slide {
    margin: 10%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
