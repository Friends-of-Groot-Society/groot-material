

import {Request, Response} from 'express'; 
import {CHAINS as chains} from "./db-data";


 
export function getAllChains(req: Request, res: Response) {

    setTimeout(() => {

         res.status(200).json({payload:Object.values(chains)});

    }, 200);

}
export function getChainById(req: Request, res: Response) {

    const id = req.params["id"];
    const chain = chains[id];

    setTimeout(() => {

        res.status(200).json(chain);

    }, 200);

} 