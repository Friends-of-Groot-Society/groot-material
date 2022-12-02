"use strict";
exports.__esModule = true;
var express = require("express");
var get_chains_route_1 = require("./get-chains.route");
var search_addresses_route_1 = require("./search-addresses.route");
var save_chain_route_1 = require("./save-chain.route");
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.route('/api/chains').get(get_chains_route_1.getAllChains);
app.route('/api/chains/:id').get(get_chains_route_1.getChainById);
app.route('/api/addresses').get(search_addresses_route_1.searchAddresses);
app.route('/api/chains/:id').put(save_chain_route_1.saveChain);
var PORT = 9000;
var httpServer = app.listen(PORT, function () {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
e