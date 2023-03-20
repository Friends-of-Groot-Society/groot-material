import { Address } from './Address';

export class User {
    
    idToken?: string;
    userId?:string;
    username: string;
    lastName?: string;
    firstName?: string;
    groups?:number;
    userType?: number;
    email?: string; 
    phone?: string;
    cusUrl?: string;
    photoPath?: string;
    userGroup?: string;
    isActive?: number; // 0 = inactive, 1 = active 
    id?: number;
    addresses?: Address[];  
    
    memberSince?: string;

    getIdToken() {
        return this.idToken;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

}
