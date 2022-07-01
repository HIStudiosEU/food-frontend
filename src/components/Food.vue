<template>
  <h1 id="foodhead">Food</h1>

  <div class="foodlist" v-for="food in foods" :key="food.id">
    <div class="card" style="width: 18rem;float: left;">
      <div class="card-body">
        <h5 class="card-title">{{ food.name}}</h5>
        <p class="card-text">Kalorien:  {{ food.kalos}}</p>
        <p class="card-text">Fettt:  {{ food.fat}}</p>
        <p class="card-text">Kohlenhydrate  {{ food.carbs}}</p>
        <p class="card-text">Eiweiß  {{ food.proteins}}</p>
        <a href="#" class="card-link" style="float: right;">Löschen</a>
      </div>
      <div>   </div>
    </div>

  </div>

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
  padding-top: 10px;
}
</style>
