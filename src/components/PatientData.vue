<template>
  <div class="PatientData">
    <b-table striped hover responsive :items="items" :fields="fields">

      <template v-slot:cell()="data">
        {{ data.value}}
      </template>
      <a>View Patient Event</a>
    </b-table>
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
