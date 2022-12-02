
export const CHAINS: any = {

    0:  {name:'ethereum', symbol:'eth', description: 'ethereum', state: 'ethereum'},
    1:  {name:'polygon', symbol:'matic', description: 'polygon', state: 'polygon'},
    2:  {name:'binance', symbol:'bnb', description: 'binance', state: 'binance'},
    3:  {name:'solana', symbol:'sol', description: 'solana', state: 'solana'},
    4:  {name:'pulsechain', symbol:'pls', description: 'pulsechain', state: 'pulsechain'},
}
  
export const ADDRESSES: any = {
    0: {
        id: 0,
        "description": "NFT - 0x1",
        "owner": "unknown",
        "addr": 0x900bE021E38B8d08435A03c05657C8cFA837cAeF,
        "chain":"ethereum",
        chainId: 0
    },
 
    1: {
        id: 1,
        "description": "NFT - 0x1",
        "owner": "unknown",
        "addr": 0x900bE021E38B8d08435A03c05657C8cFA837cAeF,
        "chain":"polygon",
        chainId: 1
    },
    2: {
        id: 2,
        "description": "NFT - 0x1",
        "owner": "unknown",
        "addr": 0x900bE021E38B8d08435A03c05657C8cFA837cAeF,
        "chain":"binance",
        chainId: 2
    },
   3: {
        id: 2,
        "description": "NFT - 0x1",
        "owner": "unknown",
        "addr": 0x900bE021E38B8d08435A03c05657C8cFA837cAeF,
        "chain":"solana",
        chainId: 3
    },
 
    4: {
        id:3,
        "description": "NFT - 0x1",
        "owner": "unknown",
        "addr": 0x900bE021E38B8d08435A03c05657C8cFA837cAeF,
        "chain":"pulsechain",
        chainId: 4
    },
} 
export function findChainById(chainId:number) {
    return CHAINS[chainId];
}
 