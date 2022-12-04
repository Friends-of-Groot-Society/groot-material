"use strict";
exports.__esModule = true;
exports.searchAddresses = void 0;
var db_data_1 = require("../db-data");
var timers_1 = require("timers");
function searchAddresses(req, res) {
    var queryParams = req.query;
    var chainId = queryParams.chainId, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder || 'asc', pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize) || 3;
    var addresses = Object.values(db_data_1.ADDRESSES).filter(function (a) { return a.chainId == chainId; }).sort(function (a1, a2) { return a1.id - a2.id; });
    if (filter) {
        addresses = addresses.filter(function (address) { return address.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0; });
    }
    if (sortOrder == "desc") {
        addresses = addresses.reverse();
    }
    var initialPos = pageNumber * pageSize;
    var addressesPage = addresses.slice(initialPos, initialPos + pageSize);
    (0, timers_1.setTimeout)(function () {
        res.status(200).json({ payload: addressesPage });
    }, 500); // SPINNER TODO THEN REMOVE
}
exports.searchAddresses = searchAddresses;
