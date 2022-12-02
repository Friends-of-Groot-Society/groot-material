
import * as express from 'express';
import {Application} from "express";
import {getAllChains, getChainById} from "./get-chains.route"; 
import {searchAddresses} from "./search-addresses.route";
import {saveChain} from './save-chain.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

app.route('/api/chains').get(getAllChains);

app.route('/api/chains/:id').get(getChainById);

app.route('/api/addresses').get(searchAddresses); 

app.route('/api/chains/:id').put(saveChain);

const PORT = 9000;

const httpServer:any = app.listen(PORT, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



