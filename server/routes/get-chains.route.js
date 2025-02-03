import { CHAINS } from "../data/db-data.js";
export function getAllChains(req, res) {
    res.status(200).json({ data: Object.values(CHAINS) });
}
export function getChainById(req, res) {
    const chainId = req.params["id"];
    const chains = Object.values(CHAINS);
    const chain = chains.find((chain) => chain.id == +chainId);
    res.status(200).json(chain);
}
//# sourceMappingURL=get-chains.route.js.map