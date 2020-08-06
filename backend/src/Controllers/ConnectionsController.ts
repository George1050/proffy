import { Request, Response } from "express";
import db from "../Database/connection";

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        const {id} = request.body;
        const totalConnections = await db('connections').count('* as total')

        const { total } = totalConnections[0];
        
        return response.json({ total });
    }
    
    async create(request: Request, response: Response) {
        const { user_id } = request.body;
        console.log(user_id)
        try {
            await db('connections').insert({user_id});

            return response.status(201).send();
        } catch (error) {
            console.log(error)
        }
    }
}