"use strict";
exports.__esModule = true;
exports.postNftData = exports.getNftData = exports.postNfts = exports.postNft = exports.getNft = void 0;
var db_data_1 = require("../data/db-data");
function getNft(req, res) {
    res.status(200).json(db_data_1.NFT);
}
exports.getNft = getNft;
function postNft(req, res) {
    res.status(200).json(db_data_1.NFT);
}
exports.postNft = postNft;
function postNfts(req, res) {
    var data = req.body;
    var address = data.address;
    var chain = data.chain;
    var NFTS = [];
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
    // let address = req.body["address"];
    // for()
    res.status(200).json(db_data_1.NFT);
}
exports.getNftData = getNftData;
function postNftData(req, res) {
    var obj = req.body;
    console.log(obj);
    res.status(200).json(db_data_1.NFT);
}
exports.postNftData = postNftData;
