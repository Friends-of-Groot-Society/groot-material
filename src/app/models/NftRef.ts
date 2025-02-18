import { Coin } from "./Coin";

export interface NftRef {
    name?: string;
    owner?: string; 
    email?: string;
    address?: string;
    chain?: string;
    nftCoins?: Array<Coin>;
}
