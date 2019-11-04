<template>
  <div class="UserData">
    <b-table striped hover responsive :fields="fields" :items="items" responsive="sm">

      <template v-slot:cell()="data">
        {{ data.value}}
      </template>

      <!-- A virtual created column -->
      <template v-slot:cell(patient)="data">
        {{ data.item.patients.length}}
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      fields: ['firstname',
               'lastname',
               'active', 
               'role', 
               {key: 'patient', label: 'Num of Patient'}],
      items: []
    }
  },

  computed: {
    patient: function () {
      // `this` points to the vm instance
      return 2
    }
  },

  mounted () {
    axios
      .get('https://www.snickies.com/thompson/user/info?key=lHKJCBuCrsxq8eux3QHywNL84QCWd5lKG046aBungs5')
      .then(response => {this.items.push(response.data.data)});
  }
}
</script>

