<template>
  <div class="PatientData">
      
    <b-table striped hover :items="items.data"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
   data () {
    return {
      items:[]
    }
  },

  mounted () {
    axios
      .get('https://www.snickies.com/thompson/admin/patients?key=lHKJCBuCrsxq8eux3QHywNL84QCWd5lKG046aBungs5')
      .then(response => {this.items = response.data});
  }

  
}
</script>

<style>
  .PatientData{
      margin-top: 120px;
  }
</style>
