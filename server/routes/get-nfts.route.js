import { NFT_ETH, NFT_POLY, NFTS_ETHEREUM, NFTS_POLYGON, NFT_REFS } from "../data/db-data.js";
export function getNft(req, res) {
    res.status(200).json(NFT_ETH);
}
export function getNftRefs(req, res) {
    res.status(200).json(NFT_REFS);
}
export function getNftRefsByName(req, res) {
    const nftRefName = req.params["name"];
    let nftRef = {};
    console.log(NFT_REFS);
    console.log(nftRefName);
    const nftRefsArray = Object.keys(NFT_REFS);
    console.log(nftRefsArray);
    console.log(nftRefsArray.length);
    for (let i = 0; i < nftRefsArray.length; i++) {
        if (nftRefsArray[i] == nftRefName) {
            nftRef = NFT_REFS[nftRefsArray[i]];
        }
    }
    console.log(nftRef);
    res.status(200).json(nftRef);
}
export function postNft(req, res) {
    res.status(200).json(NFT_POLY);
}
export function postNfts(req, res) {
    const data = req.body;
    let address = data.address;
    let chain = data.chain;
    let NFTS = [];
    let NFT_REFS = {};
    if (chain == "POLYGON".toLowerCase()) {
        NFTS = NFTS_POLYGON;
    }
    else if (chain == "ETHEREUM".toLowerCase()) {
        NFTS = NFTS_ETHEREUM;
    }
    else {
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
export function getNftData(req, res) {
    // res.status(200).json(NFT_ETH);
}
export function postNftData(req, res) {
    // res.status(200).json(NFT_POLY);
}
//# sourceMappingURL=get-nfts.route.js.map