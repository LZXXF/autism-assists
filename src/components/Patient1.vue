<template>
  <div class="PatientData">
    <h1>{{patient}}</h1>
    <h2>{{ date }}</h2>
    <b>Activities</b> 
    <b-table striped hover :items="activities"></b-table>
    <br>
    <b>Medicines</b>
    <b-table striped hover :items="medicines"></b-table>
    <br>
    <b>Sleeps</b>
    <b-table striped hover :items="sleeps"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
   data () {
    return {
        date: "2019-07-18",
        patient: "Thomas Rhett",
        activities: [
            {"type":"medical","subtype":"diarrhea","rating":"null","rating_description":"🥵","comment":"He got a bad diarrhea because of dinner","latitude":"38.949554443359375","longitude":"-92.32727275218818"},
            {"type":"emotion","subtype":"angry","rating":"null","rating_description":"🙁","comment":"He’s a little angry because he can’t go to bed","latitude":"38.949554443359375","longitude":"-92.32727275218818"},
            {"type":"behavior","subtype":"self_harm","rating":"null","rating_description":"😫","comment":"He trying to harm himself but not that bad","latitude":"38.949462890625","longitude":"-92.32734942039325"}
        ],
        medicines: [{"name":"Immodium","strength":"1 Capsule","quantity":"1.0","time_of_day":"Before bed","comment":"Anti-diarrhea medicine","latitude":"38.949554443359375","longitude":"-92.32727317211953"}
        ],
        sleeps: [
            {"duration":"5.0","depth":"Light sleep","interuptions":"Yes","snoring":"Yes","time_to_sleep":"20.0","time_to_up":"5.0","comment":"He keep waking up at night","latitude":"38.949462890625","longitude":"-92.32734942039325"}
        ]    
    }
  }
}
</script>

<style>
  
</style>
