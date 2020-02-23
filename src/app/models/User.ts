import { Deserializable } from './deserializable';
import { Media } from './Media'; 

export class User  { //
    public id?: number;
    public email: string;
    public password: string;
    public fName: string;
    public lName: string;
    public memberSince?: string;
    public groupType?: string;
    // public media?: Media[];
    public media?: Media;


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
            return this.fName + ' '  + this.lName;
        }
 
}
