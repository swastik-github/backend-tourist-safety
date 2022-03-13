import { Router } from "express";
import { placeFullDetails } from "../controllers/placedetails";
let route = Router();

route.get("/:id", placeFullDetails);

export default route;
