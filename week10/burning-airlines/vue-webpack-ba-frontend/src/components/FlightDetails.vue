<template>
<div>

  <div class="container">
  <div class="row">
    <div class="col"><h3>Flight Details</h3></div>
  </div>
  <div class="row">
    <div class="col-3">Flight Number</div><div class="col-6">{{ flight.flight_number }}</div>
  </div>
  <div class="row">
    <div class="col-3">Date</div><div class="col-6">{{ flight.departure_date_formatted }}</div>
  </div>
  <div class="row">
    <div class="col-3">Route</div><div class="col-6">{{ flight.origin }} &#x21E8; {{ flight.destination }}</div>
  </div>
</div>

<div v-if="flight.airplane">
  <div class="plane-row" v-for="row in flight.airplane.rows">

    <div class="label text-center">{{ row }}</div>

    <div
      v-for="col in flight.airplane.cols"
      class="plane-seat text-center"
      :class="seatStatus(row, col)">

      {{ col | toSeatLetter }}

    </div>

    <div class="label text-center">{{ row }}</div>

    </div>

  </div>
</div>


  <!-- <pre>
    {{ $data }}
  </pre> -->
</div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['flightID'],
  data(){
    return {
      flight: {}
    };
  },
  methods: {
    seatStatus(r, c){
      let found = false;
      this.flight.reservations.forEach( res => {
        if( r === res.row && c === res.col ){
          found =  "occupied";
        }
      });

      return found || "free";

    }
  },
  created(){
    const getFlight = () => {
      axios.get(`http://localhost:3000/flights/${ this.flightID }.json`)
      .then( response => this.flight = response.data );
    };
    getFlight();
    setInterval(getFlight, 2000); // poll the server for reservation changes
  },
  filters: {
    toSeatLetter( val ){
      return String.fromCharCode( 64 +  parseInt(val) );
    }
  }
}
</script>

<style>
.plane-row{
  min-width: 500px;
}
.plane-row .label{
  padding: 10px;
  display: inline-block;
  width: 60px !important;
  height: 60px !important;
  font-weight: bold;
}
.plane-seat{
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #CCCCCC;
  margin-right: 6px;
  margin-bottom: 6px;
  cursor: pointer;

}
.plane-seat.free{
  background-color: green;
}
.plane-seat.occupied{
  background-color: red;
}
</style>
