import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import moment from 'moment'
import database from './database'

console.log(database);

Vue.use(Vuex)

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    //use 3000/scorecard for production 3001/scorecard-sandbox for development
    baseURL: 'http://localhost:3000/scorecard/',
    url: '/',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }    
  }
});

console.log(database);

const store = new Vuex.Store({  
  // strict: true,  
  state: {
    UserId: '',    
    LoggedIn: false,
    TeamMembers: '',
    LoggingIn: true,
    FirstName: '',
    LastName: '',
    CompanyCode: '',
    Shift: '',
    HourlyPayRate: '',
    JobTitleCode: '',
    JobTitleDescription: '',
    HomeDepartmentCode: '',
    HomeDepartmentDescription: '',
    Active: '',
    Supervisor: '',
    Email: '',
    Photo: '',
    TeamMemberID: '',
  },
  mutations: {
    setUserId (state, UserId) {
      state.UserId = UserId;
      console.log(state.UserId);
    },    
    setLoggedIn (state, LoggedIn) {
      state.LoggedIn = LoggedIn;
      console.log(state.LoggedIn);
    },
    setTeamMembers (state, TeamMembers) {
      state.teamMembers = TeamMembers;
      console.log(state.teamMembers);
    },    
    setLoggingIn (state, LoggingIn) {
      state.LoggingIn = LoggingIn;
      console.log(`Logging In: ${state.LoggingIn}`);
    },    
    setFirstName (state, FirstName) {
      state.FirstName = FirstName;
      console.log(`FirstName: ${state.FirstName}`);
    },    
    setLastName (state, LastName) {
      state.LastName = LastName;
      console.log(`LastName: ${state.LastName}`);
    },
    setCompanyCode (state, CompanyCode) {
      state.CompanyCode = CompanyCode;
      console.log(`CompanyCode: ${state.CompanyCode}`);
    },
    setShift (state, Shift) {
      state.Shift = Shift;
      console.log(`Shift: ${state.Shift}`);
    },
    setHourlyPayRate (state, HourlyPayRate) {
      state.HourlyPayRate = HourlyPayRate;
      console.log(`HourlyPayRate: ${state.HourlyPayRate}`);
    },
    setJobTitleCode (state, JobTitleCode) {
      state.JobTitleCode = JobTitleCode;
      console.log(`JobTitleCode: ${state.JobTitleCode}`);
    },
    setJobTitleDescription (state, JobTitleDescription) {
      state.JobTitleDescription = JobTitleDescription;
      console.log(`JobTitleDescription: ${state.JobTitleDescription}`);
    },
    setHomeDepartmentCode (state, HomeDepartmentCode) {
      state.HomeDepartmentCode = HomeDepartmentCode;
      console.log(`HomeDepartmentCode: ${state.HomeDepartmentCode}`);
    },
    setHomeDepartmentDescription (state, HomeDepartmentDescription) {
      state.HomeDepartmentDescription = HomeDepartmentDescription;
      console.log(`HomeDepartmentDescription: ${state.HomeDepartmentDescription}`);
    },
    setActive (state, Active) {
      state.Active = Active;
      console.log(`Active: ${state.Active}`);
    },
    setSupervisor (state, Supervisor) {
      state.Supervisor = Supervisor;
      console.log(`Supervisor: ${state.Supervisor}`);
    },
    setEmail (state, Email) {
      state.Email = Email;
      console.log(`Email: ${state.Email}`);
    },
    setPhoto (state, Photo) {
      state.Photo = Photo;
      console.log(`Photo: ${state.Photo}`);
    },
    setTeamMemberID (state, TeamMemberID) {
      state.TeamMemberID = TeamMemberID;
      console.log(`TeamMemberID: ${state.TeamMemberID}`);
    }            
  },
  // getters: {
  //   getCompetencyScoreByIndexAndName (state, {index, competencyName}) {
  //     return state.CompetencyScores[index][competencyName];
  //   }
  // },
  // actions: {
  //   getScorecard (context) {

  //   },
  // },
  plugins: [VuexORM.install(database)]  
})

export default store;