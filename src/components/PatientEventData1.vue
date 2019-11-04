<template>
  <div>
    <h3>Please Choose a Date to View Events Data for {{this.$route.params.first_name.charAt(0).toUpperCase() + this.$route.params.first_name.slice(1)}} {{this.$route.params.last_name.charAt(0).toUpperCase() + this.$route.params.last_name.slice(1)}} </h3>

    <!--
    <div>
      <select v-model="SelectedPatient">
          <option disabled value=''>Please Select the Patient</option>
          <option v-for="patient in patients" :value="patient">{{patient}}</option> 
      </select> 
    </div>
    -->

    <div style="text-align:center">
      <select v-model="SelectedDate" style="text-align-last:center">
          <option disabled value=''>Please Select the Date</option>
          <option v-for="d in getDates" :value="d.index">{{d.date}}</option> 
      </select>
    </div>  
    

    <div v-if="SelectedDate !== null && SelectedDate>=0">
      <h3 v-if="items[SelectedDate].activities"><b>Activities</b></h3>
      <b-table striped hover responsive :items="items[SelectedDate].activities"></b-table>
      <h3 v-if="items[SelectedDate].medicines"><b>Medicines</b></h3>
      <b-table striped hover responsive :items="items[SelectedDate].medicines"></b-table>
      <h3 v-if="items[SelectedDate].sleeps"><b>Sleeps</b></h3>
      <b-table striped hover responsive :items="items[SelectedDate].sleeps"></b-table>
    </div>

  </div>
    
</template>

<script>
import axios from 'axios';
export default {
   data () {
    return {
      SelectedDate: null,
      items: []
    }
  },

  computed: {
    getDates() {
      var dates = [];
      for (var i = 0; i < this.items.length; i++) {
        dates[i] = {date: this.items[i].created_date, index: i};
      }
      return dates;
    }
  },

  created () {
    var pid = this.$route.params.pid;
    var url = 'https://www.snickies.com/thompson/patient/events?key=lHKJCBuCrsxq8eux3QHywNL84QCWd5lKG046aBungs5&pid=' + pid;
    axios
      .get(url)
      .then(response => {this.items = response.data.data});
  }
}
</script>

<style>
  h3 {
    text-align: center;
    margin-top: 50px;
  }
  
</style>
