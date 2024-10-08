import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken"



const superkey = "supaerman@123"


const userCreate = async( req , res) =>{

    const { username , email ,password } = req.body;

    console.log(username , email , password);

    const user = await User.create({
        username : username,
        email : email,
        password : password,
    });

    console.log("user : " , user);

    return res.json({
        message : "user create successfully......",
        user
    })


}

const loginUser = async(req , res) =>{

    const { email , password} = req.body;
    console.log(email  , password);

    if(!email && !password || !email || !password){
        return res.json({
            message : "Email  And Password are requried",
            isPasswordCorrect : false
        })
    }
 
    // ifelse(!email){
    //     return res.json({
    //         message : "Email  And Password are requried",
    //         isPasswordCorrect : false
    //     })
    // }

    const user = await User.findOne({
        email : email
    });

    console.log("user is find : " , !user);

    // if(!user) throw new Error("User is not Found ")

    if(!user){
        return res.json({
            message : "Email  Is wrong.........",
            isPasswordCorrect : false
        })
    }

    

    

    if(user.password !== password) {
        return res.json({
            message : "Password Is wrong.........",
            isPasswordCorrect : false
        })
    }
     
        const token = jwt.sign({
            _id : user._id,
            name : user.name,
            email : user.email
        } ,superkey );

        console.log(token)
        

 

 

    return res
    .cookie("token" , token)
    .json({
    message : "Login user successfully.........."  ,
    isPasswordCorrect : true
     })
}


// const getUser =  async (req , res) =>{
//     const { email} = req.body;

//     const user
// }





export {
    userCreate,
    loginUser
}