import { Media } from './Media';

export class User {

    id?: number;
    email: string;
    fName: string;
    lName: string;
    memberSince?: string;
    groupType?: string;
    media?: Array<Media>;

    constructor(id: number, email: string, fName: string, lName: string, memberSince: string, groupType: string, media: Array<Media>) {
        this.id = id;
        this.email = email;
        this.fName = fName;
        this.lName = lName;
        this.memberSince = memberSince;
        this.groupType = groupType;
        this.media = media;
    }

}
