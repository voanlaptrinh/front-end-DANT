import { Job } from "./job"
import { Location } from "./location"
import { Profession } from "./profession"
import { Skill } from "./skill"

export interface Categories {
   job: Job[]
   location: Location[]
   skill: Skill[]
   profession: Profession[]
}



