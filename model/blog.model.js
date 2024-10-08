import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title : {
        type : "String",
        require : true
    },
    content : {
        type : "String",
        require : true
    },
    createdby : {
        type : "String",
        require : true 
    }
})


export const blogModel = mongoose.model("blog" , blogSchema);