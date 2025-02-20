import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'


const app = express()
app.use('/posts',postRoutes)
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());


const CONNECTION_URL='mongodb+srv://thamizh:dqiJbs3DoWhO0g6i@thamizhcluster.lid7i.mongodb.net/?retryWrites=true&w=majority&appName=thamizhcluster'
const PORT =process.env.port || 5000

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`)))
.catch((err)=>console.log(err.message))