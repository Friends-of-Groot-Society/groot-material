
export const CHAINS: any = {

    0: {
        id:0,
        name: "ethereum", 
        symbol: "eth", 
        description: "ethereum",
        longDescription: "NFT - 0x1",
        iconUrl: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        category: "BINANCE",
        chainListIcon: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        state: "ethereum",
        addressesCount:3,
    },
    1: {
        id:1,
        name: "polygon", 
        symbol: "matic", 
        description: "polygon",
        longDescription: "NFT - 0x1",
        iconUrl: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        category: "POLYGON",
        chainListIcon: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        state: "polygon",
    }, 
    2: {
        id:2,
        name: "binance", 
        symbol: "bnb", 
        description: "binance",
        longDescription: "NFT - 0x1", 
        iconUrl: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        category: "ETHEREUM",
        chainListIcon: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        state: "binance",
        addressesCount:3
    },
    3: {
        id:3,
        name: "solana", 
        symbol: "sol", 
        description: "solana",
        longDescription: "NFT - 0x1",
        iconUrl: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        category: "POLYGON",
        chainListIcon: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        state: "solana",
        addressesCount:3
    }, 
    4: {
        id:4,
        name: "pulsechain", 
        symbol: "pls", 
        description: "pulsechain",
        longDescription: "NFT - 0x1", 
        iconUrl: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        category: "ETHEREUM",
        chainListIcon: "https://friends-of-groot-society.s3.amazonaws.com/assets/android-chrome-384x384.png",
        state: "pulsechain",     
        addressesCount:3
    },
} 

export const ADDRESSES = {
    0: {
      id: 4,
      description: "NFT - 0x1", 
      owner: "thomasm1.maestas@gmail.com",
      address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
      chain: "ethereum",
      duration: "2:55",
      seqNo: 5,
      chainId: 4
  },

    1:  {
      id: 4,
      description: "NFT - 0x1", 
      owner: "thomasm1.maestas@gmail.com",
      address: "0x5f7B0DDd217D55bFC4927b3E49E3CbF57FA81834",
      chain: "ethereum",
      duration: "2:55",
      seqNo: 5,
      chainId: 4
  },
    2: {  
      id: 1,
      description: "NFT - 0x1",
      owner: "walter.white@gmail.com",
      address: "0xcfCa3FEBAceA3AbB643bA90C670D7c4E6D74b633",
      chain: "ethereum",
      duration: "2:55",
      seqNo: 5,
      chainId: 1
    },
    3: {
      id: 4,
      description: "NFT - 0x1",
      owner: "walter.white@gmail.com",
      address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
      chain: "polygon",
      duration: "2:55",
      seqNo: 5,
      chainId: 1
    }

}
/////////// USERS
export const USERS = [
  { id: 0,
    fName: "Tom",
    lName: "Milton",
    email: "thomasm1.maestas@gmail.com",
    memberSince: "02-04-2020",
    groupType: "Admin",
    addresses: [ 
      {
        id: 4,
        description: "NFT - 0x1", 
        owner: "thomasm1.maestas@gmail.com",
        address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
        chain: "ethereum",
        duration: "2:55",
        seqNo: 5,
        chainId: 4
    },
    {
      id: 4,
      description: "NFT - 0x1", 
      owner: "thomasm1.maestas@gmail.com",
      address: "0x5f7B0DDd217D55bFC4927b3E49E3CbF57FA81834",
      chain: "ethereum",
      duration: "2:55",
      seqNo: 5,
      chainId: 4
  },
    ],
  },
  { id:1,
    fName: "Walter",
    lName: "White",
    email: "walter.white@gmail.com",
    memberSince: "02-04-2020",
    groupType: "Premium",
    addresses: [
      {
        id: 1,
        description: "NFT - 0x1",
        owner: "walter.white@gmail.com",
        address: "0xcfCa3FEBAceA3AbB643bA90C670D7c4E6D74b633",
        chain: "ethereum",
        duration: "2:55",
        seqNo: 5,
        chainId: 1
    },
    {
        id: 4,
        description: "NFT - 0x1",
        owner: "walter.white@gmail.com",
        address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
        chain: "polygon",
        duration: "2:55",
        seqNo: 5,
        chainId: 1
    },
    ],
  },
];

export const NFTS = { 
  "0x900bE021E38B8d08435A03c05657C8cFA837cAeF": {
        native: "0.03435",
        tokens: [
            "12.0 USDC",
            "55.0 HEX",
            "2.00265064 MATIC"
        ],
        nfts: [
            {
                name: "One day,Ujuuna killed in explosion, and his reincarnation is decided at generative.",
                amount: 1,
                metadata: {
                    name: "Ten Uju Gene #08380",
                    description:"ある日、イケハヤさんと対談し、未来にワクワクしながら布団に入るうじゅうな……。  \n    \n  （明日からも頑張ろう……）  \n    \n  そう思った矢先、爆死し、転生してしまううじゅうな。  \n    \n  念願の転生は思っていたのとは、なんか違うようで……。  \n    \n  その転生先はあなたの目で見届けてほしい。",
                    image: "https://storage.googleapis.com/uju-explosion/images/8380.png",
                    attributes: [
                        {
                            value: "Tegaki",
                            trait_type: "Base"
                        },
                        {

                            value: "Tegaki",
                            trait_type: "Base"
                        }
                    ]
                  }
            }
          ]
}
}
   
  
export function findChainById(chainId: number) {
    return CHAINS[chainId];
}
export function findAddressesForChain(chainId:number) {
    return Object.values(ADDRESSES).filter(address => address.chainId == chainId);
}