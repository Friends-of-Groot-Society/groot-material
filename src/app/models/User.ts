import { Address } from './Address';

export class User {
    
    tokenId?: string;
    userId?:string;
    id?: string;
    email!: string;
    password!: string;
    fName!: string;
    lName!: string;
    memberSince?: string;
    groupType?: string; 
    addresses?: Address[]; 

    getTokenId() {
        return this.tokenId;
    }
    getFullName() {
        return this.fName + ' ' + this.lName;
    }

}
