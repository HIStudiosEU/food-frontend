<template>
  <div class="hello">
    <div id="wrapper">
      <form id="eingabe" onsubmit="addfood()">
        <h1>{{ msg }}</h1>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" v-model="name" placeholder="Name">
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" v-model="fat" placeholder="Fett">
          <label for="floatingInput">Fett</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" v-model="carbs" placeholder="Kohlenhydrate">
          <label for="floatingInput">Kohlenhydrate</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" v-model="proteins"  placeholder="Eiweiß">
          <label for="floatingInput">Eiweiß</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Gramm">
          <label for="floatingInput">Gramm</label>
        </div>
        <div id="foodbuttons">
          <button type="button" class="btn btn-primary btn-lg">Hinzufügen</button>
          <button type="submit" @click.prevent="createFood" class="btn btn-secondary btn-lg">Speichern</button>
        </div>
      </form>
      <div id="tagesbedarf">
        <div>
          <h1 id="tagesbedarfhead">Tagesbedarf</h1>
          <ul class="list-group">
            <li class="list-group-item">Kalorien: 2000</li>
            <li class="list-group-item">Fett: 100</li>
            <li class="list-group-item">Kohlenhydrate: 500</li>
            <li class="list-group-item">Eiweiß: 600</li>
          </ul>
          <div id="tbloeschen"><button type="button" class="btn btn-primary" id="button" >Löschen</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      name: '',
      carbs: '',
      fat: '',
      proteins: '',
      kalories: '{{this.carbs*4+this.fat*9+this.proteins*4}}'
    }
  },
  methods: {
    createFood () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        name: this.name,
        carbs: this.carbs,
        fat: this.fat,
        proteins: this.proteins
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('https://kalorientracker-webtech.herokuapp.com/api/v1/food', requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#floatingInput{
  width: 500px;
}
#button{

}
#wrapper {

}
#eingabe {
  display: inline-block;
  width:120px;
  height:120px;
  padding-top: 10px;
  padding-left: 10px;
}
#tagesbedarf {
  padding-top: 110px;
  vertical-align:top;
  display: inline-block;
  padding-left: 550px;
  height: 1000px;
  width: 1050px;
}

#foodbuttons{
  float: left;
  display: table;
}

#tagesbedarfhead{
  padding-left: 130px;
  padding-bottom: 10px;
}

#tbloeschen{

  padding-top: 20px;
  padding-left: 200px;

}
</style>
