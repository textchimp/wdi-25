<template>
  <div>
    <h3>Results</h3>

    <div class="container">

      <div class="row bg-primary text-white">
        <div class="col-4">Date</div>
        <div class="col-2">Flight</div>
        <div class="col-2">Plane</div>
        <div class="col-2">Origin</div>
        <div class="col-2">Destination</div>
      </div><!-- row -->


      <div class="row" v-if="results.length === 0">
        <div class="col-12">Loading...</div>
      </div>

      <div class="row flight-row" v-for="flight in results" @click="flightDetails( flight.id )">
        <div class="col-4">{{ flight.departure_date_formatted }}</div>
        <div class="col-2">{{ flight.flight_number }}</div>
        <div class="col-2">{{ flight.airplane.name }}</div>
        <div class="col-2">{{ flight.origin }}</div>
        <div class="col-2">{{ flight.destination }}</div>
      </div><!-- row -->

    </div><!-- container -->

  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['origin', 'destination'],
  data(){
    return {
      results: []
    };
  },
  methods: {
    flightDetails( id ){
      console.log('clicked!', id);
      this.$router.push({
        name: 'flightDetails',
        params: { flightID: id }
      });
    }
  },
  created(){

    axios.get('http://localhost:3000/flights/search.json', {
      params: {
        origin: this.origin,
        destination: this.destination
      }
    })
    .then( (response) => {
      // code to run when we have received the AJAX response:
      console.log('response:', response, this);
      // NOTE: We had to use an ES6 fat arrow function declaration to get the correct value of 'this'
      // (i.e. fat arrow functions prevent 'this' from being redefined, i.e. we get the value of 'this'
      // as it is in the surrounding context, the created() method)
      this.results = response.data;
    });

  }
};
</script>

<style>
.flight-row:hover{
  cursor: pointer;
  background-color: #EEEEEE;
}
</style>
