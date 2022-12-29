"use strict";
exports.__esModule = true;
exports.postNftData = exports.getNftData = exports.postNfts = exports.postNft = exports.getNftRefs = exports.getNft = void 0;
var db_data_1 = require("../data/db-data");
function getNft(req, res) {
    res.status(200).json(db_data_1.NFT_ETH);
}
exports.getNft = getNft;
function getNftRefs(req, res) {
    res.status(200).json(db_data_1.NFT_REFS);
}
exports.getNftRefs = getNftRefs;
function postNft(req, res) {
    res.status(200).json(db_data_1.NFT_POLY);
}
exports.postNft = postNft;
function postNfts(req, res) {
    var data = req.body;
    var address = data.address;
    var chain = data.chain;
    var NFTS = [];
    var NFT_REFS = {};
    if (chain == "POLYGON".toLowerCase()) {
        NFTS = db_data_1.NFTS_POLYGON;
    }
    else if (chain == "ETHEREUM".toLowerCase()) {
        NFTS = db_data_1.NFTS_ETHEREUM;
    }
    else {
        res.status(400).json({ error: "Invalid chain" });
    }
    for (var i = 0; i < NFTS.length; i++) {
        // var add = req.body.address;
        if (NFTS[i].hasOwnProperty(address)) {
            // console.log(req.body["address"]);
            res.status(200).json(NFTS[i][address]);
        }
    }
}
exports.postNfts = postNfts;
function getNftData(req, res) {
    // res.status(200).json(NFT_ETH);
}
exports.getNftData = getNftData;
function postNftData(req, res) {
    // res.status(200).json(NFT_POLY);
}
exports.postNftData = postNftData;
