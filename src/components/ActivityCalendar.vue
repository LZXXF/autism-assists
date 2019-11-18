<template>
  <div>
    <div id="myheatMap">
      This is a test
    </div>
  </div>
</template>




<script>
    import jQuery from 'jquery';
    window.jQuery = window.$ = jQuery;
    import $ from 'jquery';
    import {github_graph} from '../assets/github_contribution.js';
    
    
    export default {

      methods: {
        
      },
      
      created() {
        $('#myHeatMap').github_graph( {
            //Generate random entries from 50-> 200 entries
            data: [1554415560251, 1554426680252, 1554415670253, 1573589137803],
            texts: ['completed task','completed tasks']
          });
      }
    }
    
</script>

<style>
  
</style>
