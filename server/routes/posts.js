import express from 'express'
import { getPost } from '../controllers/posts.js';

const router=express.Router();

router.get('/',getPost)

router.post('/',createPost)

export default router