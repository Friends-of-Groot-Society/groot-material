"use strict";
exports.__esModule = true;
exports.getUserById = exports.getUsers = exports.postLogin = void 0;
var db_data_1 = require("../data/db-data");
function postLogin(req, res) {
    var data = req.body;
    var userData = { email: data.email, password: data.password };
    var users = Object.values(db_data_1.USERS);
    var user = users.find(function (user) {
        if (user.email == userData.email && user.password == userData.password) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).json(user);
        }
        else {
            res.status(400).json(null);
        }
    });
}
exports.postLogin = postLogin;
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
