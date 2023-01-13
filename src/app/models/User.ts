import { Address } from './Address';

export class User {
    
    tokenId?: string;
    userId?:string;
    id?: number;
    email?: string;
    password?: string;
    userName: string;
    firstName?: string;
    lastName?: string;
    memberSince?: string;
    groupType?: string; 
    addresses?: Address[]; 

    getTokenId() {
        return this.tokenId;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

}
