<template>
  <div class="hello">
    <div id="wrapper">
      <div id="first">
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
    <button type="button" class="btn btn-primary" id="button" >Hinzufügen</button>
        <button type="button" class="btn btn-primary" id="button" >+</button>
      </div>
      <div id="second">
        <h1>Gericht</h1>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Name">
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Zutaten">
          <label for="floatingInput">Zutaten</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Kalorien">
          <label for="floatingInput">Kalorien</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Gramm">
          <label for="floatingInput">Gramm</label>
        </div>
        <button type="button" class="btn btn-primary">Hinzufügen</button>
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
#first {
  display: inline-block;
  width:120px;
  height:120px;

}
#second {
  vertical-align:top;
  display: inline-block;
  width:400px;
  height:160px;
  padding-left: 600px;
}
</style>
