<template>
  <div class="center" style="max-width: 600px"><hr>
    <p class="is-size-3" style="margin-bottom: 5px; text-align: center;">Welcome to the Employee Data App</p>
    <hr>
    <p class="is-size-3" style="margin-bottom: 10px; text-align: center;">Please Login</p>
    <input v-model="UserId" v-on:keyup.enter="Login" class="input" placeholder="Employee ID Number" style="margin-bottom: 10px">


    <!-- <input v-model="UserId" v-on:keyup.enter="Login" class="input" style="margin-bottom: 20px"> -->

    <div style="text-align: center;">    
      <button v-on:click="Login" class="button is-primary is-normal">Login</button>
      <!-- <button v-on:click="Login" class="button is-primary is-normal">New</button>       -->
    <!-- <p class="is-size-3" style="margin-bottom: 5px; text-align: center;">Please add New Employee</p> -->

    </div> 
  </div>
</template>

<script>
import TeamMember from '../models/TeamMember'
//import AddNewEmployee from '../models/NewEmployee'


export default {
  data () {
    return {
      
    }
  },  
  computed: {
    LoggedIn: {
    get () {
        return this.$store.state.LoggedIn
      },
      set (value) {
        console.log(value);
        this.$store.commit('LoggedIn', value);
      }
    },
    UserId: {
      get () {
        return this.$store.state.UserId
      },
      set (value) {
        console.log(value);
        this.$store.commit('setUserId', value);
      }
    }
  }, 
  methods: {
    Login () {
      // console.log('blah');
      // console.log(this.UserId);
      // console.log('blah');
      // console.log(TeamMember.all());      
      // console.log(TeamMember.find(this.UserId));
      if (TeamMember.find(this.UserId)) {        
        console.log(this.UserId);
        console.log(TeamMember);
        if (TeamMember.find(this.UserId).empID) {
          console.log(this.UserId);          
          this.$store.commit('setLoggedIn', true);
          this.$store.commit('setLoggingIn', false);
        }
        // if (TeamMember.find(this.UserId).empID) {
        //   console.log(this.UserId);          
        //   this.$store.commit('setLoggedIn', true);
        //   this.$store.commit('setLoggingIn', false);
        // }
      }         
      else {
        alert("Incorrect UserId");
        // console.log /g(this.UserId);        
      }                 
    },    
  }
}
</script>