import express , {Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import { validateRegister, validateObejctId } from '../middlewares/personMiddleware';
const router: Router = express.Router()

router
    .post('/register', UserController.create)
    .post('/login', UserController.login)

export default router