"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var path = require("path");
var dotenv = require("dotenv");
var cors = require("cors");
// import * as bodyParser from 'body-parser';
// app.use(bodyParser.json());
dotenv.config();
var get_chains_route_1 = require("./routes/get-chains.route");
var search_addresses_route_1 = require("./routes/search-addresses.route");
// searchAddressesByCategory 
var save_chain_route_1 = require("./routes/save-chain.route");
var get_users_route_1 = require("./routes/get-users.route");
// import  {getOpenai} from './routes/openai.route';
var get_nfts_route_1 = require("./routes/get-nfts.route");
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
app.route('/api/users').get(get_users_route_1.getUsers);
app.route('/api/users/:id').get(get_users_route_1.getUserById);
app.route('/api/nft-test').get(get_nfts_route_1.getNft);
app.route('/api/nft-test').post(get_nfts_route_1.postNft);
app.route('/api/nfts-test').post(get_nfts_route_1.postNfts);
app.route('/api/nft-data').get(get_nfts_route_1.getNftData);
app.route('/api/nft-data').post(get_nfts_route_1.postNftData);
/// open-ai stuff
app.use('/openai', require('./routes/openai.route'));
// app.route('/api/openai').post(getOpenai);
var PORT = 9000;
var httpServer = app.listen(PORT, function () {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
