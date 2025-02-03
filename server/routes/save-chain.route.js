import { CHAINS } from "../data/db-data.js";
import { setTimeout } from 'timers';
export function saveChain(req, res) {
    const id = req.params["id"], changes = req.body;
    console.log("Saving new chain", id, JSON.stringify(changes));
    CHAINS[id] = {
        ...CHAINS[id],
        ...changes
    };
    setTimeout(() => {
        res.status(200).json(CHAINS[id]);
    }, 1000); // SPINNER TODO THEN REMOVE
}
//# sourceMappingURL=save-chain.route.js.map