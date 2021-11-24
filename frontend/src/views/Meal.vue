<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Meal',
  components: { Navbar, Footer }
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
          <h3>Automatic Meal Planner</h3>
        </div>
        <div class="middle">
          <div class="meal-number">
            <p>MEALS</p>
            <q-btn-toggle
              v-model="unit"
              class="meal-toggle"
              toggle-color="black"
              color="white"
              text-color="black"
              size="22px"
              :options="[
                {label: '2', value: '1'},
                {label: '3', value: 'ee2'},
                {label: '4', value: 'Mec'}]"
              />
          </div>
          <div class="diet-type">
            <p>DIET TYPES</p>
            <q-select
            outlined
            color="black"
            v-model="model"
            label=""
            :options="[
              {label: 'Flexible', value: '1'},
              {label: 'Low carb', value: '1'},
              {label: 'Low fat', value: 'ee2'},
              {label: 'Classic Bodybuilding', value: 'ee2'},
              {label: 'Ketogenic', value: 'Mec'}]"
            />
          </div>
          <div class="calorie">
            <p>CALORIES</p>
            <q-input class="calorie-input" outlined v-model="text" color="black" />
          </div>
          <q-btn class="calorie-not" to="/calorie" color="black" label="Not sure?" size="12px"/>
        </div>
        <div class="create-plan">
          <q-btn push rounded class="create-plan" color="black" text-color="white" label="CREATE MEAL PLAN" size="22px"/>
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
  margin-top: 2%;
  margin-bottom: 20%;
}

.meal .create::before {
  content: '';
  padding: 250px;
  width: 1250px;
  border-radius: 50px;
  background: linear-gradient( #ffaaffff, #ddaaffcc), url("../assets/create.jpg") no-repeat center / cover;
  border: 5px solid rgb(255, 255, 0);
}

.meal .create .content {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  z-index: 1;
  gap: 70px;
}

.meal .create .content .title h3 {
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
}

.meal .create .content .middle {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.555);
  gap: 20px;
}

.meal .create .content .middle .meal-number {
  width: 200px;
  text-align: center;
  background-color: white;
  font-weight: 900;
}

.meal .create .content .middle .diet-type {
  width: 200px;
  text-align: center;
  background-color: white;
  font-weight: 900;
}

.meal .create .content .middle .calorie {
  text-align: center;
  width: 100px;
  background-color: white;
  font-weight: 900;
}
.meal .create .content .middle .calorie-not{
  margin-top: 37px;
  padding: 17px;
}

.meal .create .content .middle .calorie .calorie-input {
  font-size: 30px;
}
</style>
