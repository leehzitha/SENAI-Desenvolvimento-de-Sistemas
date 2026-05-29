import { Request, Response } from "express";
import { registerUserDTO } from "../dtos/userDTO";

export class UserController {
    async register(req: Request, res: Response){
        const data : registerUserDTO = req.body;
        try {
            await registerUser(data)
            res.status(200).send({ response: "Succesfully registered!"})
        }
    }
}