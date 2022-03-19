import { Router } from "express";
import loginController from "../controllers/auth/loginController";
import registerController from "../controllers/auth/registerController";
let route = Router();


route.post('/register',registerController)
route.post('/login',loginController)
export default route;
