const express=require('express');
const router=express.Router();
const passport=require('passport');
const homeController=require('../controllers/home_controller');
const sign_in_Controller=require('../controllers/sign_in_controller');
const sign_up_Controller=require('../controllers/sign_up_controller');
const submit_sign_up_Controller=require('../controllers/submit_sign_up_controller');
const profile_Controller=require('../controllers/profile_controller');
const sign_out_Controller=require('../controllers/sign_out_controller');
const post_submit_Controller=require('../controllers/post_submit_controller');
const comment_submit_Controller=require('../controllers/comment_submit_controller');
const likesController=require('../controllers/likes_controller');
console.log('Router loaded');
router.use('/users', require('./users'));
router.get('/',homeController.shil);
router.get('/sign_in',sign_in_Controller.shil);
router.get('/sign_up',sign_up_Controller.shil);
router.post('/display',submit_sign_up_Controller.shil);
router.post('/profile',passport.checkAuthentication,profile_Controller.shil);
router.post('/change_profile/:id',passport.checkAuthentication,profile_Controller.update);
router.get('/sign_out',sign_out_Controller.shil);
router.post('/post_submit',post_submit_Controller.shil);
router.post('/comment_submit',comment_submit_Controller.shil);
router.post('/destroy',passport.checkAuthentication,post_submit_Controller.destroy);
router.post('/delete_comment',post_submit_Controller.delete);
router.get('/toggle', likesController.toggle);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/sign_in'}
),submit_sign_up_Controller.createSession);
router.use('/user',require('./users'));
router.use('/admin',require('./post'));
//router.use('/likes',require('./likes'));
router.use('/api',require('./api'));
module.exports=router;