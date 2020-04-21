const express=require('express');
const router=express.Router();
const postController=require('../controllers/posts_controller');
console.log('Router loaded');
router.get('/post',postController.shil);
module.exports=router;