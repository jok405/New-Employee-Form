// TeamMember Model
import { Model } from '@vuex-orm/core';
//import { TEAMMEMBERS } from '@/_datastores/teammembers.data';
//import store from '@/store';
var count = 0;

export default class TeamMember extends Model {
// This is the name used as module name of the Vuex Store.
  static entity = 'teamMembers';

    static primaryKey = 'empID';

    // List of all fields (schema) of the post model. `this.attr` is used
    // for the generic field type. The argument is the default value.
    static fields() {
      // console.log /g(`New instance of TeamMember is being created ${count++}`);
      
      return {

        
        empID: this.attr(String),
        empName: this.attr(String),
        firstName: this.attr(String),
        lastName: this.attr(String),
        companyCode: this.attr(String),
        shift: this.attr(String),
        hourlyPayRate: this.attr(Number),
        jobTitleCode: this.attr(Number),
        homeDepartmentDescription: this.attr(String),
        superVisor: this.attr(String),
        createBy: this.attr(String),
        createDt: this.attr(Date),
        lastEditBy: this.attr(String),
        lastEditDt: this.attr(Date),
        email: this.attr(String),
        photo: this.attr(String),
        //shift: this.attr(Number),
        homeDepartmentCode: this.attr(String),
        jobTitleDescription: this.attr(String),
        


        // <---  For SQL database  --->        
        // EmplID: this.attr(Number),
        // EmName: this.attr(String),
        // FirstName: this.attr(String),
        // LastName: this.attr(String),
        // CompanyCode: this.attr(String),
        // Shift: this.attr(String),
        // HourlyPayRate: this.attr(Decimal),
        // JobTitleCode: this.attr(String),
        // JobTitleDescription: this.attr(String),
        // HomeDepartmentCode: this.attr(String),
        // HomeDepartmentDescription: this.attr(String),
        // Active: this.attr(String),
        // Supervisor: this.attr(String),
        // CreateBy: this.attr(String),
        // CreateDt: this.attr(Datetime),
        // Email: this.attr(String),
        // Photo: this.attr(String),


      };
    };

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    };

    static methodConf = {
      // http: {
      //   url: '/teammembers'
      // },
      methods: {
        $fetch: {
          name: 'fetch',
          http: {
            url: '',
            method: 'get',
          },
        },
        $get: {          
          name: 'get',
          http: {
            url: '/:empID',
            method: 'get',
          },
        },
      },
    }
};