import { Router } from "express";

import { loginUser, userCreate } from "../controller/user.controoler.js";



const router = Router();

router.get("/" , (req, res)=>{
    return res.json({
        message : "user routes suceesfully........"
    })
})

router.route("/signup").post(userCreate)
router.route("/signin").post(loginUser)


export default router;

