import { Request, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { deleteUser, registerUser, showUsers, updateUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            await registerUser(data);
            return res.status(200).send({ response: "User created succesfully!"})
        }
        catch(e){
            return res.status(500).send({ response: "Server error"});
        }
    }

    static async show(req: Request, res: Response){
        try{
            const users = await showUsers();
            return res.status(200).send({users})
        }
        catch(e){
            return res.status(404).send({ response: "User not found"});
        }
    }

    static async update(req: Request, res: Response){
        const {id} = req.params
        const data: updateUserDto = req.body
        try{
            await updateUser(data, Number(id));
            return res.status(200).send({ response: "User updated!"});
        }
        catch(e){
            return res.status(404).send({ response: "User not found!"})
        }
    }

    static async delete(req: Request, res: Response){
        const {id} = req.params;
        const data: registerUserDto = req.body
        try{
            await deleteUser(Number(id));
            return res.status(200).send({ response: "User deleted!"})
        }
        catch(e){
            return res.status(404).send({ response: "User not found!"};)
        }
    }
}
