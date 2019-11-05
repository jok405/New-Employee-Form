<template>
  <div>
    <Login v-if="LoggedIn === false || LoggingIn === true"></Login>    
    <AddNewEmployee v-if="LoggedIn === true || LoggingIn === false"></AddNewEmployee>
  </div>
</template>

<script>
import axios from 'axios'
import store from './store'

import Login from './components/Login.vue'
import AddNewEmployee from './components/AddNewEmployee.vue'

import TeamMember from './models/TeamMember';

export default {
  data() {
    return {
      // ChosenTeamMemberChanged      
    }
  },

  created: function () {
    this.getTeamMembers();
  },

  store, 

  components: {
    Login,
    AddNewEmployee
    
  }, 

  computed: {
     LoggedIn: {
      get () {
        return this.$store.state.LoggedIn;
      },
      set (value) {
        // console.log /g(value);
        this.$store.commit('setLoggedIn', value);
      }
    },
    LoggingIn: {
      get () {
        return this.$store.state.LoggingIn;
      }
    },
  },

  methods: {
    getTeamMembers () {
      axios.get('http://localhost:3000/sql/apps')
      .then(res => {
        console.log(res.data);        
        TeamMember.insert( {data: res.data} );
        console.log(TeamMember.all());
        // console.log(store.state.entities.teamMembers);
        // console.log(this.$store.state.TeamMembers);
      })
      .catch(res => {
        alert(res);
      });
      
    }
  }, 
}
</script>

<style src="../static/css/bulma.css"></style>