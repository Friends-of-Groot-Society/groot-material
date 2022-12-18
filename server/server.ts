
import * as express from 'express';

import {Application} from "express";
const app: Application = express();
import * as path from 'path';
import * as dotenv from 'dotenv'; 
import * as cors from 'cors';
// import * as bodyParser from 'body-parser';
// app.use(bodyParser.json());
dotenv.config();

import {getAllChains, getChainById} from "./routes/get-chains.route"; 
import {     getAllAddresses  } from "./routes/search-addresses.route";
    // searchAddressesByCategory 
import {saveChain} from './routes/save-chain.route';
import {getUsers, getUserById, } from './routes/get-users.route';
// import  {getOpenai} from './routes/openai.route';
import {getNft, postNft,  postNfts, getNftData, postNftData } from './routes/get-nfts.route';




 

app.use(cors({origin: true})); 
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
app.route('/api/chains').get(getAllChains);
app.route('/api/chains/:id').get(getChainById);

app.route('/api/addresses').get(getAllAddresses); 
// app.route('/api/addresses:category').get(searchAddressesByCategory);  
app.route('/api/chains/:id').put(saveChain); 
// app.route('/api/nft').get(getNft); 
app.route('/api/users').get(getUsers);
app.route('/api/users/:id').get(getUserById); 

app.route('/api/nft-test').get(getNft);
app.route('/api/nft-test').post(postNft);
 
app.route('/api/nfts-test').post(postNfts);
 
app.route('/api/nft-data').get(getNftData); 
app.route('/api/nft-data').post(postNftData); 

/// open-ai stuff
app.use('/openai', require('./routes/openai.route'));
// app.route('/api/openai').post(getOpenai);
const PORT = 9000;

const httpServer:any = app.listen(PORT, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



