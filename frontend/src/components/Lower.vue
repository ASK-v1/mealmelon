<script>
export default {
  name: 'Lower'
}
</script>

<template>
  <div class="lower">
    <div class="what">
      <div class="what_title">
        <h1>What can you do on mealmelon?</h1>
      </div>
      <div class="what_all">
        <div class="what_goal">
          <q-avatar color="yellow-7" text-color="white" size="150px">G</q-avatar>
          <h4>Goal</h4>
          <p>You can calculate daily calories and when you will reach your goal weight.</p>
        </div>
        <div class="what_diet">
          <q-avatar color="yellow-7" text-color="white" size="150px">D</q-avatar>
          <h4>Diet</h4>
          <p>You can choose popular diet plans such as vegan and ketogenic according to your needs and preferences.</p>
        </div>
        <div class="what_create">
          <q-avatar color="yellow-7" text-color="white" size="150px">C</q-avatar>
          <h4>Create</h4>
          <p>You can create your meals for the week in a few minutes and save your diet plan.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.lower {
  margin-top: 200px;
  background-image: linear-gradient(-45deg, #ffaaff 0%, #acfbff 100%);
  padding: 100px;
  border-top: 5px solid rgb(255, 255, 0);
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
}
.lower .what {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.lower .what .what_title {
  display: flex;
  justify-content: center;
}

.lower .what .what_title h1 {
  font-size: 45px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  color: rgba(0, 0, 0, 0.888);
}

.lower .what .what_all {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  font-family: 'Roboto Slab', serif;
  margin-left: 15%;
  margin-right: 15%;
}

.lower .what .what_all .what_goal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.lower .what .what_all .what_diet{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.lower .what .what_all .what_create{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.lower .what .what_all p {
  color: rgb(100, 100, 100);
  font-size: 20px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: center;
}

@media (max-width: 1100px) {
  .lower .what .what_all {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
