import { Request, Response } from 'express';
import { NFT, NFTS_POLYGON, NFTS_ETHEREUM } from "../data/db-data";

export function getNft(req: Request, res: Response) {
    res.status(200).json(NFT);
}

export function postNft(req: Request, res: Response) {
    res.status(200).json(NFT);
}

export function postNfts(req: Request, res: Response) {

    const data = req.body;
    let address = data.address;
    let chain = data.chain;
    let NFTS = [];

    if (chain == "POLYGON".toLowerCase()) {
        NFTS = NFTS_POLYGON;
    } else if (chain == "ETHEREUM".toLowerCase()) {
        NFTS = NFTS_ETHEREUM;
    } else {
        res.status(400).json({ error: "Invalid chain" });
    }

    for (let i = 0; i < NFTS.length; i++) {
        // var add = req.body.address;
        if (NFTS[i].hasOwnProperty(address)) {

            // console.log(req.body["address"]);
            res.status(200).json(NFTS[i][address]);

        }
    }
}




export function getNftData(req: Request, res: Response) {

    // let address = req.body["address"];
    // for()
    res.status(200).json(NFT);
}
export function postNftData(req: Request, res: Response) {
    let obj = req.body;
    console.log(obj);

    res.status(200).json(NFT);
}