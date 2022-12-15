import * as express from 'express';
import { generateImage} from '../controllers/openaiController';
 
export function getOpenai (req: Request, res: Response) {   
   return  generateImage(req, res); 
}