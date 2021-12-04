<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { flexible, lowCarb, lowFat, ketogenic } from '../../food-data'

export default {
  name: 'Meal',
  components: { Navbar, Footer },
  data () {
    return {
      optionsTypes: ['Flexible', 'Low Carb', 'Low Fat', 'Ketogenic'],
      period: ['Breakfast', 'Lunch', 'Dinner'],
      dietTypes: 'Flexible',
      numberOfMeals: 2,
      totalCalories: 2000,
      tolerance: 50,
      oneCalories: Number,
      foods: [],
      meals: [],
      calories: Number,
      protein: Number,
      fats: Number,
      carbs: Number,
      first: Number,
      second: Number,
      third: Number,
      error: false,
      success: false
    }
  },
  methods: {
    randThree (max) {
      do {
        this.first = Math.floor(Math.random() * max)
        this.second = Math.floor(Math.random() * max)
        this.third = Math.floor(Math.random() * max)
      } while (this.first === this.second || this.first === this.third || this.second === this.third)
    },
    randTwo (max) {
      do {
        this.first = Math.floor(Math.random() * max)
        this.second = Math.floor(Math.random() * max)
      } while (this.first === this.second)
    },
    check () {
      if ((this.totalCalories < 1500) || (this.totalCalories > 3000)) return false
      return true
    },
    checkCalorie () {
      if (!this.check()) {
        this.error = true
        this.success = false
      } else {
        this.error = false
        this.success = true
      }
    },
    oneMeal () {
      this.oneCalories = Math.round(this.totalCalories / this.numberOfMeals)
    },
    getFoods () {
      if (this.check()) {
        if (this.dietTypes === 'Flexible') {
          this.foods = flexible.filter(meals => ((meals.calories < this.oneCalories + this.tolerance) && (meals.calories > this.oneCalories - this.tolerance)))
        } else if (this.dietTypes === 'Low Carb') {
          this.foods = lowCarb.filter(meals => ((meals.calories < this.oneCalories + this.tolerance) && (meals.calories > this.oneCalories - this.tolerance)))
        } else if (this.dietTypes === 'Low Fat') {
          this.foods = lowFat.filter(meals => ((meals.calories < this.oneCalories + this.tolerance) && (meals.calories > this.oneCalories - this.tolerance)))
        } else if (this.dietTypes === 'Ketogenic') {
          this.foods = ketogenic.filter(meals => ((meals.calories < this.oneCalories + this.tolerance) && (meals.calories > this.oneCalories - this.tolerance)))
        }
      }
    },
    getMeals () {
      if (this.check()) {
        if (this.numberOfMeals === 2) {
          this.randTwo(this.foods.length)
          this.meals = [this.foods[this.first], this.foods[this.second]]
          this.totalMacroTwo()
        }
        if (this.numberOfMeals === 3) {
          this.randThree(this.foods.length)
          this.meals = [this.foods[this.first], this.foods[this.second], this.foods[this.third]]
          this.totalMacroThree()
        }
      }
    },
    totalMacroTwo () {
      if (this.check()) {
        this.calories = this.meals[0].calories + this.meals[1].calories
        this.protein = this.meals[0].protein + this.meals[1].protein
        this.carbs = this.meals[0].carbs + this.meals[1].carbs
        this.fats = this.meals[0].fat + this.meals[1].fat
      }
    },
    totalMacroThree () {
      if (this.check()) {
        this.calories = this.meals[0].calories + this.meals[1].calories + this.meals[2].calories
        this.protein = this.meals[0].protein + this.meals[1].protein + this.meals[2].protein
        this.carbs = this.meals[0].carbs + this.meals[1].carbs + this.meals[2].carbs
        this.fats = this.meals[0].fat + this.meals[1].fat + this.meals[2].fat
      }
    },
    create () {
      this.checkCalorie()
      this.oneMeal()
      this.getFoods()
      this.getMeals()
    }
  }
}
</script>

<template>
  <div class="meal">
    <div class="meal-navbar">
      <Navbar />
    </div>
    <div class="create">
      <div class="content">
        <div class="title">
          <h3>Meal Planner</h3>
          <h5>Free diet plans for weight loss and weight gain.</h5>
          <h5>Create your meal plan right here in seconds.</h5>
        </div>
        <div class="middle">
          <div class="meal-number">
            <p>MEALS</p>
            <q-btn-toggle
              rounded
              v-model="numberOfMeals"
              class="meal-toggle"
              toggle-color="black"
              color="white"
              text-color="black"
              size="22px"
              :options="[
                {label: '2', value: 2},
                {label: '3', value: 3}]"
              />
          </div>
          <div class="diet">
            <p>DIET TYPES</p>
            <q-select
            class="diet-type"
            outlined
            rounded
            color="black"
            v-model="dietTypes"
            :options="optionsTypes"
            />
          </div>
          <div class="calorie">
            <p>CALORIES</p>
            <q-input rounded class="calorie-input" outlined v-model="totalCalories" color="black" />
          </div>
          <q-btn rounded class="calorie-not" to="/calorie" color="black" label="Not sure?" size="12px"/>
        </div>
        <div class="create-plan">
          <q-btn push @click="create" class="create-plan" color="black" text-color="white" label="CREATE MEAL PLAN" size="22px"/>
        </div>
      </div>
    </div>
    <div class="meal-error">
      <div v-if="error" class="error">
        <q-icon name="error" size="30px"></q-icon>
        <p>Please enter between 1500 and 3000 calories.</p>
      </div>
    </div>
    <div v-if="success" class="macro-result">
      <div class="macro">
        <div class="macro-calories">
          <h5>Calories</h5>
          <h5>{{ calories }}</h5>
        </div>
        <div class="macro-protein">
          <h5>Protein</h5>
          <h5>{{ protein }}g</h5>
        </div>
        <div class="macro-carbs">
          <h5>Carbs</h5>
          <h5>{{ carbs }}g</h5>
        </div>
        <div class="macro-fats">
          <h5>Fats</h5>
          <h5>{{ fats }}g</h5>
        </div>
      </div>
      <div class="result">
        <div v-for="(meal, index) in meals" :key="index" class="meal-result">
          <div class="food-avatar_meal-title">
            <div class="meal-title">
              <h4>{{period[index]}}</h4>
            </div>
            <div class="food-avatar">
              <img src="../assets/images/avatar.png">
            </div>
          </div>
          <div class="calorie-macro_food-name">
            <div class="food-name">
              <h5>{{ meal.name }}</h5>
            </div>
            <div class="calorie-macro">
              <div class="calorie">
                <h5>Calories</h5>
                <p>{{ meal.calories }}</p>
              </div>
              <div class="protein">
                <h5>Protein</h5>
                <p>{{ meal.protein }}g</p>
              </div>
              <div class="fat">
                <h5>Fat</h5>
                <p>{{ meal.fat }}g</p>
              </div>
              <div class="carbs">
                <h5>Carbs</h5>
                <p>{{ meal.carbs }}g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="meal-footer">
      <Footer />
    </div>
  </div>
</template>

<style>
.meal .create {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.meal .create::before {
  content: '';
  padding: 250px;
  width: 1250px;
  border-radius: 50px;
  background: linear-gradient( #ffaaffdd, #ddaaffdd), url("../assets/images/create.jpg") no-repeat center / cover;
}

.meal .create .content {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  gap: 50px;
  color: white;
}

.meal .create .content .title h3 {
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
}

.meal .create .content .title h5 {
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  text-align: center;
}

.meal .create .content .create-plan {
  border-radius: 10px;
  font-weight: 900;
}

.meal .create .content .middle {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.555);
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}

.meal .create .content .middle .meal-number {
  width: 200px;
  text-align: center;
  background-color: white;
  font-weight: 900;
}

.meal .create .content .middle .diet {
  width: 200px;
  text-align: center;
  background-color: white;
  font-weight: 900;
}

.meal .create .content .middle .diet .diet-type {
  font-size: 22px;
}

.meal .create .content .middle .calorie {
  text-align: center;
  width: 100px;
  background-color: white;
  font-weight: 900;
}

.meal .create .content .middle .calorie-not {
  margin-top: 37px;
  padding: 17px;
}

.meal .create .content .middle .calorie .calorie-input {
  font-size: 22px;
}

.meal .meal-error {
  display: flex;
  justify-content: center;
  align-items: center;
}

.meal .meal-error .error {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
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

.meal .meal-error .error p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.meal .macro-result {
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

.meal .macro-result .macro {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 5px solid;
}

.meal .macro-result .macro h5 {
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: 'Mochiy Pop One', sans-serif;
  font-size: 1.5rem;
}

.meal .macro-result .macro .macro-calories {
  background-color: rgb(100, 255, 100);
  padding: 20px;
  padding-left: 30px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.meal .macro-result .macro .macro-protein {
  background-color: rgb(255, 100, 100);
  padding: 20px;
}

.meal .macro-result .macro .macro-carbs {
  background-color: rgb(255, 255, 100);
  padding: 20px;
}

.meal .macro-result .macro .macro-fats {
  background-color: rgb(255, 100, 255);
  padding: 20px;
  padding-right: 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.meal .macro-result .meal-result {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  padding: 15px;
  border-radius: 20px;
  gap: 30px;
}

.meal .macro-result .meal-result .food-avatar_meal-title {
  display: flex;
  flex-direction: row;
}

.meal .macro-result .meal-result .food-avatar_meal-title .meal-title {
  color: rgba(0, 0, 0, 0.555);
  transform: rotate(-90deg);
  font-family: 'Mochiy Pop One', sans-serif;
}

.meal .macro-result .meal-result .food-avatar_meal-title .meal-title h4 {
  font-weight: bolder;
  font-size: 1.25rem;
}

.meal .macro-result .meal-result .calorie-macro_food-name .food-name h5 {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.888);
}

.meal .macro-result .meal-result .food-avatar_meal-title .food-avatar img {
  width: 100px;
}

.meal .macro-result .meal-result .calorie-macro_food-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.meal .macro-result .meal-result .calorie-macro {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
}

.meal .macro-result .meal-result .calorie-macro h5 {
  font-weight: bolder;
  color: rgba(0, 0, 0, 0.888);
}

.meal .macro-result .meal-result .calorie-macro .calorie p {
  font-size: 1.2rem;
  font-weight: 500;
  color: green;
}

.meal .macro-result .meal-result .calorie-macro .protein p {
  font-size: 1.2rem;
  font-weight: 500;
  color: red;
}

.meal .macro-result .meal-result .calorie-macro .fat p {
  font-size: 1.2rem;
  font-weight: 500;
  color: orange;
}

.meal .macro-result .meal-result .calorie-macro .carbs p {
  font-size: 1.2rem;
  font-weight: 500;
  color: purple;
}

.meal .meal-footer {
  margin-top: 300px;
}
</style>
