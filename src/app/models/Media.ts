export class Media {

    id: number;
    uniqueId: string;
    character: string;
    location: string;
    thorinsCompany: string;
    quote: string;
    
    constructor(id: number, uniqueId: string, character: string, location: string, thorinsCompany: string, quote: string) {
        this.id = id;
        this.uniqueId = uniqueId;
        this.character = character;
        this.location = location;
        this.thorinsCompany = thorinsCompany;
        this.quote = quote;
    }

}