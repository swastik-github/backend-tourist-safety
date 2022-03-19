import { Router } from "express";
import viewComplaintsController, {
  viewOneComplaintsController,
} from "../controllers/complaint/viewComplaintsController";

import addResponseController from '../controllers/complaint/addResponseController'
let route = Router();

const checkAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    
    res.status(401).send({
      success: false,
      message: "admin access denied",
    });
  }
};

route.get('/', checkAdmin, viewComplaintsController);
route.get("/:id", checkAdmin, viewOneComplaintsController);
route.post("/report/:report_id", checkAdmin, addResponseController);
export default route;
