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
      foods: [
        {
          id: 1,
          name: 'Banane',
          kalos: 100,
          fat: 10,
          carbs: 3,
          proteins: 7
        },
        {
          id: 2,
          name: 'Apfel',
          kalos: 200,
          fat: 9,
          carbs: 2,
          proteins: 6
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
