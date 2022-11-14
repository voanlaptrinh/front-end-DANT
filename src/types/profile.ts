export interface Skill {
   id: number;
   name: string;
}

export interface Experience {
   id: number;
   name: string;
}

export interface Lever {
   id: number;
   name: string;
}

export interface Wage {
   id: number;
   name: string;
}

export interface Profession {
   id: number;
   name: string;
}

export interface Timework {
   id: number;
   name: string;
}

export interface User {
   id: number;
   email: string;
   name: string;
   role_id: number;
   status: number;
   email_verified_at?: any;
   reset_password_token?: any;
   reset_password_token_expire?: any;
   created_at: Date;
   updated_at: Date;
}

export interface Profile {
   skill: Skill[];
   experience: Experience[];
   lever: Lever[];
   wage: Wage[];
   profession: Profession[];
   timework: Timework[];
   user: User;
}