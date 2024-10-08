import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import blogRouter from "./routes/blog.routes.js"

const app = express()

// Use CORS middleware to allow requests from any origin
app.use(cors({
  origin : "*",
  //origin access anywhere because set * all access
  Credential : true

}))

app.use(express.json());




app.get('/', function (req, res) {

 return res.json({
    message : "hello world . from jaydip"
  })
  
})


//routing
//1.user all routes
app.use("/user" , userRouter);

//2.blog 
app.use("/blog" , blogRouter);



export  default app;
