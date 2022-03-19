import { Router } from "express";
import { placeFullDetails } from "../controllers/place/placeDetailController";
let route = Router();

route.get("/:id", placeFullDetails);

export default route;
