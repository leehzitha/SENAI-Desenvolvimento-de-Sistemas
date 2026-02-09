import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const { name, lastName } = req.body
        console.log(name, lastName)
        people.push({name, lastName})
        res.status(200).send("Registrado com sucesso!")
    })
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({ users: people })
    })

export default router;