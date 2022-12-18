

import {Request, Response} from 'express'; 
import {USERS } from "../data/db-data"; 
import {NFTS } from "../data/db-data"; 

console.log(USERS);
  
export function getUsers(req: Request, res: Response) {
         res.status(200).json({data: Object.values(USERS)});  
}

export function getUserById(req: Request, res: Response) {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc. 
//   const idx = req.params.id - 1;

//   if (!user[idx]) {
//     return res.status(404).json({ error: "user not found" });
//   }
//   return res.json(user[idx]);

    const userId = req.params["id"];
    const users: any = Object.values(USERS);// users;
    const user = users.find((user: { id: number; }) => user.id == +userId); 

        res.status(200).json(user); 

}  