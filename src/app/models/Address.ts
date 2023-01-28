import { Nft } from "./Nft";

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
    nft?:  Nft;
}