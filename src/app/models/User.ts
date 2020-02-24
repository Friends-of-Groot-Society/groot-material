import { Deserializable } from './deserializable';
import { Media } from './Media';

export class User { //
    id?: number;
    tokenId?: string;
    email: string;
    password: string;
    fName: string;
    lName: string;
    memberSince?: string;
    groupType?: string;
    // public media?: Media[];
    media?: Media;


    // deserialize(input: any): this {
    //     // Assign input to our object BEFORE deserialize Media to prevent already deserialized Media from being overwritten.
    //     Object.assign(this, input);

    //     // Iterate over all media for user and map them to a `media` model
    //     // if (this.media) {
    //     //     this.media = input.media.map(medium => new Media().deserialize(medium));
    //     // }  
    //     return this;
    //     // throw new Error("Method not implemented.");

    // }

    getFullName() {
        return this.fName + ' ' + this.lName;
    }

}
