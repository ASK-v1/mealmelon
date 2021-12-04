<script>
export default {
  name: 'Lower'
}
</script>

<template>
  <div class="lower">
    <div class="what">
      <div class="what-title">
        <h1>What can you do on mealmelon?</h1>
      </div>
      <div class="what-all">
        <div class="what-goal">
          <q-avatar color="yellow-7" text-color="white" size="150px">G</q-avatar>
          <h4>Goal</h4>
          <p>You can calculate daily calories<br> and when you will reach<br> your goal weight.</p>
        </div>
        <div class="what-diet">
          <q-avatar color="yellow-7" text-color="white" size="150px">D</q-avatar>
          <h4>Diet</h4>
          <p>You can choose popular diet plans such as low<br> carb and ketogenic according to your <br>needs and preferences.</p>
        </div>
        <div class="what-create">
          <q-avatar color="yellow-7" text-color="white" size="150px">C</q-avatar>
          <h4>Create</h4>
          <p>You can create your daily<br> meals in a few<br> minutes.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.lower .what {
  margin-top: 200px;
  background: linear-gradient(45deg, #ffaaff, #fff9a3, #acfbff);
  background-size: 500% 500%;
  animation: grd 40s ease infinite;
  padding: 100px;
  border-top: 5px solid rgb(255, 255, 0);
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
}

@keyframes grd {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.lower .what {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.lower .what .what-title {
  display: flex;
  justify-content: center;
}

.lower .what .what-title h1 {
  font-size: 45px;
  font-weight: 700;
  font-family: 'Mochiy Pop One', sans-serif;
  color: rgba(0, 0, 0, 0.888);
}

.lower .what .what-all {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  font-family: 'Roboto Slab', serif;
}

.lower .what .what-all .what-goal, .lower .what .what-all .what-diet, .lower .what .what-all .what-create{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.lower .what .what-all p {
  color: rgb(100, 100, 100);
  font-size: 20px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: center;
}

@media (max-width: 1100px) {
  .lower .what .what-all {
    display: flex;
    flex-direction: column;
  }
}
</style>
