import { blogModel } from "../model/blog.model.js";




const CreateBlog = async( req , res) =>{

    const { title , content , createdby } = req.body;

    console.log(title , content , createdby);

    const blog = await blogModel.create({
       title : title,
       content : content,
       createdby : createdby

    });

    console.log("blog : " , blog);

    return res.json({
        message : "blog create successfully......",
        blog
    })


}


const getBlog = async( req , res) =>{

    const { id } = req.body;

    console.log("blog id : " , id);
 


    const blog = await blogModel.findById(id);

    // console.log("blog : " , blog);

    return res.json({
        message : "blog get successfully......",
        blog
    })


}


//update

const updateBlog = async( req , res) =>{

    const { title , content , id } = req.body;

    

    const blog = await blogModel.findByIdAndUpdate(id ,{
        $set : {
            title  ,
            content
        },
        
        
    } ,
{
    new : true
})

    console.log("blog : " , blog);

    return res.json({
        message : "blog update successfully......",
        blog
    })


}



const deleteBlog = async( req , res) =>{

    // const { id } = req.body;
    // The issue is that 
    //axios.delete does not support sending a request body by default. DELETE requests should not include a body, and this is why req.body is empty. To resolve this, you can either:


    const { id } = req.query;


    console.log("deleted blog id : " , id);

    const blog = await blogModel.findByIdAndDelete(id);
    // const blog = await blogModel.findById(id);

    if(!blog){
        return res.json({
            message : "blog Deleted already......",
           
        })
    
    }


    console.log("blog : " , blog);

    return res.json({
        message : "blog Deleted successfully......",
       
    })


}


const allBlog = async( req , res) =>{

    

    

    const blog = await blogModel.find();

    // console.log("blog : " , blog);

    return res.json({
       
        blog
    })


}

export{
    CreateBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    allBlog
}