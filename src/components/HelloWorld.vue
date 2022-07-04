<template>
  <body>
  <div class="hello">
    <div id="wrapper">
      <form id="eingabetest" onsubmit="addfood()">
        <h1>{{ msg }}</h1>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" v-model="name" placeholder="Name">
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput" v-model="fat" placeholder="Fett">
          <label for="floatingInput">Fett</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput" v-model="carbs" placeholder="Kohlenhydrate">
          <label for="floatingInput">Kohlenhydrate</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput" v-model="proteins"  placeholder="Eiweiß">
          <label for="floatingInput">Eiweiß</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput" v-model="gramm" placeholder="Gramm">
          <label for="floatingInput">Gramm</label>
        </div>
        <div id="foodbuttons">
          <button type="submit" @click="fillfood" class="btn btn-primary btn-lg">Hinzufügen</button>
          <button id="speicherbutton" type="submit" @click="createFood" class="btn btn-secondary btn-lg">Speichern</button>
        </div>
      </form>
      <div id="tagesbedarf">
        <div>
          <h1 id="tagesbedarfhead">Tagesbedarf</h1>
          <ul class="list-group">
            <li class="list-group-item">Kalorien: {{fatfill*9+carbfill*4+proteinsfill*4}}</li>
            <li class="list-group-item">Fett: {{fatfill}}</li>
            <li class="list-group-item">Kohlenhydrate: {{carbfill}}</li>
            <li class="list-group-item">Eiweiß: {{proteinsfill}}</li>
          </ul>
          <div id="tbloeschen"><button type="submit" @click="deletefood" class="btn btn-primary" id="button" >Löschen</button></div>
        </div>
      </div>
    </div>
  </div>
  </body>

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
      kalories: '{{this.carbs*4+this.fat*9+this.proteins*4}}',
      gramm: '',
      fatfill: 0,
      carbfill: 0,
      proteinsfill: 0

    }
  },
  methods: {
    createFood () {
      console.log(this.name)
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
    },

    fillfood () {
      console.log(this.fatfill)
      this.fatfill = ((this.fatfill + this.fat) * this.gramm) / 100
      this.carbfill = ((this.carbfill + this.carbs) * this.gramm) / 100
      this.proteinsfill = ((this.proteinsfill + this.proteins) * this.gramm) / 100
    },

    deletefood () {
      console.log(this.fatfill)
      this.fatfill = 0
      this.carbfill = 0
      this.proteinsfill = 0
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
  -webkit-text-stroke: 1px #020202;
}

#tbloeschen{

  padding-top: 20px;
  padding-left: 200px;

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
#speicherbutton {

}
</style>
