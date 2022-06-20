<template>
  <h1>Food</h1>
  <div class="foodlist" v-for="food in foods" :key="food.id">
    <div>Name: </div>
    <div class="foodname">{{ food.name}}</div>
    <div>Kalorien: </div>
    <div class="foodkalos">{{ food.kalos}}</div>
    <div>Fett: </div>
    <div class="foodfat">{{ food.fat}}</div>
    <div>Kohlenhydrate: </div>
    <div class="foodcarbs">{{ food.carbs}}</div>
    <div>Eiweiß: </div>
    <div class="foodproteins">{{ food.proteins}}</div>
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
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
