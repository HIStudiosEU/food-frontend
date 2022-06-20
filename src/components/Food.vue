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
    console.log('test')
  }
}
</script>

<style scoped>

</style>
