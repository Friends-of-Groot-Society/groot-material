export interface Chain {
    category?: string;
    id?: string;
    chainId?: string;
    type:string;
    name?: string;
    symbol?: string[];
    description?: string; 
    longDescription?: string;
    iconUrl?:  string;
    chainListIcon?: string; 
    addressesCount?: number; 
    rpcUrl?: string;
    blockExplorerUrl?: string;
    releaseDate?: string;
    
} 
export function sortChainByName(a: Chain, b: Chain): number {
    return a.name.localeCompare(b.name);
}