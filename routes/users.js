const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controllers/users_controller');
const submitController=require('../controllers/submit_sign_up_controller');
console.log('Router loaded');
router.get('/profile',userController.profile);
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/sign_in'}), submitController.createSession);
module.exports=router;