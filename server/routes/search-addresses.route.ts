


import {Request, Response} from 'express';
import {ADDRESSES} from "../data/db-data";
import {setTimeout} from "timers";


export function getAllAddresses(req: Request, res:Response) { 

    res.status(200).json({payload:Object.values(ADDRESSES)});
}
export function searchAddressesByCategory(req: Request, res: Response) {

    const queryParams = req.query as any;

    const chainId = queryParams.chainId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize) || 3;

    let addresses:any = Object.values(ADDRESSES).filter( a  => a.chainId == chainId).sort((a1, a2) => a1.id - a2.id);

    if (filter) {
       addresses = addresses.filter((address: { category: string; }) => address.category.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        addresses = addresses.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const addressesPage = addresses.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: addressesPage});
    },500);   // SPINNER TODO THEN REMOVE



}
