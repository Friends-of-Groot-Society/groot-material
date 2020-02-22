 
export class Medium {

    public id: number;
    public uniqueId: string;
    public character: string;
    public location: string;
    public thorinsCompany: string;
    public quote: string;
  
    getQuote() {
        return this.quote;
    }
    // constructor(id: number, uniqueId: string, character: string, location: string, thorinsCompany: string, quote: string) {
    //     this.id = id;
    //     this.uniqueId = uniqueId;
    //     this.character = character;
    //     this.location = location;
    //     this.thorinsCompany = thorinsCompany;
    //     this.quote = quote;
    // }

}