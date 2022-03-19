import { Router } from "express";
import registerComplaintController from "../controllers/complaint/registerComplaintController.js";
import viewComplaintsController, { viewOneComplaintsController } from '../controllers/complaint/viewComplaintsController'
let route = Router();

route.post('/compliantform',registerComplaintController)
route.get('/viewcomplaints',viewComplaintsController)
route.get('/viewcomplaints/:id',viewOneComplaintsController)
export default route;