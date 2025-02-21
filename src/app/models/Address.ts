import { Coin } from "./Coin";

export interface Address { 
    id?:  number;
    description?: string;
    owner?:  string;
    email?:  string;
    address?: string;
    chain?:  string;
    iconUrl?:  string;
    blockExplorerUrl?:  string;
    ownerId?:  number;
    chainId?: number;
    nftCoins?:  Array<Coin>;
}