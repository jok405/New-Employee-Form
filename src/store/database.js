import { Database } from '@vuex-orm/core'
import TeamMember from '../models/TeamMember'

const database = new Database()

database.register(TeamMember)

console.log(database);

export default database