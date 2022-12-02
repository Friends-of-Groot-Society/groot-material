


import {Request, Response} from 'express';
import {ADDRESSES} from "./db-data";
import {setTimeout} from "timers";



export function searchAddresses(req: Request, res: Response) {

    const queryParams = req.query as any;

    const chainId = queryParams.chainId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize) || 3;

    let addresses:any = Object.values(ADDRESSES)
      //  .filter( (a   => a.chainId == chainId)
      //   .sort((a1: { id: number; }, a2: { id: number; }) => a1.id - a2.id));

    if (filter) {
       addresses = addresses.filter((a: { description: string; }) => a.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        addresses = addresses.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const addressesPage = addresses.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: addressesPage});
    },1000);


}
