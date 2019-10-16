<template>
  <div class="UserData">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: "Thunpisit Amnuaikiatloet", status: 'Joined', Role: 'Admin', Patients: 0 },
        { name: 'Kristin Sohl', status: 'Joined', Role: 'User', Patients: 15 },
        { name: 'Abby Powell', status: 'Pending', Role: 'User', Patients: 8 }
      ]
    }
  }
}
</script>

<style>
  .UserData{
      margin-top: 120px;
  }
</style>
