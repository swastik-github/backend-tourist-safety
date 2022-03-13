import { Router } from "express";
const route = Router()

route.use('/test',(req, res, next)=>{
    console.log("good");
})


export default route