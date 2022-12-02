import {Request, Response} from 'express';
import {CHAINS} from "./db-data";
import {setTimeout} from 'timers';


export function saveChain(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving new chain", id, JSON.stringify(changes));


    CHAINS[id] = {
        ...CHAINS[id],
        ...changes
    };

    setTimeout(() => {

        res.status(200).json(CHAINS[id]);

    }, 2000);



}
