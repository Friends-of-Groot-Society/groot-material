export interface Coin 
{
  native?: string,
  tokens?: [
    string,
    string 
  ],
  nfts?: [
    {
      name?:  string;
      amount?: number;
      metadata?: {
        name?: string,
        description?:string,
        image?:string
        attributes?: [
          {
            value?: string,
            trait_type?: string
          } 
        ]
      } 
    }
  ]
}

// @Id
// int id;
// int name;
// int amount;
// @OneToOne
// @JoinColumn(name = "metadata_metaid")
// Metadata metadata;
// int nft_address_id;