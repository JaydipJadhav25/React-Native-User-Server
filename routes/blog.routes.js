import { Router } from "express";
import { allBlog, CreateBlog, deleteBlog, getBlog, updateBlog } from "../controller/blog.controoler.js";




const router = Router();

router.get("/" , (req, res)=>{
    return res.json({
        message : "Blog routes suceesfully........"
    })
})

router.route("/create").post(CreateBlog)
router.route("/update").post(updateBlog)
router.route("/delete").delete(deleteBlog)
router.route("/get").post(getBlog)
router.route("/allblogs").get(allBlog)



export default router;