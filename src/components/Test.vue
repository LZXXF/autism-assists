<template>
  <div class="PatientData">
    {{items}}
  </div>
</template>

<script>
import axios from 'axios';    
export default {  
  data () {
    return {
      items:null
    }
  },

  created () {
    axios
      .get('https://www.snickies.com/thompson/admin/patients?key=lHKJCBuCrsxq8eux3QHywNL84QCWd5lKG046aBungs5')
      .then(response => {this.items = response.data.firstname})
  }

}
</script>

<style>
  .PatientData{
      margin-top: 120px;
  }
</style>
