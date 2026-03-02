import { Request, Response, NextFunction } from 'express';

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, lastname, age } = req.body
    if (!name || !lastname || !age){
        return res.status(400).send({ response: "Successfull register!"})
    }
}