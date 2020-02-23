// import { Deserializable } from './deserializable';

export class Media {  //implements Deserializable

    public id: number;
    public uniqueId: string;
    public character: string;
    public location: string;
    public thorinsCompany: string;
    public quote: string;

    // deserialize(input: any): this {
    //     return Object.assign(this, input);
    // }

    getQuote() {
        return this.quote;
    }

}