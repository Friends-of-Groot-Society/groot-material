
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
export const ADDRESSES = {
    0: {
        id: 0,
        description: "NFT - 0x1", 
        owner: "unknown",
        address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
        chain: "ethereum",
        duration: "2:55",
        seqNo: 5,
        chainId: 0
    },

    1: {
        id: 1,
        description: "NFT - 0x1", 
        owner: "unknown",
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
        owner: "unknown",
        address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
        chain: "ethereum",
        duration: "2:55",
        seqNo: 5,
        chainId: 4
    },
    {
      id: 4,
      description: "NFT - 0x1", 
      owner: "unknown",
      address: "0x900bE021E38B8d08435A03c05657C8cFA837cAeF",
      chain: "pulsechain",
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
    media: [
      {
        "id": 11,
        "uniqueId": "f4f8b2f4-b714-49cc-9aed-4d918ae32ee6",
        "character": "The Great Goblin",
        "location": "Bree",
        "thorinsCompany": "Bofur",
        "quote": "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after."
      },
      {
        "id": 12,
        "uniqueId": "8bf37760-93fd-4f1b-b02c-473d319621ab",
        "character": "Ori",
        "location": "Mount Gram",
        "thorinsCompany": "Bifur",
        "quote": "Where did you go to, if I may ask?' said Thorin to Gandalf as they rode along.  To look ahead,' said he.  And what brought you back in the nick of time?' Looking behind,' said he."
      }
    ],
  },
];

export const MEDIA = [
    {
      "id": 11,
      "uniqueId": "f4f8b2f4-b714-49cc-9aed-4d918ae32ee6",
      "character": "The Great Goblin",
      "location": "Bree",
      "thorinsCompany": "Bofur",
      "quote": "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after."
    },
    {
      "id": 12,
      "uniqueId": "8bf37760-93fd-4f1b-b02c-473d319621ab",
      "character": "Ori",
      "location": "Mount Gram",
      "thorinsCompany": "Bifur",
      "quote": "Where did you go to, if I may ask?' said Thorin to Gandalf as they rode along.  To look ahead,' said he.  And what brought you back in the nick of time?' Looking behind,' said he."
    },
    {
      "id": 13,
      "uniqueId": "a5535656-0011-42a0-a1cd-9628118acdfc",
      "character": "Radagast",
      "location": "Gondolin",
      "thorinsCompany": "Bombur",
      "quote": "May the wind under your wings bear you where the sun sails and the moon walks."
    }
  ];
   
  
export function findChainById(chainId: number) {
    return CHAINS[chainId];
}
export function findAddressesForChain(chainId:number) {
    return Object.values(ADDRESSES).filter(address => address.chainId == chainId);
}