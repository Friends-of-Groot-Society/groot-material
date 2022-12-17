"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var dotenv = require("dotenv");
dotenv.config();
var get_chains_route_1 = require("./routes/get-chains.route");
var search_addresses_route_1 = require("./routes/search-addresses.route");
var save_chain_route_1 = require("./routes/save-chain.route");
var get_data_route_1 = require("./routes/get-data.route");
// import  {getOpenai} from './routes/openai.route';
var cors = require("cors");
var app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
/// ROUTING
app.route('/api/chains').get(get_chains_route_1.getAllChains);
app.route('/api/chains/:id').get(get_chains_route_1.getChainById);
app.route('/api/addresses').get(search_addresses_route_1.getAllAddresses);
// app.route('/api/addresses:category').get(searchAddressesByCategory);  
app.route('/api/chains/:id').put(save_chain_route_1.saveChain);
// app.route('/api/nft').get(getNft); 
app.route('/api/users').get(get_data_route_1.getUsers);
app.route('/api/users/:id').get(get_data_route_1.getUserById);
app.route('/api/media').get(get_data_route_1.getMedia);
app.route('/api/nft').get(get_data_route_1.getNfts);
/// open-ai stuff
app.use('/openai', require('./routes/openai.route'));
// app.route('/api/openai').post(getOpenai);
var PORT = 9000;
var httpServer = app.listen(PORT, function () {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
