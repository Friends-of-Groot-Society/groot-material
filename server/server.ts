
import * as express from 'express';
import {Application} from "express";
import {getAllChains, getChainById} from "./routes/get-chains.route"; 
import {
    getAllAddresses, 
    // searchAddressesByCategory
} from "./routes/search-addresses.route";
import {saveChain} from './routes/save-chain.route';
import {getUsers, getUserById,getMedia,getGroot} from './routes/get-data.route';
 

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.route('/api/chains').get(getAllChains);
app.route('/api/chains/:id').get(getChainById);

app.route('/api/addresses').get(getAllAddresses); 
// app.route('/api/addresses:category').get(searchAddressesByCategory); 

app.route('/api/chains/:id').put(saveChain);

// app.route('/api/nft').get(getNft);

app.route('/api/users').get(getUsers);
app.route('/api/users/:id').get(getUserById);

app.route('/api/media').get(getMedia);

app.route('/api/groot').get(getGroot);

const PORT = 9000;

const httpServer:any = app.listen(PORT, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



