"use strict";
exports.__esModule = true;
exports.getChainById = exports.getAllChains = void 0;
var db_data_1 = require("./db-data");
function getAllChains(req, res) {
    setTimeout(function () {
        res.status(200).json({ payload: Object.values(db_data_1.CHAINS) });
    }, 200);
}
exports.getAllChains = getAllChains;
function getChainById(req, res) {
    var id = req.params["id"];
    var chain = db_data_1.CHAINS[id];
    setTimeout(function () {
        res.status(200).json(chain);
    }, 200);
}
exports.getChainById = getChainById;
