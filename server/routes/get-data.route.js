"use strict";
exports.__esModule = true;
exports.getNfts = exports.getMedia = exports.getUserById = exports.getUsers = void 0;
var db_data_1 = require("../data/db-data");
var db_data_2 = require("../data/db-data");
var db_data_3 = require("../data/db-data");
console.log(db_data_1.USERS);
function getUsers(req, res) {
    res.status(200).json({ data: Object.values(db_data_1.USERS) });
}
exports.getUsers = getUsers;
function getUserById(req, res) {
    // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc. 
    //   const idx = req.params.id - 1;
    //   if (!user[idx]) {
    //     return res.status(404).json({ error: "user not found" });
    //   }
    //   return res.json(user[idx]);
    var userId = req.params["id"];
    var users = Object.values(db_data_1.USERS); // users;
    var user = users.find(function (user) { return user.id == +userId; });
    res.status(200).json(user);
}
exports.getUserById = getUserById;
function getMedia(req, res) {
    res.status(200).json({ data: Object.values(db_data_2.MEDIA) });
}
exports.getMedia = getMedia;
function getNfts(req, res) {
    res.status(200).json({ data: Object.values(db_data_3.NFTS) });
}
exports.getNfts = getNfts;
