"use strict";
exports.__esModule = true;
exports.searchAddresses = exports.getAllAddresses = void 0;
var db_data_1 = require("../data/db-data");
var timers_1 = require("timers");
function getAllAddresses(req, res) {
    res.status(200).json({ data: Object.values(db_data_1.ADDRESSES) });
}
exports.getAllAddresses = getAllAddresses;
function searchAddresses(req, res) {
    var queryParams = req.query;
    var addresses = Object.values(db_data_1.ADDRESSES);
    var addressesNew = [];
    var chainId = queryParams.chainId, filterVal = queryParams.filter || '', filterVal2 = queryParams.filter2 || '', sortOrder = queryParams.sortOrder || 'asc', pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize) || 3;
    // assuming ownerID is a number
    //       let ownerId = parseInt(filterVal);
    // if (filterVal != isNaN) { 
    // addresses = Object.values(ADDRESSES).filter(address => address.ownerId == ownerId).sort((l1, l2) => l1.ownerId - l2.ownerId);
    // }
    if (filterVal == "" && filterVal2 == "") {
        addresses = Object.values(db_data_1.ADDRESSES).sort(function (a1, a2) { return a1.ownerId - a2.ownerId; });
    }
    else if (filterVal2 == "") { // filter value is owner, filter 2 is chain
        addressesNew = addresses.filter(function (address) { return address.owner.trim().toLowerCase().search(filterVal.toLowerCase()) >= 0; });
    }
    if (filterVal2 != "") {
        addressesNew = addressesNew.filter(function (addressesNew) { return addressesNew.chain.trim().toLowerCase().search(filterVal2.toLowerCase()) >= 0; });
    }
    if (sortOrder == "desc") {
        addresses = addresses.reverse();
    }
    var initialPos = pageNumber * pageSize;
    var addressesPage = addressesNew.slice(initialPos, initialPos + pageSize);
    (0, timers_1.setTimeout)(function () {
        res.status(200).json({ payload: addressesPage });
    }, 500); // SPINNER TODO THEN REMOVE
}
exports.searchAddresses = searchAddresses;
