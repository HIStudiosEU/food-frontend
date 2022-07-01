<template>
  <div class="hello">
    <div id="wrapper">
      <div id="eingabe">
        <h1>{{ msg }}</h1>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Name">
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Fett">
          <label for="floatingInput">Fett</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Kohlenhydrate">
          <label for="floatingInput">Kohlenhydrate</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Eiweiß">
          <label for="floatingInput">Eiweiß</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Gramm">
          <label for="floatingInput">Gramm</label>
        </div>
        <a id="foodbuttons">
        <div><button type="button" class="btn btn-primary" id="button" >Hinzufügen</button></div>
        <div><button type="button" class="btn btn-primary" id="button" >Speichern</button></div>
        </a>
      </div>
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
