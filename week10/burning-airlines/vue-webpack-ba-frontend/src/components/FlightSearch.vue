<template>
  <div>
    <h2>Search</h2>
    <div class="search-form">

      <label>Origin:</label>
      <select v-model="origin">
        <option>Please select</option>
        <option>SYD</option>
        <option>SFO</option>
        <option>SIN</option>
        <option>JFK</option>
      </select>

      <label>Destination:</label>
      <select v-model="destination">
        <option>Please select</option>
        <option>SYD</option>
        <option>SFO</option>
        <option>SIN</option>
        <option>JFK</option>
      </select>
      <button @click="submitSearch">Search Flights</button>

    </div>
  </div>
</template>


<script>
export default {
  // data: function(){
  // },
  data(){
    return {
      origin: 'SYD',
      destination: 'SFO',
    }
  },
  methods: {
    submitSearch(){
      // console.log(this.origin, this.destination);
      this.$router.push({
        name: 'searchResults',
        params: this.$data
      });


    }
  }
};
</script>


<style>
select{
  margin-right: 20px;
}
</style>
