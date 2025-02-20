import postMessage from '../models/postMessage.js'


export const getPost=(req,res)=>{
    try{
        const postMessages=postMessage.find()
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}


export const createPost= async (req,res)=>{
   const post =req.body()
   const newPost=new postMessage(post)

   try{
    await newPost.save()

    res.status(201).json(newPost)
   }
   catch(error){
    res.status(409).json({message:error.msg})
   }
   
}