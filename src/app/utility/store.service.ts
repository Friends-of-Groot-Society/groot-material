import { INIT } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { Chain } from "../models/Chain";

export class Store {
    private subject = new BehaviorSubject<Chain[]>([]);
    chains$ = this.subject.asObservable();

    init() {
        const http$ = createHttpObservable('localhost:9000/api/chains');
        [
            {name:'ethereum', symbol:'eth', description: 'ethereum', state: 'ethereum'},
            {name:'polygon', symbol: 'matic', description: 'polygon', state: 'polygon'},
            {name:'binance', symbol: 'bnb', description: 'binance', state: 'binance'}
        ]);
    }
}