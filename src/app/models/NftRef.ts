import { Nft } from "./Nft";

export interface NftRef {
    name?: string;
    owner?: string; 
    email?: string;
    address?: string;
    chain?: string;
    nft?: Nft;
}
