<template>
  <body>
  <h1 id="foodhead">Food</h1>
  <div class="foodlist" v-for="food in foods" :key="food.id">
    <div class="card" style="width: 18rem;float: left;">
      <div class="card-body">
        <h5 class="card-title">{{ food.name}}</h5>
        <p class="card-text">Kalorien:  {{food.fat*9+food.carbs*4+food.proteins*4}}</p>
        <p class="card-text">Fett:  {{ food.fat}}</p>
        <p class="card-text">Kohlenhydrate  {{ food.carbs}}</p>
        <p class="card-text">Eiweiß  {{ food.proteins}}</p>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'Food-comp',
  data () {
    return {
      foods: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://kalorientracker-webtech.herokuapp.com/api/v1/food', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(food => {
        this.foods.push(food)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
#foodhead{
  padding-left:10px;
  padding-top: 20px;
}
body {
  background-image: url('https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=2000');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 90%;
}
h1 {
  color: azure;
}
.card {
  background-image: url('https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=2000');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 90%;
}
p {
  color: azure;
  -webkit-text-stroke: 1px #020202;
}
h5 {
  color: azure;
  -webkit-text-stroke: 1px #020202;
}
</style>
