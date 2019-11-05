<template>
  <div class="center" style="max-width: 600px"><hr>

    <p class="is-size-3" style="margin-bottom: 5px; text-align: center;">Employee Search</p>
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;"></p>
    <input v-model="TeamMemberID" v-on:keyup.enter="searchEmployeeId(TeamMemberID)" placeholder="Employee ID Number" class="input" style="margin-bottom: 10px">
    <button v-on:click="searchEmployeeId(empID)" class="button is-primary is-normal">Search Employee ID</button>
    <hr>

    <p class="is-size-3" style="margin-bottom: 5px; text-align: center;">New Employee Data Entry</p>
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">First Name</p>
    <input v-model="FirstName" placeholder="First Name" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Last Name</p>
    <input v-model="LastName" placeholder="Last Name" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Company Code</p>
    <input v-model="CompanyCode" placeholder="Company Code" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Shift</p>
    <input v-model="Shift" placeholder="Shift" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Hourly Pay Rate</p>
    <input v-model="HourlyPayRate" placeholder="Hourly Pay Rate" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Job Title Code</p>
    <input v-model="JobTitleCode" placeholder="Job Title Code" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Job Title Description</p>
    <input v-model="JobTitleDescription" placeholder="Job Title Description" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Home Department Code</p>
    <input v-model="HomeDepartmentCode" placeholder="Home Department Code" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Home Department Description</p>
    <input v-model="HomeDepartmentDescription" placeholder="Home Department Description" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Active</p>
    <input v-model="Active" placeholder="Active" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Supervisor</p>
    <input v-model="Supervisor" placeholder="Supervisor" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Email</p>
    <input v-model="Email" placeholder="Email" class="input" style="margin-bottom: 10px">
    <p class="is-size-3" style="margin-bottom: 5px; text-align: left;">Photo</p>
    <input v-model="Photo" placeholder="Add Image File" class="input" style="margin-bottom: 10px">

    <div style="text-align: center;">    
      <button v-on:click="addNewEmployee" class="button is-primary is-normal">Add New Employee</button>
    </div> 
  </div>
</template>

<script>
import TeamMember from '../models/TeamMember'

import axios from 'axios'


export default {
  data () {
    return {
      
    }
  },  
  computed: {
    // LoggedIn: {
    // get () {
    //     return this.$store.state.LoggedIn
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('LoggedIn', value);
    //   }
    // },

    FirstName: {
      get () {
        console.log(this.$store.state.FirstName);
        return this.$store.state.FirstName;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setFirstName', value);
      }
    },
    LastName: {
      get () {
        console.log(this.$store.state.LastName);
        return this.$store.state.LastName;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setLastName', value);
      }
    },
    CompanyCode: {
      get () {
        console.log(this.$store.state.CompanyCode);
        return this.$store.state.CompanyCode;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setCompanyCode', value);
      }
    },
    Shift: {
      get () {
        console.log(this.$store.state.Shift);
        return this.$store.state.Shift;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setShift', value);
      }
    },
    HourlyPayRate: {
      get () {
        console.log(this.$store.state.HourlyPayRate);
        return this.$store.state.HourlyPayRate;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setHourlyPayRate', value);
      }
    },
    JobTitleCode: {
      get () {
        console.log(this.$store.state.JobTitleCode);
        return this.$store.state.JobTitleCode;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setJobTitleCode', value);
      }
    },
    JobTitleDescription: {
      get () {
        console.log(this.$store.state.JobTitleDescription);
        return this.$store.state.JobTitleDescription;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setJobTitleDescription', value);
      }
    },
    HomeDepartmentCode: {
      get () {
        console.log(this.$store.state.HomeDepartmentCode);
        return this.$store.state.HomeDepartmentCode;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setHomeDepartmentCode', value);
      }
    },
    HomeDepartmentDescription: {
      get () {
        console.log(this.$store.state.HomeDepartmentDescription);
        return this.$store.state.HomeDepartmentDescription;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setHomeDepartmentDescription', value);
      }
    },
    Active: {
      get () {
        console.log(this.$store.state.Active);
        return this.$store.state.Active;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setActive', value);
      }
    },
    Supervisor: {
      get () {
        console.log(this.$store.state.Supervisor);
        return this.$store.state.Supervisor;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setSupervisor', value);
      }
    },
    Email: {
      get () {
        console.log(this.$store.state.Email);
        return this.$store.state.Email;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setEmail', value);
      }
    },
    Photo: {
      get () {
        console.log(this.$store.state.Photo);
        return this.$store.state.Photo;
      },
      set (value) {
        console.log(value);
        this.$store.commit('setPhoto', value);
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
    },
    TeamMemberID: {
      get () {
        return this.$store.state.TeamMemberID
      },
      set (value) {
        console.log(value);
        this.$store.commit('setTeamMemberID', value);
      }
    },
  }, 
  methods: {
    Login () {
      if (TeamMember.find(this.UserId)) {
        console.log(this.UserId);
        if (TeamMember.find(this.UserId).empID) {
          console.log(this.UserId);          
          this.$store.commit('setLoggedIn', true);
          this.$store.commit('setLoggingIn', false);
        }
      }         
      else {
        alert("Incorrect UserId");
        // console.log /g(this.UserId);        
      }                 
    },
    searchEmployeeId (empID) {
      console.log(empID);
      if (TeamMember.find(empID)) {
        // console.log(this.UserId);
        if (TeamMember.find(this.UserId).empID) {
          // console.log(TeamMember.find(empID);
          // console.log(TeamMember.find(empID).firstName);
          // console.log(TeamMember.find(empID).lastName);
          // console.log(TeamMember.find(empID).companyCode);
          // console.log(TeamMember.find(empID);
          // console.log(TeamMember.find(empIDyPayRate);
          // console.log(TeamMember.find(empID).jobTitleCode);
          // console.log(TeamMember.find(empID).jobTitleDescription);
          // console.log(TeamMember.find(empID).homeDepartmentCode);
          // console.log(TeamMember.find(empID).homeDepartmentDescription);
          // console.log(TeamMember.find(empID).active);
          // console.log(TeamMember.find(empID).supervisor);
          // console.log(TeamMember.find(empID).email);
          // console.log(TeamMember.find(empID).photo);
          this.$store.commit('setFirstName', TeamMember.find(empID).firstName);
          this.$store.commit('setLastName', TeamMember.find(empID).lastName);
          this.$store.commit('setCompanyCode', TeamMember.find(empID).companyCode);
          this.$store.commit('setShift', TeamMember.find(empID).shift);
          this.$store.commit('setHourlyPayRate', TeamMember.find(empID).hourlyPayRate);
          this.$store.commit('setJobTitleCode', TeamMember.find(empID).jobTitleCode);
          this.$store.commit('setJobTitleDescription', TeamMember.find(empID).jobTitleDescription);
          this.$store.commit('setHomeDepartmentCode', TeamMember.find(empID).homeDepartmentCode);
          this.$store.commit('setHomeDepartmentDescription', TeamMember.find(empID).homeDepartmentDescription);
          this.$store.commit('setActive', TeamMember.find(empID).active);
          this.$store.commit('setSupervisor', TeamMember.find(empID).supervisor);
          this.$store.commit('setEmail', TeamMember.find(empID).email);
          this.$store.commit('setPhoto', TeamMember.find(empID).photo);
        }
      }         
      else {
        // create new record in DB
        alert("TeamMemberID does not exist, please create new employee");
        // console.log /g(this.UserId);        
      }    
    }, 
    addNewEmployee () {
      axios.post('http://localhost:3000/sql/post-eEmployee', {
        
      empID: this.UserId,
      empName: this.EmpName, 
      firstName: this.FirstName, 
      lastName: this.LastName, 
      photo: this.Photo, 
      email: this.Email, 
      lastEditDt: this.lastEditDt, 
      lastEditBy: this.lastEditBy, 
      createDt: this.createDt, 
      createBy: this.createBy, 
      superVisor: this.Supervisor, 
      homeDepartmentDescription: this.HomeDepartmentDescription, 
      jobTitleCode: this.JobTitleCode, 
      jobTitleDescription: this.JobTitleDescription, 
      homeDepartmentCode: this.homeDepartmentCode, 
      hourlyPayRate: this.HourlyPayRate, 
      companyCode: this.CompanyCode, 
      shift: this.Shift
    // LastName: {
    //   get () {
    //     console.log(this.$store.state.LastName);
    //     return this.$store.state.LastName;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setLastName', value);
    //   }
    // },
    // CompanyCode: {
    //   get () {
    //     console.log(this.$store.state.CompanyCode);
    //     return this.$store.state.CompanyCode;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setCompanyCode', value);
    //   }
    // },
    // Shift: {
    //   get () {
    //     console.log(this.$store.state.Shift);
    //     return this.$store.state.Shift;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setShift', value);
    //   }
    // },
    // HourlyPayRate: {
    //   get () {
    //     console.log(this.$store.state.HourlyPayRate);
    //     return this.$store.state.HourlyPayRate;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setHourlyPayRate', value);
    //   }
    // },
    // JobTitleCode: {
    //   get () {
    //     console.log(this.$store.state.JobTitleCode);
    //     return this.$store.state.JobTitleCode;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setJobTitleCode', value);
    //   }
    // },
    // JobTitleDescription: {
    //   get () {
    //     console.log(this.$store.state.JobTitleDescription);
    //     return this.$store.state.JobTitleDescription;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setJobTitleDescription', value);
    //   }
    // },
    // HomeDepartmentCode: {
    //   get () {
    //     console.log(this.$store.state.HomeDepartmentCode);
    //     return this.$store.state.HomeDepartmentCode;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setHomeDepartmentCode', value);
    //   }
    // },
    // HomeDepartmentDescription: {
    //   get () {
    //     console.log(this.$store.state.HomeDepartmentDescription);
    //     return this.$store.state.HomeDepartmentDescription;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setHomeDepartmentDescription', value);
    //   }
    // },
    // Active: {
    //   get () {
    //     console.log(this.$store.state.Active);
    //     return this.$store.state.Active;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setActive', value);
    //   }
    // },
    // Supervisor: {
    //   get () {
    //     console.log(this.$store.state.Supervisor);
    //     return this.$store.state.Supervisor;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setSupervisor', value);
    //   }
    // },
    // Email: {
    //   get () {
    //     console.log(this.$store.state.Email);
    //     return this.$store.state.Email;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setEmail', value);
    //   }
    // },
    // Photo: {
    //   get () {
    //     console.log(this.$store.state.Photo);
    //     return this.$store.state.Photo;
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setPhoto', value);
    //   }
    // },
    // UserId: {
    //   get () {
    //     return this.$store.state.UserId
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setUserId', value);
    //   }
    // },
    // TeamMemberID: {
    //   get () {
    //     return this.$store.state.TeamMemberID
    //   },
    //   set (value) {
    //     console.log(value);
    //     this.$store.commit('setTeamMemberID', value);
    //   }
    // },
  
      })
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
      // TeamMember.post('setFirstName', function(req, res) { 
      //   // check to make sure none of the fields are empty
      //   if( isEmpty(req.body.firstName) || isEmpty(req.body.lastName) || isEmpty(req.body.companyCode)|| isEmpty(req.body.shift) || isEmpty(req.body.hourlyPayRate)|| isEmpty(req.body.jobTitleCode) || isEmpty(req.body.jobTitleDescription)|| isEmpty(req.body.homeDepartmentCode) || isEmpty(req.body.homeDepartmentDescription)|| isEmpty(req.body.homeDepartmentCode) || isEmpty(req.body.homeDepartmentDescription)|| isEmpty(req.body.homeDepartmentCode) || isEmpty(req.body.homeDepartmentDescription) ) {
      //     return res.json({
      //       'status' : false,
      //       'message' : 'All fields are required'
      //     });
      //  }
      //})      
    }  
  }
}
</script>