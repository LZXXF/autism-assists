<template>
  <div class="PatientData">
    <table class="table table-hover">
      <thead>
        <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Nickname</th>
            <th scope="col">Gender</th>
            <th scope="col">Blood</th>
            <th scope="col">Doctor</th>
            <th scope="col">Active</th> 
            <th scope="col"></th>
        </tr>
      </thead>

      <tbody>
          <tr v-for="(item, idx) in items" v-bind:key="item">
              <td> {{ item.firstname.charAt(0).toUpperCase() + item.firstname.slice(1) }} </td>
              <td> {{ item.lastname.charAt(0).toUpperCase() + item.lastname.slice(1) }} </td>
              <td> {{ item.nickname.charAt(0).toUpperCase() + item.nickname.slice(1)}} </td>
              <td> {{ item.gender.charAt(0).toUpperCase() + item.gender.slice(1) }} </td>
              <td> {{ item.blood }} </td>
              <td> {{ item.doctor }} </td>
              <td> {{ item.active }} </td>
              <td><router-link :to = "'/PatientEventData/' + item._id + '/' + item.firstname + '/' + item.lastname">View Events Data</router-link></td>
              <td><router-link :to = "'/SleepCharts/' + item._id + '/' + item.firstname + '/' + item.lastname">View Sleep Charts</router-link></td>

              <!--
              <td><router-link to = "/Params/123">params</router-link></td>
              <td><a :href = "'/#/PatientEventData?patientId=' + item._id">View Events Data</a></td>
              -->
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {  
   data () {
    return {
      fields: ["firstname", "lastname", "nickname", "gender", "identification", "dob", "blood", "institution",
               "doctor", "active", "consent"],
      items:[]
    }
  },

  mounted () {
    axios
      .get('https://www.snickies.com/thompson/admin/patients?key=lHKJCBuCrsxq8eux3QHywNL84QCWd5lKG046aBungs5')
      .then(response => {this.items = response.data.data});
  }

  
}
</script>

<style>
  
</style>
