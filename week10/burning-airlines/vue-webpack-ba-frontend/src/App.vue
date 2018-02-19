<template>
  <div id="app">

    <div class="container top">

      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <h1>BUUUUUURNIIIIING AIIIIIRLIIIINES</h1>
        </div>
        <div class="col-1"></div>
      </div><!-- row -->


      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">

          <!-- yield -->
          <router-view/>

        </div>
        <div class="col-1"></div>
      </div><!-- row -->




    </div><!-- container -->


  </div><!-- app -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
