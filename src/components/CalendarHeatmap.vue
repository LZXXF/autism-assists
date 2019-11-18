<template>
  <div>
    <div>
      <h1>Medical Activity</h1>
      <calendar-heatmap :values="MedicalData" :end-date="EndDate"/>
    </div>

    <div>
      <h1>Emotion Activity</h1>
      <calendar-heatmap :values="EmotionData" :end-date="EndDate"/>
    </div>

    <div>
      <h1>Behavior Activity</h1>
      <calendar-heatmap :values="BehaviorData" :end-date="EndDate"/>
    </div>

  </div>
    
</template>

<script>
    
import axios from 'axios';
export default {
   data () {
    return {
      items: [],
      end: "2019-11-10"
    }
  },

  computed: {
    MedicalData() {
      var medical = [];
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].activities) { 
          var d = this.items[i].created_date;
          var activities = this.items[i].activities;
          var medicalCount = 0;
          for (var j = 0; j < activities.length; j++) {
              if (activities[j].type == "medical") {
                  medicalCount = medicalCount + 1
              }
          }
          if (medicalCount > 0) {
            medical.push({date:d, count:medicalCount});
          }
        }
      }
      return medical;
    },

    EmotionData() {
      var emotion = [];
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].activities) { 
          var d = this.items[i].created_date;
          var activities = this.items[i].activities;
          var emotionCount = 0;
          for (var j = 0; j < activities.length; j++) {
              if (activities[j].type == "emotion") {
                  emotionCount = emotionCount + 1
              }
          }
          if (emotionCount > 0) {
            emotion.push({date:d, count:emotionCount});
          }
        }
      }
      return emotion;
    },

    BehaviorData() {
      var behavior = [];
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].activities) { 
          var d = this.items[i].created_date;
          var activities = this.items[i].activities;
          var behaviorCount = 0;
          for (var j = 0; j < activities.length; j++) {
              if (activities[j].type == "behavior") {
                  behaviorCount = behaviorCount + 1
              }
          }
          if (behaviorCount > 0) {
            behavior.push({date:d, count:behaviorCount});
          }
        }
      }
      return behavior;
    },

    EndDate() {
      var myDate = new Date();
      var month = ('0' + (myDate.getMonth() + 1)).slice(-2);
      var date = Number(('0' + myDate.getDate()).slice(-2)) + 1 ;
      var year = myDate.getFullYear();
      var formattedDate = year + '-' + month + '-' + date;
      return formattedDate;
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
