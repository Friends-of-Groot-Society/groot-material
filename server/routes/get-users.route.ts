

import { response } from 'express';
import {Request, Response} from 'express'; 
import {USERS } from "../data/db-data";  

export function postLogin(req: Request, res: Response) {
  
  const data = req.body;
  const userData = { email: data.email, password: data.password  } 
  const users: any = Object.values(USERS) 
 
    const user = users.find((user) => { 
      if (user.email == userData.email && user.password == userData.password) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(user) 
      } else {
        res.status(400).json(null)
      }
    }); 
}

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
    const users:any = Object.values(USERS);// users;
    const user = users.find((user: { id: number; }) => user.id == +userId); 

        res.status(200).json(user); 

}  