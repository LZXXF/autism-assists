<template>
  <div>
    <h3>Please Choose a Start Date for Sleep Charts for {{this.$route.params.first_name.charAt(0).toUpperCase() + this.$route.params.first_name.slice(1)}} {{this.$route.params.last_name.charAt(0).toUpperCase() + this.$route.params.last_name.slice(1)}} </h3>

    <div style="text-align:center">
      <select v-model="StartDate" style="text-align-last:center">
          <option disabled value=''>Please Select the Start Date</option>
          <option v-for="d in chartsData" :value="d.index">{{d.date}}</option> 
      </select>
    </div>

    <h3>Please Choose a End Date for Sleep Charts for {{this.$route.params.first_name.charAt(0).toUpperCase() + this.$route.params.first_name.slice(1)}} {{this.$route.params.last_name.charAt(0).toUpperCase() + this.$route.params.last_name.slice(1)}} </h3>


    <div style="text-align:center">
      <select v-model="EndDate" style="text-align-last:center">
          <option disabled value=''>Please Select the End Date</option>
          <option v-for="d in chartsData" :value="d.index">{{d.date}}</option> 
      </select>
    </div>    

    <div v-if="StartDate !== null && EndDate !== null">
      <ve-histogram :data="chartData" :settings="chartSettints"></ve-histogram>
    </div>

  </div>
    
</template>

<script>
import axios from 'axios';
export default {
   data () {
    return {
      StartDate: null,
      EndDate: null,
      items: [],
      chartSettints: {
       yAxisType: ['Hour'],
       yAxisName: ['Duration']
      },
      chartData: {
        columns: ['date', 'light sleep', 'rem sleep', 'deep sleep'],
        rows: []
      }
    }
  },

  computed: {
    chartsData() {
      var row = [];
      var count = 0;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].sleeps) {
          var light_sleep = 0;
          var rem_sleep = 0;
          var deep_sleep = 0;
          if (this.items[i].sleeps[0].depth === 'Light sleep') {
              light_sleep = this.items[i].sleeps[0].duration;
          }
          if (this.items[i].sleeps[0].depth === 'REM sleep') {
              rem_sleep = this.items[i].sleeps[0].duration;
          }
          if (this.items[i].sleeps[0].depth === 'Deep sleep') {
              deep_sleep = this.items[i].sleeps[0].duration;
          }
          row[count] = {'date': this.items[i].created_date, 
                        'light sleep': light_sleep,
                        'rem sleep': rem_sleep,
                        'deep sleep': deep_sleep,
                        'index': count};
          count = count + 1;
        }
      }

      if (this.StartDate !== null && this.EndDate !== null) {
         var selectedData = [];
         var index = 0;
         for (var j = this.StartDate; j <= this.EndDate; j++) {
           selectedData[index] = row[j];
           index = index + 1;
         }
         this.chartData.rows = selectedData;
      }
      return row;
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
