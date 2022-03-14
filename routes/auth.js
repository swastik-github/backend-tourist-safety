import { Router } from "express";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";
let route = Router();


route.post('/register',registerController)
route.post('/login',loginController)
export default route;
