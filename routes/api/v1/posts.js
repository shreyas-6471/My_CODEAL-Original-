const express=require('express');
const router=express.Router();
const postApiController=require('../../../controllers/api/v1/post_api_v1');
router.get('/',postApiController.index);

module.exports=router;