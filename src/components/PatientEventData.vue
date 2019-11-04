<template>
  <div>
    <div>
      <select v-model="SelectedPatient">
        <option disabled value=''>Please Select the Patient</option>
        <option v-for="patient in patients" :value="patient">{{patient}}</option> 
      </select> 
    </div>

    <div>
      <select v-model="SelectedDate">
        <option disabled value=''>Please Select the Date</option>
        <option v-for="d in dates" :value="d.index">{{d.date}}</option> 
      </select>
    </div> 

    
    
    

    

  </div>
</template>

<script>
import axios from 'axios';
export default {
   data () {
    return {
      SelectedDate: null,
      SelectedPatient: '',
      dates: [{"date": "2019-07-18",
                index: 1},
              {"date": "2019-07-19",
                index: 2},
              {"date": "2019-07-21",
                index: 3},
              {"date": "2019-07-22",
                index: 4},
              {"date": "2019-07-31",
                index: 5},
              {"date": "2019-09-12",
                index: 6}
              ],

      patients: ["5d2fe002f97602af0c8d5314"],
      items: []
    }
  },
  created () {
    axios
      .get('https://www.snickies.com/thompson/patient/events?key=lHKJCBuCrsxq8eux3QHywNL84QCWd5lKG046aBungs5&pid=5d2fe002f97602af0c8d5314')
      .then(response => {this.items = response.data.data})
  }
}
</script>

<style>
  
</style>
